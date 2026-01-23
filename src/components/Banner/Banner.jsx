import React from 'react'
import Container from '../Layout/Container'

const Banner = () => {
    return (
        <div className='bg-gray-800 pt-[150px] pb-[120px]'>
            <Container>
                <div>
                    <h1 className='text-white font-bold text-5xl'>Built-in React Hooks</h1>
                    <p className='text-white font-semibold text-[18px] mt-5'><i>Hooks</i> let you use different React features from your components. You can either use the built-in Hooks or combine them to build your own. This page lists all built-in Hooks in React.</p>
                    <div className='flex justify-center items-center flex-col mt-10'>
                        <h2  className='text-white font-bold text-3xl'>Hooks</h2>
                        <div className='flex flex-col gap-y-10 gap-x-15 mt-5'>
                            <div>
                                <ul className='flex text-white font-medium gap-5'>
                                    <li>useStae Hook</li>
                                    <li>useEffect Hooks</li>
                                    <li>useCallback</li>
                                    <li>useMemo</li>
                                    <li>useRef</li>
                                </ul>
                            </div>
                            <div>
                                <ul className='flex text-white font-medium gap-5'>
                                    <li>useStae Hook</li>
                                    <li>useEffect Hooks</li>
                                    <li>useCallback</li>
                                    <li>useMemo</li>
                                    <li>useRef</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Banner