import { ReactNode, createContext, useContext, useState } from "react";

type CountContextType = {
    count: number,
    setCount: (n: number) => void
};
const countDefault: CountContextType = {
    count: 0,
    setCount: () => {}
}
const CountContext = createContext<CountContextType>(countDefault);

export const CountProvider = ({children}: {children: ReactNode}) => {
    const [count, setCount] = useState(0)

    return (
        <CountContext.Provider value={{count, setCount}}>
            {children}
        </CountContext.Provider>
    )
};
export const useCount = () => useContext(CountContext)