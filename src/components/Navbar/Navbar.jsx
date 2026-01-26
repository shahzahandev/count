import { NavLink } from "react-router"
import Container from '../Layout/Container'
import Logo from "../../assets/react.svg"
import { useState } from "react"
import { FaBarsStaggered } from "react-icons/fa6";
import { TbArrowsCross } from "react-icons/tb";


const Navbar = () => {
    const [show, setShow] = useState(false)

    return (
        <div className='font-main bg-gray-900 fixed w-full px-3 md:px-0 z-[9999]'>
            <Container>
                <div className='flex justify-between py-5'>
                    <NavLink to="/">
                        <div className="flex gap-x-3">
                            <img src={Logo} alt="" className="logo" />
                            <h2 className='font-bold md:text-3xl text-2xl text-white'>React</h2>
                        </div>
                    </NavLink>
                    <ul className='md:flex hidden items-center gap-5 text-[18px] font-medium text-white cursor-pointer'>
                        <NavLink to="/hooks">
                            <li className="bg-transparent py-1 px-4 rounded-[25px] hover:bg-gray-800">Hooks</li>
                        </NavLink>
                        <li className="bg-transparent py-1 px-4 rounded-[25px] hover:bg-gray-800">Redux</li>
                        <li className="bg-transparent py-1 px-4 rounded-[25px] hover:bg-gray-800">Props</li>
                        <li className="bg-transparent py-1 px-4 rounded-[25px] hover:bg-gray-800">Components</li>
                    </ul>
                    <div className="block md:hidden">
                        {
                            show ?
                                <ul className='absolute w-full bg-gray-900 top-[70px] transition-all duration-200 ease-in py-10 left-0 flex flex-col items-center gap-10 text-[20px] font-medium text-white cursor-pointer'>
                                    <NavLink to="hooks">
                                        <li className="bg-transparent py-1 px-4 rounded-[25px] hover:bg-gray-800">Hooks</li>
                                    </NavLink>
                                    <li className="bg-transparent py-1 px-4 rounded-[25px] hover:bg-gray-700">Redux</li>
                                    <li className="bg-transparent py-1 px-4 rounded-[25px] hover:bg-gray-700">Props</li>
                                    <li className="bg-transparent py-1 px-4 rounded-[25px] hover:bg-gray-700">Components</li>
                                </ul> : ""
                        }

                        {
                            show ? <TbArrowsCross onClick={() => setShow(!show)} className="text-3xl text-white" /> : <FaBarsStaggered onClick={() => setShow(!show)} className="text-3xl text-white" />

                        }
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Navbar