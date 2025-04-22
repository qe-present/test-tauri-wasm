import {createBrowserRouter,RouteObject} from 'react-router'
import About from '../views/About'
import Settings from '../views/Settings'
import Help from '../views/Help'
import MainLayout from '../layouts/MainLayout'
import TauriApp from '../views/Tauri-App.tsx'

const routes:RouteObject[] = [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <TauriApp />
            },
            {
                path: '/core',
                element: <About />
            },
            {
                path: '/settings',
                element: <Settings />
            },
            {
                path: '/help',
                element: <Help />
            }
        ]
    },

];
const router=createBrowserRouter(routes)
export default router
