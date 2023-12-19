'use client'

import { useStart } from "@/contexts/StartContext";
import { items } from "@/data/items";
import { CardItem } from "@/types/CardItem";
import { useContext, useEffect, useState } from "react"
import { CardElement } from "./CardElement";
import { useCount } from "@/contexts/CountContext";
import { useTimer } from "@/contexts/TimerContext";

export const GameArea = () => {
    const [shownCount, setShownCount] = useState(0);
    const [cardItems, setCardItems] = useState<CardItem[]>([]);

    const startCtx = useStart();
    const countCtx = useCount();
    const timerCtx = useTimer()

    useEffect(() => {
        let tempCards: CardItem[] = [];
        for (let i = 0; i < (items.length * 2); i++) {
            tempCards.push({
                item: null,
                shown: false,
                permanentShown: false
            })
        };  

        for (let w = 0; w < 2; w++) {
            for (let i = 0; i < items.length; i++) {
                let pos = -1;
                while (pos < 0 || tempCards[pos].item !== null) {
                    pos = Math.floor(Math.random() * (items.length * 2));
                }
                tempCards[pos].item = i
            }
        };

        setCardItems(tempCards);
    }, [!timerCtx.timer]);

    useEffect (() => {
        if (shownCount === 2) {
            let cardsOpened = cardItems.filter(item => item.shown === true);

            if (cardsOpened.length === 2) {
                if (cardsOpened[0].item === cardsOpened[1].item) {
                    let tempCards = [...cardItems];
                    for (let i in tempCards) {
                        if (tempCards[i].shown) {
                            tempCards[i].permanentShown = true;
                            tempCards[i].shown = false;
                        }
                    };
                    setCardItems(tempCards);
                    setShownCount(0)
                } else {
                    setTimeout(() => {
                        let tempCards = [...cardItems];
                        for (let i in tempCards) {
                            tempCards[i].shown = false
                        };
                        setCardItems(tempCards);
                        setShownCount(0)
                    }, 1000)
                }
            }
            countCtx.setCount(countCtx.count + 1)
        }
    }, [shownCount, cardItems]);

    useEffect(() => {
        if (countCtx.count > 0 && cardItems.every(item => item.permanentShown === true)) {
            startCtx.setStart(false);
        }
    }, [countCtx.count, cardItems]);


    const handleItemClick = (index: number) => {
        if (startCtx.start && index !== null && shownCount < 2) {
            let tempCards = [...cardItems];
            if (!tempCards[index].permanentShown && !tempCards[index].shown) {
                tempCards[index].shown = true;
                setShownCount(shownCount + 1)
            }
            setCardItems(tempCards)
        }
    }

    return (
        <div className="grid grid-cols-4 gap-3 lg:gap-5 mx-auto h-full">
            {cardItems.map((item, index) => (
                <CardElement
                    key={index}
                    currentItem={item}
                    onClickProp={() => handleItemClick(index)}
                />
            ))}
        </div>
    )
}