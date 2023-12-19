import { GameArea } from "./GameArea"
import { Panel } from "./Panel"

export const Main = () => {
    return (
        <div className="container xl:max-w-5xl mx-auto p-5 md:p-10 grid grid-cols-1 lg:grid-cols-2">
          <Panel />
          <GameArea />
        </div>
      ) 
}