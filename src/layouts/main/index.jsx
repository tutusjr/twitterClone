// eslint-disable-next-line react/prop-types
import {Outlet} from 'react-router-dom'
import Sidebar from './sidebar'
import RightBar from './rightbar'
export default function MainLayout() {
    return (
        <div className="w-[1265px] mx-auto flex">
            <Sidebar />
            <div className="flex-1 flex gap-[30px]">
                <main className="flex-1 max-w-[600px] border-x border-[#2f3336] transition-colors">
                    <Outlet />
                </main>
                    <RightBar/>
            </div>
        </div>
    )
}
