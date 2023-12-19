'use client'

import { Movements } from "./Movements"
import { ResetBtn } from "./ResetBtn"
import { TimeCount } from "./TimeCount"

export const Panel = () => {
    return (
        <div className="mb-5 md:mb-10 md:text-center lg:text-left lg:mb-0 ">
            <img className="w-60 mb-8 lg:mb-5" src="/images/assets/devmemory_logo.png"/>
            <TimeCount />
            <Movements />
            <ResetBtn /> 
        </div>
    )
}