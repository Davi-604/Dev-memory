import { useCount } from "@/contexts/CountContext";
import { useStart } from "@/contexts/StartContext"
import { useTimer } from "@/contexts/TimerContext";

export const ResetBtn = () => {
    const startCtx = useStart();
    const countCtx = useCount();
    const timerCtx = useTimer()

    const resetGame = () => {
        startCtx.setStart(true);
        timerCtx.setTimer(true)
        countCtx.setCount(0);

        if (countCtx.count > 0) {
            timerCtx.setTimer(false)
        }
    }

    return (
        <button 
            onClick={resetGame}
            disabled={startCtx.start}
            className={`py-3 px-4 w-full inline-flex justify-center items-center rounded-lg bg-blue-700 text-white 
            cursor-pointer opacity-100 transition-opacity duration-300 hover:opacity-80
                ${startCtx.start ? 'hidden' : ''}`}
        >
            <div className="">
                <img className="border-r border-gray-300 pr-3 w-8" src="/images/svgs/restart.svg"/>
            </div>
            <div className="ml-5">{countCtx.count === 0 ? 'Começar' : 'Reiniciar'}</div>
        </button>
    )
}