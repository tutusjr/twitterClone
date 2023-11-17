import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { mainManu } from "../../../../utils/consts";
import More from "./more";
import NewTweet from "./new/index"
import { useAccount } from "../../../../store/auth/hooks";

export default function Menu() {

  const account = useAccount()
  
  return (
    <nav className="mt-0.5 mb-1" key={account}>
      {mainManu.map((menu, index) => (
        <NavLink to={typeof menu.path == 'function' ? menu.path() : menu.path } key={index} className="block group">
        {({ isActive }) => (
          <div
            className={classNames(
              "p-3 inline-flex transition-colors rounded-full items-center gap-5 group-hover:bg-[color:var(--background-third)]",
              {"font-bold": isActive})}>
            
            <div className= "w-[26.25] h-[26.25] relative">
              {menu?.notification && (
                <span className="absolute -top-1.5 -right-1 text-[11px] h-[18px] w-[18px] rounded-full bg-[color:var(--color-primary)] text-[color:var(--background-primary)] border border-[color:var(--background-primary)] flex items-center justify-center">{menu.notification}</span>
              )}
              {!isActive && menu.icon.passive}
              {isActive && menu.icon.active}
            </div>
            <div className= " pr-3.5 text-xl">{menu.title}</div>
          </div>
        )}
      </NavLink>
      ))}

      <More />
      <NewTweet />
    </nav>
  );
}
