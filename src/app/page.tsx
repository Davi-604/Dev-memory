'use client'

import { Main } from "@/components/Main";
import { CountProvider } from "@/contexts/CountContext";
import { StartProvider } from "@/contexts/StartContext";
import { TimerProvider } from "@/contexts/TimerContext";


const Page = () => {
  return (
    <StartProvider>
      <CountProvider>
        <TimerProvider>
          <Main />
        </TimerProvider>
      </CountProvider>
    </StartProvider>
  )
};

export default Page
