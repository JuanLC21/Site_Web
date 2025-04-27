import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../pages/Home.jsx'
import About from '../pages/About.jsx'
import Contact from '../pages/Contact.jsx'
import Projects from '../pages/Projects.jsx'
import Products from '../pages/Products.jsx'
import Labeller from '../pages/pagesProducts/Labeller.jsx'
import Panel from '../pages/pagesProducts/Panel.jsx'
import Dosing from '../pages/pagesProducts/Dosing.jsx'
import Fermenter from '../pages/pagesProducts/Fermenter.jsx'
import NotFoundPage from '../pages/NotFoundPage.jsx'

const router = createBrowserRouter([
    { path: '/', element: <Home/> },
    { path: '/about', element: <About/> },
    { path: '/contact', element: <Contact/> },
    { path: '/projects', element: <Projects/> },
    { path: '/products', element: <Products/> },
    { path: '/products/labeller', element: <Labeller/> },
    { path: '/products/panel', element: <Panel/> },
    { path: '/products/dosing', element: <Dosing/> },
    { path: '/products/fermentation', element: <Fermenter/> },
    { path: '*', element: <NotFoundPage/> }
])

function SiteRoutes () {
    return (
        <RouterProvider router={router}></RouterProvider>
    )
}
export default SiteRoutes
