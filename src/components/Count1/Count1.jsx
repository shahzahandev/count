import { useState } from "react";
import Container from "../Layout/Container";
import Count from "../Count/Count"
import Count2 from "../Count2/Count2";
import CheckBox from "../CheckBox/CheckBox"
import useStateImg from "../../assets/useState.png"
import exam1 from "../../assets/useStateExam1.png"




const Count1 = () => {

  const [count1, setCount1] = useState(0)
  return (
    <>
        <div  className=" bg-gray-900 md:pt-[80px] pt-[50px] md:pb-[10px] pb-[10px] md:px-0 px-5 text-white">
      <Container>
        <div>
          <div className="flex flex-col mt-10 pb-10">
            <h2  className='text-white font-bold md:text-5xl text-3xl'>useState <i className="text-secondary">Hook</i></h2>
            <p className='text-white font-semibold md:text-[20px] mt-5 md:leading-9 leading-7'>useState is a React Hook that lets you add a <span className="text-secondary font-bold">State variable</span> to your component.</p>
            <p >React JS-এ useState বলতে বুঝায় এমন একটি Hook, যেটা দিয়ে functional component-এর ভেতরে data (state) রাখা ও পরিবর্তন করা যায়।</p>
             <h3 className='text-white font-semibold md:text-[24px] text-[18px] mt-5 leading-9'>সহজভাবে 👇</h3>
             <p className='text-white font-semibold md:text-[20px] md:mt-5 md:leading-9 leading-7'> <span className="text-secondary font-bold">useState</span> = মান  (value) রাখা + সেই মান (value) পরিবর্তন করার উপায়</p>
             <img src={useStateImg} alt="" className="md:w-[50%] w-full mt-5 rounded-[20px] shadow-gray-800 shadow-2xl"/>
             <h2 className='text-third font-bold md:text-2xl md:mt-5 mt-2'>Basic useState examples</h2>
             <h3 className='text-white/60 font-bold md:text-[20px]'>Example 1 of 4: Counter (number)</h3>
             <p className='text-white font-semibold md:text-[20px] md:mt-5 md:leading-9 leading-7'>In this example, the count state variable holds a number. Clicking the button increments it.</p>
             <img src={exam1} alt="" className="md:w-[60%] w-full mt-5 rounded-[20px] shadow-gray-800 shadow-2xl"/>        
            <button
              onClick={() => setCount1(count1 + 1)}
              className="border-none cursor-pointer md:mt-5 mt-4 px-15 md:py-4 rounded-[10px] text-black bg-white/70 md:text-3xl text-[16px] font-semibold"> You pressed me <span className="md:font-bold font-semibold md:text-4xl text-2xl px-2">{count1}</span> times</button>
          </div>
        </div>
      </Container>
    </div>
     <Count></Count>
     <Count2></Count2>
     <CheckBox></CheckBox>
    </>

  )
}

export default Count1