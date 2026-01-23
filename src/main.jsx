import './index.css'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import MainRoot from './components/MainRoot';
import Count1 from "./components/Count1/Count1"
import UseEffectCount from './components/UseEffectCount/UseEffectCount';
import Banner from './components/Banner/Banner';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainRoot,
    children: [
        { path: "/", Component: Banner},
        { path: "count", Component: Count1},
        { path: "useEffect", Component: UseEffectCount},
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
