import {createBrowserRouter} from 'react-router-dom'
import Home from '../pages/home'
import Explore from '../pages/explore'
import Notifications from '../pages/notifications'
import NotFound from '../pages/notFound'
import MainLayout from '../layouts/main'
import Profile from '../pages/profile'
import Messages from '../pages/messages'
import Bookmarks from '../pages/bookmarks'
import Lists from '../pages/lists'

const routes = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path:'explore',
                element: <Explore />
            },
            {
                path:'notifications',
                element: <Notifications />
            },
            {
                path:':slug',
                element: <Profile />
            },
            {
                path:'*',
                element: <NotFound />
            },
            {
                path:'messages',
                element: <Messages/>
            },
            {
                path:'bookmarks',
                element: <Bookmarks/>
            },
            {
                path:'lists',
                element: <Lists/>
            }
        ]
    }
])

export default routes