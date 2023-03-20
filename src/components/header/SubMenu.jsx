import { NavLink } from "react-router-dom";

function SubMenu({ subMenu }) {
  return (
    <div className="absolute bottom-0 bottom-0 left-0 flex w-full border-b bg-white bg-slate-200 pl-4 pt-3">
      <div className="relative">
        <div className="absolute h-px w-full" aria-hidden="true"></div>
        <ul className="no-scrollbar relative -mx-4 flex flex-nowrap overflow-x-scroll text-sm font-medium sm:-mx-6 lg:-mx-8">
          {subMenu.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `block pb-5 ${
                  isActive
                    ? "text-blue-500"
                    : "text-slate-200 hover:text-slate-600"
                } whitespace-nowrap`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SubMenu;
