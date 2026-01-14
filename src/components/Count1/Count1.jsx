import { useState } from "react";

const Count1 = () => {

    const [count1, setCount1] = useState (0)
  return (
    <div>
             <div className="bg-gray-300 pt-[150px] pb-[180px]">
            <div className="flex justify-center items-center flex-col mt-10">
            <h1 className="text-5xl font-bold text-black">Count</h1>

                <h3 className=" text-8xl font-bold mt-10">{count1}</h3>
                <button
                     onClick={() => setCount1(count1 + 1)}
                    className="border-none cursor-pointer hover:bg-green-600 transition-all duration-200 hover:text-white mt-10 px-10 py-4 rounded-2xl bg-green-500 text-4xl capitalize font-semibold">Rest</button>
            </div>
        </div>
    </div>
  )
}

export default Count1