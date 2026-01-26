import React, { useEffect, useState } from 'react'
import Container from '../Layout/Container'
import useEffectImg from "../../assets/useEffectImg.png"
import useEffectExam1 from "../../assets/useEffecrtExam1.png"
import { NavLink } from 'react-router-dom'

const UseEffectCount = () => {
    
    const [num, setNum] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setNum((num) => num + 1)
        }, 2000)
    })
  return (
    <>
        <div className='bg-gray-900 pt-[120px] pb-[50px] md:px-0 px-5 relative'>
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
                <div className='md:w-[80%] w-[100%]'> 
                    <h2  className='text-white font-bold md:text-5xl text-3xl'>useEffect <i className="text-secondary">Hook</i></h2>
                      <p className='text-white font-semibold md:text-[20px] mt-5 md:leading-9 leading-7'> <span  className="text-secondary font-bold">useEffect</span> is a React Hook that lets you <span className="text-secondary font-bold">synchronize a component with an external system.</span> React-এ <span  className="text-secondary font-bold">useEffect</span> হলো একটি Hook, যেটা দিয়ে component-এর side effect কাজগুলো নিয়ন্ত্রণ করা হয়।</p>
                      <p className='text-white font-semibold md:text-[20px] mt-1 md:leading-9 leading-7'>The <span  className="text-secondary font-bold">useEffect</span> Hook allows you to perform side effects in your components.</p>
                      <p className='text-white font-semibold md:text-[20px] mt-3 md:leading-9 leading-7'><span className='text-third font-bold md:text-[24px]'>Some examples  of side effects are :</span> Fetching data, Directly updating the DOM, and Timers.</p>
                    <p className='text-white font-semibold md:text-[20px] mt-0 md:leading-9 leading-7'><span  className="text-secondary font-bold">useEffect</span> accepts two arguments. The second argument is optional.</p>
                    <img src={useEffectImg} alt="" className="md:w-[50%] w-full mt-5 rounded-[20px] shadow-gray-800 shadow-2xl"/>
                           <h3 className='text-white font-semibold md:text-[24px] text-[18px] mt-5 leading-9'>useEffect কেন ব্যবহার করি ?</h3>
                    <p className='text-white font-semibold md:text-[18px] md:mt-2 md:leading-9 leading-7'>
                        👉 Component render হওয়ার পর নির্দিষ্ট কাজ চালানোর জন্য।</p>
                    <h3 className='text-third font-bold md:text-[24px] text-[18px] mt-5 leading-9'>Example :</h3>
                    <p className='text-white font-semibold md:text-[20px] mt-0 md:leading-9 leading-7'>Use <span className='text-secondary font-bold md:text-[18px]'> setTimeout( )</span> to count 1 second after initial render:</p>
                   <img src={useEffectExam1} alt="" className="md:w-[50%] w-full mt-5 rounded-[20px] shadow-gray-800 shadow-2xl"/>

                    <h4 className=' text-white md:text-3xl text-[24px] font-bold md:mt-5 mt-2'>I've rendered {num} times!</h4>
                       <div className='flex justify-center flex-col mt-10'>
                        <h2 className='text-secondary font-bold md:text-3xl text-2xl'> <i>Hooks</i></h2>
                        <div className='flex flex-col md:gap-y-2 gap-y-2 gap-x-15 md:mt-5 mt-2'>
                            <div>
                                <ul className='flex md:flex-row flex-col font-medium md:gap-5 gap-2'>
                                    <NavLink to="/useState">
                                      <li className="px-3 py-1 bg-gray-800 cursor-pointer rounded-[15px] text-secondary font-semibold">useState</li>
                                    </NavLink>
                                      <NavLink to="/useEffect">
                                    <li className="px-3 py-1 bg-gray-800 cursor-pointer rounded-[15px] text-secondary font-semibold">useEffect</li>
                                    </NavLink>
                                    <li className="px-3 py-1 bg-gray-800 cursor-pointer rounded-[15px] text-secondary font-semibold">useCallback</li>
                                    <li className="px-3 py-1 bg-gray-800 cursor-pointer rounded-[15px] text-secondary font-semibold">useMemo</li>
                                    <li className="px-3 py-1 bg-gray-800 cursor-pointer rounded-[15px] text-secondary font-semibold">useRef</li>
                                </ul>
                            </div>

                            <div>
                                <ul className='flex md:flex-row flex-col font-medium md:gap-5 gap-2'>
                                    <li className="px-3 py-1 bg-gray-800 cursor-pointer rounded-[15px] text-secondary font-semibold">useId</li>
                                    <li className="px-3 py-1 bg-gray-800 cursor-pointer rounded-[15px] text-secondary font-semibold">useContext</li>
                                    <li className="px-3 py-1 bg-gray-800 cursor-pointer rounded-[15px] text-secondary font-semibold">useEffectEvent</li>
                                    <li className="px-3 py-1 bg-gray-800 cursor-pointer rounded-[15px] text-secondary font-semibold">useReducer</li>
                                    <li className="px-3 py-1 bg-gray-800 cursor-pointer rounded-[15px] text-secondary font-semibold">useTransition</li>
                                </ul>
                            </div>

                              <div>
                                <ul className='flex md:flex-row flex-col font-medium md:gap-5 gap-2'>
                                    <li className="px-3 py-1 bg-gray-800 cursor-pointer rounded-[15px] text-secondary font-semibold">useOptimistic</li>
                                    <li className="px-3 py-1 bg-gray-800 cursor-pointer rounded-[15px] text-secondary font-semibold">useActionState</li>
                                    <li className="px-3 py-1 bg-gray-800 cursor-pointer rounded-[15px] text-secondary font-semibold">useDebugValue</li>
                                    <li className="px-3 py-1 bg-gray-800 cursor-pointer rounded-[15px] text-secondary font-semibold">useDeferredValue</li>
                                </ul>
                            </div>

                               <div>
                                <ul className='flex md:flex-row flex-col font-medium md:gap-5 gap-2'>
                                    <li className="px-3 py-1 bg-gray-800 cursor-pointer rounded-[15px] text-secondary font-semibold">useSyncExternalStore</li>
                                    <li className="px-3 py-1 bg-gray-800 cursor-pointer rounded-[15px] text-secondary font-semibold">useLayoutEffect</li>
                                    <li className="px-3 py-1 bg-gray-800 cursor-pointer rounded-[15px] text-secondary font-semibold">useInsertionEffect</li>
                                         <li className="px-3 py-1 bg-gray-800 cursor-pointer rounded-[15px] text-secondary font-semibold">useImperativeHandle</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </Container>
        </div>
    </>

  )
}

export default UseEffectCount