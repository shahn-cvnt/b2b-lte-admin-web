import { NavLink } from "react-router-dom";

function MenuItem({ name, path, subMenu, disabled }) {
  return (
    <>
      <li className="px-6 first:pl-4 last:mr-0 last:pr-4 sm:first:pl-6 sm:last:pr-6 lg:first:pl-8 lg:last:pr-8">
        {disabled ? (
          <span className="block whitespace-nowrap py-2 text-gray-500 ">
            {name}
          </span>
        ) : (
          <NavLink
            to={path}
            className={({ isActive }) =>
              `block whitespace-nowrap py-2 ${
                isActive
                  ? "text-blue-500"
                  : "text-slate-200 hover:text-slate-600"
              }`
            }
          >
            {name}
          </NavLink>
        )}
      </li>
    </>
  );
}

export default MenuItem;
