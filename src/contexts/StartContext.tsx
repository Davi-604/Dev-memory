'use client'

import { ReactNode, createContext, useContext, useState } from "react";

type StartCtxType = {
    start: boolean,
    setStart: (set: boolean) => void
};
const startDefault: StartCtxType = {
    start: false,
    setStart: () => {}
}
const StartContext = createContext<StartCtxType>(startDefault);

export const StartProvider = ({children}: {children: ReactNode}) => {
    const [start, setStart] = useState(false);

    return (
        <StartContext.Provider value={{start, setStart}}>
            {children}
        </StartContext.Provider>
    )
};

export const useStart = () => useContext(StartContext);