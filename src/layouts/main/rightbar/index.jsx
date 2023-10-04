import Premium from "../../../components/premium";
import Search from "./search";

export default function RightBar() {
    return (
        <aside className="w-[350px] mr-2.5">
            <Search/>
            <Premium/>
        </aside>
    )
}