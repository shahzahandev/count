import Container from '../Layout/Container'
import { NavLink } from 'react-router-dom'

const Banner = () => {
    return (
        <div className=' bg-gray-900 md:pt-[120px] pt-[100px] md:pb-[50px] pb-[50px] px-3 md:px-0 relative'>
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
                    <h1 className='text-white font-bold md:text-5xl text-3xl'>Built-in React <i className='text-secondary'>Hooks</i></h1>
                    <p className='text-white font-semibold md:text-[18px] mt-5 md:leading-9 leading-7'><i className='text-secondary font-bold tracking-[1px] md:text-[24px] text-[20px]'>Hooks </i> let you use different React features from your components.</p>
                    <p className='text-white font-semibold md:text-[18px] md:leading-9 leading-7'>You can either use the built-in Hooks or combine them to build your own. This page lists all built-in Hooks in React.</p>
                    <p className='text-white font-semibold md:text-[18px] mt-5 md:leading-9 leading-7'>React Hook হলো এমন একটি বিশেষ Function,  যা দিয়ে Function Components এর ভিতর State,  Lifecycle ও অন্যান্য React feature ব্যবহার করা যায়, Class Component ছাড়ায়।</p>
                    <h3 className='text-white font-semibold md:text-[24px] text-[18px] mt-5 leading-9'>সহজভাবে বললে 👇</h3>
                    <p className='text-white font-semibold md:text-[18px] md:mt-2 md:leading-9 leading-7'>
                        আগে React-এ state বা lifecycle ব্যবহার করতে class component লাগত।
                        Hook আসার পর functional component দিয়েই সব করা যায়।</p>
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
    )
}

export default Banner
