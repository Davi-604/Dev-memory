import { ReactNode, createContext, useContext, useState } from "react";

type TimerCtxType = {
    timer: boolean,
    setTimer: (set: boolean) => void
};
const TimerDefault: TimerCtxType = {
    timer: false,
    setTimer: () => {}
}
const TimerContext = createContext<TimerCtxType>(TimerDefault);

export const TimerProvider = ({children}: {children: ReactNode}) => {
    const [timer, setTimer] = useState(false);

    return (
        <TimerContext.Provider value={{timer, setTimer}}>
            {children}
        </TimerContext.Provider>
    )
};

export const useTimer = () => useContext(TimerContext);