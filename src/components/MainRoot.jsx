import { Outlet } from 'react-router'
import Navbar from './Navbar/Navbar'

const MainRoot = () => {
  return (
    <div>
        <Navbar></Navbar>
       <Outlet></Outlet>
    </div>
  )
}

export default MainRoot