import { useCount } from "@/contexts/CountContext"
import { useState } from "react"

export const Movements = () => {
    const countCtx = useCount()

    return (
        <>
            <h3 className="text-gray-400 text-lg mb-2">Movimentos</h3>
            <h1 className="text-4xl font-bold mb-8">
                {countCtx.count}
            </h1>
        </>
    )
}