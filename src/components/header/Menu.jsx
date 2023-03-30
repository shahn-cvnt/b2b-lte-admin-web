import MenuItem from "./MenuItem";

function Menu({ menu }) {
  return (
    <ul className="text-sl no-scrollbar relative ml-20 flex flex-1 flex-nowrap overflow-x-scroll font-medium sm:ml-20 lg:ml-20">
      {menu.map((item, index) => (
        <MenuItem
          name={item.name}
          path={item.path}
          subMenu={item.children}
          disabled={item.disabled}
          key={index}
        />
      ))}
    </ul>
  );
}

export default Menu;
