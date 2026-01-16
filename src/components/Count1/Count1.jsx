import { useState } from "react";
import Container from "../Layout/Container";

const Count1 = () => {

  const [count1, setCount1] = useState(0)
  return (
    <div  className="bg-gray-400 md:pt-[120px] pt-[140px] md:pb-[120px] pb-[120px]">
      <Container>
        <div>
          <div className="flex justify-center items-center flex-col mt-10">
            <p className="md:w-auto w-[300px] text-center font-semibold md:text-[24px] text-[16px]">React counter using useState manages a numeric value as state, updates it through button clicks, and re-renders the UI instantly. It’s a simple example of state management, event handling, and reactive updates in React applications.</p>
            <h1 className="md:text-5xl text-4xl font-bold text-black md:mt-[30px] mt-3 text-purple-700">Count</h1>
            <h3 className="md:text-8xl text-6xl font-bold md:mt-10 mt-2">{count1}</h3>
            <button
              onClick={() => setCount1(count1 + 1)}
              className="border-none cursor-pointer hover:bg-green-600 transition-all duration-200 hover:text-white mt-10 px-10 py-4 rounded-2xl bg-green-500 md:text-4xl text-2xl capitalize font-semibold">Increment</button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Count1