import { NavLink } from "react-router-dom";

function MenuItem({ name, path, subMenu, disabled }) {
  return (
    <li className="px-6 text-base first:pl-4 last:mr-0 last:pr-4 sm:first:pl-6 sm:last:pr-6 lg:first:pl-8 lg:last:pr-8">
      {false ? (
        <div className="text-gray-500 ">{name}</div>
      ) : (
        <>
          <NavLink
            to={path}
            className={({ isActive }) =>
              `block whitespace-nowrap ${
                isActive
                  ? "text-blue-500"
                  : "text-slate-200 hover:text-slate-100"
              } text-slate-200 hover:text-slate-100`
            }
          >
            <div className="flex items-center justify-between">
              <span className="font-normal">{name}</span>
              <svg
                className="ml-2 ml-4 h-3 w-3 shrink-0 fill-current"
                viewBox="0 0 12 12"
              >
                <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
              </svg>
            </div>
          </NavLink>
          {subMenu &&
            subMenu.map((sub) => 
              (<NavLink
                to={path + "/" +sub.path}
                className={({ isActive }) =>
                  `block whitespace-nowrap ${
                    isActive
                      ? "text-blue-500"
                      : "text-slate-200 hover:text-slate-100"
                  } text-slate-200 hover:text-slate-100 text-sm`
                }
              >
                <span className="font-normal">{sub.name}</span>
              </NavLink>)
            )}
        </>
      )}
    </li>
  );
}

export default MenuItem;
