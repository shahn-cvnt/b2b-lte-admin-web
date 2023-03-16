import { NavLink } from "react-router-dom";

function SubMenu({subMenu}) {
    return (
        <div className="absolute pl-4 pt-3 flex bg-white w-full bottom-0 bg-slate-200 border-b left-0 bottom-0">
        <div className="relative">
          <div className="absolute w-full h-px" aria-hidden="true"></div>
          <ul className="relative text-sm font-medium flex flex-nowrap -mx-4 sm:-mx-6 lg:-mx-8 overflow-x-scroll no-scrollbar">
            {/*  */}
                {subMenu.map((item, index) => (
                    <NavLink
                    key={index}
                    to={item.path}
                    className={({ isActive }) =>
                      `block pb-5 ${
                        isActive ? "text-blue-500" : "text-slate-200 hover:text-slate-600"
                      } whitespace-nowrap`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
          </ul>
        </div>
    </div>
    )
}

//     <li
            //     className="last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8"
            //   >
            //     <span>{'gg'}</span>
            //   </li>

export default SubMenu