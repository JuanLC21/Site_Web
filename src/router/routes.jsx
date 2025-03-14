import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../pages/Home.jsx'
import About from '../pages/About.jsx'
import Contact from '../pages/Contact.jsx'
import Products from '../pages/Products.jsx'
import Projects from '../pages/Projects.jsx'
import NotFoundPage from '../pages/NotFoundPage.jsx'

const router = createBrowserRouter([
    { path: '/', element: <Home/> },
    { path: '/about', element: <About/> },
    { path: '/contact', element: <Contact/> },
    { path: '/products', element: <Products/> },
    { path: '/projects', element: <Projects/> },
    { path: '*', element: <NotFoundPage/> }
])

function SiteRoutes () {
    return (
        <RouterProvider router={router}></RouterProvider>
    )
}
export default SiteRoutes
