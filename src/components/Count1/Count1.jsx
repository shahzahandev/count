import { useState } from "react";
import Container from "../Layout/Container";
import Count from "../Count/Count"
import Count2 from "../Count2/Count2";
import CheckBox from "../CheckBox/CheckBox"
import useStateImg from "../../assets/useState.png"
import exam1 from "../../assets/useStateExam1.png"
import { NavLink } from 'react-router-dom'




const Count1 = () => {

  const [count1, setCount1] = useState(0)
  return (
    <>
        <div  className=" bg-gray-900 md:pt-[80px] pt-[50px] md:pb-[10px] pb-[10px] md:px-0 px-5 text-white relative">
          <div className='fixed md:block hidden bg-gray-800 top-20 right-0 w-[300px] h-[600px] rounded-tl-[10px] rounded-bl-[10px]'>
                <ul className='transition-all duration-200 ease-in flex flex-col items-start gap-1 text-[14px] font-medium  text-secondary cursor-pointer'>       
                    <li className="bg-transparent py-1 px-4 rounded-[5px] hover:bg-gray-700 hover:w-full">  <NavLink to="/useState">useState   </NavLink></li>
                    <li className="bg-transparent py-1 px-4 rounded-[5px] hover:bg-gray-700 hover:w-full"> <NavLink to="/useEffect">useEffect </NavLink></li>
                    <li className="bg-transparent py-1 px-4 rounded-[5px] hover:bg-gray-700 hover:w-full">useCallback</li>
                    <li className="bg-transparent py-1 px-4 rounded-[5px] hover:bg-gray-700 hover:w-full">useMemo</li>
                    <li className="bg-transparent py-1 px-4 rounded-[5px] hover:bg-gray-700 hover:w-full">useRef</li>
                    <li className="bg-transparent py-1 px-4 rounded-[5px] hover:bg-gray-700 hover:w-full">useId</li>
                    <li className="bg-transparent py-1 px-4 rounded-[5px] hover:bg-gray-700 hover:w-full">useContext</li>
                    <li className="bg-transparent py-1 px-4 rounded-[5px] hover:bg-gray-700 hover:w-full">useEffectEvent</li>
                    <li className="bg-transparent py-1 px-4 rounded-[5px] hover:bg-gray-700 hover:w-full">useReducer</li>
                    <li className="bg-transparent py-1 px-4 rounded-[5px] hover:bg-gray-700 hover:w-full">useTransition</li>
                    <li className="bg-transparent py-1 px-4 rounded-[5px] hover:bg-gray-700 hover:w-full">useOptimistic</li>
                    <li className="bg-transparent py-1 px-4 rounded-[5px] hover:bg-gray-700 hover:w-full">useActionState</li>
                    <li className="bg-transparent py-1 px-4 rounded-[5px] hover:bg-gray-700 hover:w-full">useDebugValue</li>
                    <li className="bg-transparent py-1 px-4 rounded-[5px] hover:bg-gray-700 hover:w-full">useDeferredValue</li>
                    <li className="bg-transparent py-1 px-4 rounded-[5px] hover:bg-gray-700 hover:w-full">useSyncExternalStore</li>
                    <li className="bg-transparent py-1 px-4 rounded-[5px] hover:bg-gray-700 hover:w-full">useLayoutEffect</li>
                    <li className="bg-transparent py-1 px-4 rounded-[5px] hover:bg-gray-700 hover:w-full">useInsertionEffect</li>
                    <li className="bg-transparent py-1 px-4 rounded-[5px] hover:bg-gray-700 hover:w-full">useImperativeHandle</li>
                </ul>
            </div>
      <Container>
        <div className="md:w-[80%] w-[100%]">
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