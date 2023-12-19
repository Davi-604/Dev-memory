import { useStart } from "@/contexts/StartContext";
import { useTimer } from "@/contexts/TimerContext";
import { formatTime } from "@/utils/formatTime";
import { useEffect, useState } from "react"

export const TimeCount = () => {
    const [timeElapsed, setTimeElapsed] = useState(0);

    const startCtx = useStart();
    const timerCtx = useTimer();
    
    const timer = setTimeout(() => {
        if (startCtx.start) {
            setTimeElapsed(timeElapsed + 1);
            timerCtx.setTimer(true)
        }
        if (!timerCtx.timer) {
            setTimeElapsed(0)
        }
    }, 1000);
    
    

    return (
        <>
            <h3 className="text-gray-400 text-lg mb-2">Tempo</h3>
            <h1 className="text-4xl font-bold mb-8">
                {formatTime(timeElapsed)}
            </h1>
        </>
    )
}