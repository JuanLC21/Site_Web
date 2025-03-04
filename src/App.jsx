import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Products from './pages/Products.jsx'
import Projects from './pages/Projects.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import './components/Main.css'

const router = createBrowserRouter([
    { path: '/', element: <Home/> },
    { path: '/about', element: <About/> },
    { path: '/contact', element: <Contact/> },
    { path: '/products', element: <Products/> },
    { path: '/projects', element: <Projects/> },
    { path: '*', element: <NotFoundPage/> }
])

function App () {
    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}

export default App
