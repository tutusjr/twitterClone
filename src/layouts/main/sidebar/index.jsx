import Account from "./account";
import Logo from "./logo";
import Menu from "./menu";

export default function Sidebar(){
    return (
        <aside className="w-[275px] max-h-screen px-2 min-h-screen flex flex-col">
            <Logo/>
            <Menu/>
            <Account />
        </aside>
    )
}