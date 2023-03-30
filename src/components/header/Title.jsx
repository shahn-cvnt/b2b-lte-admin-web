import { NavLink } from "react-router-dom";

function Title({ title }) {
  return (
    <div className="px-5 py-4">
      <h1 className="whitespace-nowrap text-lg font-semibold text-slate-200 ">
        <NavLink to="/">{title}</NavLink>
      </h1>
    </div>
  );
}

export default Title;
