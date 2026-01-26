import './index.css'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import MainRoot from './components/MainRoot';
import Count1 from "./components/Count1/Count1"
import UseEffectCount from './components/UseEffectCount/UseEffectCount';
import Banner from './components/Banner/Banner';
import Home from './components/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainRoot,
    children: [
        { path: "/", Component: Home},
        { path: "/hooks", Component: Banner},
        { path: "/useState", Component: Count1},
        { path: "/useEffect", Component: UseEffectCount},
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
