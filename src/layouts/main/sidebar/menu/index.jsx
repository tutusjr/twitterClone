import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { mainManu } from "../../../../utils/consts";
import Button from "../../../../components/button";

export default function Menu() {

  
  return (
    <nav className="mt-0.5 mb-1">
      {mainManu.map((menu, index) => (
        <NavLink to={menu.path} key={index} className="py-1 block group">
        {({ isActive }) => (
          <div
            className={classNames(
              "p-3 inline-flex transition-colors rounded-full items-center gap-5 group-hover:bg-[#eff3f41a]",
              {"font-bold": isActive})}>
            
            <div className= "w-[26.25] h-[26.25] relative">
              {menu?.notification && (
                <span className="absolute -top-1.5 -right-1 text-[11px] h-[18px] w-[18px] rounded-full bg-[#1d9bf0] flex items-center justify-center">{menu.notification}</span>
              )}
              {!isActive && menu.icon.passive}
              {isActive && menu.icon.active}
            </div>
            <div className= " pr-3.5 text-xl">{menu.title}</div>
          </div>
        )}
      </NavLink>
      ))}
      <button className="py-[3px] block group">
          <div className="p-3 inline-flex transition-colors rounded-full items-center gap-5 group-hover:bg-[#eff3f41a]">
            <div className= "w-[26.25] h-[26.25] relative">
            <svg viewBox="0 0 24 24" width={26.25} height={26.25} fill="#fff"><path d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"/></svg>
            </div>
            <div className= " pr-3.5 text-xl">Daha fazla</div>
          </div>
      </button>
      <div className="py-4 w-[90%]">
      <Button size="large">
        Gönder
      </Button>
      </div>
    </nav>
  );
}
