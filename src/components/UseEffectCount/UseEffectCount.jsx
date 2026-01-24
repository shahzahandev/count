import React, { useEffect, useState } from 'react'
import Container from '../Layout/Container'
import useEffectImg from "../../assets/useEffectImg.png"
import useEffectExam1 from "../../assets/useEffecrtExam1.png"

const UseEffectCount = () => {
    
    const [num, setNum] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setNum((num) => num + 1)
        }, 2000)
    })
  return (
    <>
        <div className='bg-gray-900 pt-[120px] pb-[50px] md:px-0 px-5'>
            <Container>
                <div className=''> 
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
                </div>
            </Container>
        </div>
    </>

  )
}

export default UseEffectCount