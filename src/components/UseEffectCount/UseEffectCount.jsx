import React, { useEffect, useState } from 'react'
import Container from '../Layout/Container'

const UseEffectCount = () => {
    
    const [num, setNum] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setNum((num) => num + 1)
        }, 2000)
    })
  return (
    <>
        <div className='bg-sky-400 pt-[150px] pb-[150px]'>
            <Container>
                <div className='flex flex-col items-center'> 
                    <h2 className='text-4xl'>useEffect Hook</h2>
                    <h3 className='text-3xl'>count</h3>
                    <h4 className='text-5xl font-extrabold'>{num}</h4>
                </div>
            </Container>
        </div>
    </>

  )
}

export default UseEffectCount