import { useStart } from "@/contexts/StartContext"
import { items } from "@/data/items"
import { CardItem } from "@/types/CardItem"

type Props = {
    currentItem: CardItem,
    onClickProp: () => void
}

export const CardElement = ({currentItem, onClickProp}: Props) => {
    const startCtx = useStart();

    return (
        <button 
            className={`px-3 h-24 rounded-lg inline-flex justify-center items-center 
                transition-colors ease-linear duration-300
                ${currentItem.shown || currentItem.permanentShown ? 'bg-blue-500' : 'bg-gray-400'}
            `}
            onClick={onClickProp}
        >
            {currentItem.permanentShown === false && currentItem.shown === false &&
                <img 
                    src="/images/svgs/b7.svg"
                    className="w-14 opacity-40"
                />
            }
            {(currentItem.shown || currentItem.permanentShown) && currentItem.item !== null &&
                <img 
                    src={items[currentItem.item].icon}
                    className="w-14"
                />
            }
        </button>
    )
}