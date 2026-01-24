import { useState } from "react"
import Container from "../Layout/Container"
import exam2 from "../../assets/useStateExam2.png"

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

    return (
        <div className="bg-gray-900 pt-[0px] pb-[50px] overflow-x-hidden px-3 md:px-0">
            <Container>
                <div className="">
                    <h2 className='text-third font-bold md:text-2xl md:mt-5 mt-2'>Basic useState examples</h2>
                    <h3 className='text-white/60 font-bold md:text-[20px]'>Example 2 of 4: Count with Multiple function</h3>
                    <img src={exam2} alt="" className="md:w-[40%] w-full mt-5 rounded-[20px] shadow-gray-800 shadow-2xl" />
                    <h2 className="md:text-4xl text-3xl font-bold text-white md:mt-[5px] mt-2 text-center">{countIn}</h2>
                    <div className="flex md:flex-row flex-col gap-x-2 md:mt-10 mt-4 gap-y-4">
                        <div className="flex items-center flex-row gap-x-2">
                            <button
                                onClick={handleCount3}
                                className="border-none cursor-pointer px-10 py-1 rounded-2xl bg-white/70 md:text-2xl text-[18px]">3+</button>
                            <button
                                onClick={handleCount1}
                                className="border-none cursor-pointer px-10 py-1 rounded-2xl bg-white/70 md:text-2xl text-[18px]">Add by 5</button>
                            <button
                                onClick={handleCount2}
                                className="border-none cursor-pointer px-10 py-1 rounded-2xl bg-white/70 md:text-2xl text-[18px]">-2</button>
                        </div>
                        <div className="flex items-center md:gap-x-5 gap-x-2 md:mt-0">
                            <button
                                onClick={handleCountMult5}
                                className="border-none cursor-pointer md:px-10 px-4 py-1 rounded-[10px] bg-white/70 md:text-2xl text-[18px]">num*5</button>
                            <button
                                onClick={handleCountDiv}
                                className="border-none cursor-pointer md:px-10 px-4 py-1 rounded-[10px] bg-white/70 md:text-2xl text-[18px]">num*2</button>
                            <button
                                onClick={handleCountDubble}
                                className="border-none cursor-pointer md:px-10 px-4 py-1 rounded-[10px] bg-white/70 md:text-2xl text-[18px]">num*num</button>
                            <button
                                onClick={handleCountRest}
                                className="border-none cursor-pointer md:px-15 px-4 py-1 rounded-[10px] text-black bg-red-500 md:text-2xl text-[18px]"
                            >Rest</button>
                        </div>
                    </div>
                    <div className="flex md:gap-x-5 gap-x-2 md:mt-[-30px] mt-[0px]">
                    </div>
                </div>
            </Container>
        </div>
    )
}


export default Count