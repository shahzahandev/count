import { useState } from "react";

const Count2 = () => {
    const [count, setCount] = useState("Hello")

    return (
        <div className="bg-gray-300 pt-[150px] pb-[180px]">
            <div className="flex justify-center items-center flex-col mt-10">
            <h1 className="text-4xl font-semibold text-red-500">You write :</h1>

                <h3 className=" text-3xl font-bold mt-10 w-[800px] h-15">{count}</h3>
                <input
                    value={count}
                    onChange={(e) => setCount(e.target.value)}
                    type="text"
                    className="border-none w-[800px] px-5 py-6 mt-10 bg-amber-50 rounded-2xl outline-none text-2xl font-semibold" />
                <button
                    onClick={() => setCount("")}
                    className="border-none cursor-pointer hover:bg-red-600 transition-all duration-200 hover:text-white mt-10 px-10 py-4 rounded-2xl bg-red-500 text-4xl capitalize font-semibold">Rest</button>
            </div>
        </div>
    )
}

export default Count2