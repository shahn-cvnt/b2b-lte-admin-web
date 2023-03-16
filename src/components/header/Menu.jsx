import MenuItem from "./MenuItem";

function Menu({ menu }) {
  return (
    <div>
      <ul className="text-sl no-scrollbar relative -mx-4 flex flex-nowrap overflow-x-scroll font-medium sm:-mx-6 lg:-mx-8">
        {menu.map((item, index) => (
          <MenuItem name={item.name} path={item.path} subMenu={item.children} disabled={item.disabled} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default Menu;
