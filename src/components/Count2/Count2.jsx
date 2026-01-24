import { useState } from "react";
import Container from "../Layout/Container";
import exam3 from "../../assets/useStateExam3.png"


const Count2 = () => {
    const [count, setCount] = useState("Hello")

    return (
        <div className="bg-gray-900 pt-[0px] pb-[10px] overflow-x-hidden px-3 md:px-0 ">
            <Container>
                <div>
                    <div className="">
                          <h2 className='text-third font-bold md:text-2xl md:mt-5 mt-2'>Basic useState examples</h2>
                         <h3 className='text-white/60 font-bold md:text-[20px]'>Example 3 of 4: Text field (string)</h3>
                         <p className='text-white font-semibold md:text-[20px] md:mt-5 mt-2 md:leading-9 leading-7'>In this example, the text state variable holds a string. When you type, handleChange reads the latest input value from the browser input DOM element, and calls setText to update the state. This allows you to display the current text below.</p>
                          <img src={exam3} alt="" className="md:w-[60%] w-full mt-5 rounded-[20px] shadow-gray-800 shadow-2xl"/> 
                        <h3 className=" text-center md:text-2xl font-semibold mt-5 mb-2 md:w-[1100px] w-[330px] h-32 overflow-y-scroll bg-white/70 px-5 rounded-[5px] text-left" >{count}</h3>
                        <div className="flex items-center gap-x-2">
                         <input
                            value={count}
                            onChange={(e) => setCount(e.target.value)}
                            type="text"
                            className="border-none px-5 py-6 md:mt-2 bg-white/70 rounded-2xl outline-none text-[16px] font-semibold md:w-full w-full" />
                        <button
                            onClick={() => setCount("")}
                            className="border-none cursor-pointer hover:bg-red-600 transition-all duration-200 hover:text-white md:mt-5 mt-4 px-10 py-2 rounded-2xl bg-red-500 md:text-4xl text-2xl capitalize font-semibold">Rest</button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Count2