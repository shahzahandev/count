import { useState } from "react";
import Container from "../Layout/Container";

const Count2 = () => {
    const [count, setCount] = useState("Hello")

    return (
        <div className="bg-gray-400 pt-[120px] pb-[120px] overflow-x-hidden">
            <Container>
                <div>
                    <div className="flex justify-center items-center flex-col mt-10">
                        <p className="md:w-auto w-[300px] text-center font-semibold md:text-[24px] text-[16px]">   In this example, the text state variable holds a string. When you type, handleChange reads the latest input value from the browser input DOM element, and calls setText to update the state. This allows you to display the current text below..</p>
                        <h1 className="text-4xl font-bold text-purple-700 mt-5">Content</h1>
                        <h3 className=" text-center md:text-3xl font-semibold mt-10 mb-5 md:w-auto w-[330px]">{count}</h3>
                        <input
                            value={count}
                            onChange={(e) => setCount(e.target.value)}
                            type="text"
                            className="border-none px-5 py-6 md:mt-10 bg-amber-50 rounded-2xl outline-none text-[16px] font-semibold w-full" />
                        <button
                            onClick={() => setCount("")}
                            className="border-none cursor-pointer hover:bg-red-600 transition-all duration-200 hover:text-white md:mt-10 mt-5 px-10 py-4 rounded-2xl bg-red-500 md:text-4xl text-2xl capitalize font-semibold">Rest</button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Count2