import { useState } from "react"
import Container from "../Layout/Container"
import Count1 from "../Count1/Count1"

const Count = () => {
     const [countIn, setCountIn] = useState(0)




    const handleCount1 = () => {
        setCountIn(countIn + 5)
    }
    const handleCount3 = () => {
        setCountIn(countIn + 3)
    }
    const handleCount2 = () => {
        setCountIn(countIn - 2)
    }
    const handleCountMult5 = () => {
        setCountIn(countIn * 5)
    }
    const handleCountDiv = () => {
        setCountIn(countIn / 2)
    }
    const handleCountDubble = () => {
        setCountIn(countIn * countIn)
    }
    const handleCountRest = () => {
        setCountIn(0)
    }

    return(
        <div className="bg-gray-300 pt-[120px] pb-[120px] overflow-x-hidden">
            <Container>
           <div className="flex justify-center items-center flex-col mt-10">
            <p className="md:w-auto w-[300px] text-center font-semibold md:text-[24px] text-[16px]">React counter using useState manages a numeric value as state, updates it through button clicks, and re-renders the UI instantly. It’s a simple example of state management, event handling, and reactive updates in React applications.</p>
            <h1 className="md:text-5xl text-4xl font-bold text-black md:mt-[30px] mt-3 text-purple-700">Count </h1>
            <h2 className="md:text-4xl text-3xl font-bold text-black md:mt-[30px] mt-3 text-gray-800">{countIn}</h2>
            <h3 className="md:text-8xl text-6xl font-bold md:mt-10 mt-2"></h3>
          <div className="flex md:gap-x-5 gap-x-2 md:mt-[-30px] mt-[0px]">
              <button
              onClick={handleCount3}
            className="border-none cursor-pointer hover:bg-green-600 hover:text-white mt-10 px-10 py-4 rounded-2xl bg-green-500 md:text-4xl text-[18px] capitalize font-semibold hover:scale-105 transition-all duration-100 ">3+</button>
                <button
                onClick={handleCount1}
              className="border-none cursor-pointer hover:bg-green-600  hover:text-white mt-10 px-10 py-4 rounded-2xl bg-green-500 md:text-4xl text-[18px] font-semibold hover:scale-105 transition-all delay-100 ">Increment by 5</button>
                <button
                onClick={handleCount2}
              className="border-none cursor-pointer hover:bg-green-600  hover:text-white mt-10 px-10 py-4 rounded-2xl bg-green-500 md:text-4xl text-[18px] capitalize font-semibold hover:scale-105 transition-all duration-100 ">-2</button>
          </div>
            <div className="flex md:gap-x-5 gap-x-2 md:mt-0 mt-[-30px]">
              <button
              onClick={handleCountMult5}
              className="border-none cursor-pointer hover:bg-green-600 t hover:text-white mt-10 md:px-10 px-5 py-4 rounded-2xl bg-green-500 md:text-4xl text-[18px] capitalize font-semibold hover:scale-105 transition-all duration-100 ">Mult by 5</button>
                <button
                onClick={handleCountDiv}
              className="border-none cursor-pointer hover:bg-green-600 hover:text-white mt-10 md:px-10 px-5 py-4 rounded-2xl bg-green-500 md:text-4xl text-[18px] font-semibold hover:scale-105 transition-all delay-100 ">Divided by 2</button>
                <button
                onClick={handleCountDubble}
              className="border-none cursor-pointer hover:bg-green-600 hover:text-white mt-10 md:px-10 px-5 py-4 rounded-2xl bg-green-500 md:text-4xl text-[18px]  font-semibold hover:scale-105 transition-all duration-100 ">Count * Count</button>
          </div>
          <div>
           <button
              onClick={handleCountRest}
              className="border-none cursor-pointer hover:bg-red-600 hover:text-white md:px-50 px-35 py-4 rounded-2xl bg-red-400 md:text-4xl text-[18px] capitalize font-semibold hover:scale-105 transition-all duration-100 md:mt-10 mt-[15px]">Rest</button>
          </div>
          </div>
            </Container>
        </div>
    )
}


export default Count