import { NavLink } from "react-router-dom";

function Title({ title }) {
  return (
    <div>
      <div className="px-5 py-4">
        <h1 className="whitespace-nowrap text-lg font-semibold">
          <NavLink to="/">{title}</NavLink>
        </h1>
      </div>
    </div>
  );
}

export default Title;
