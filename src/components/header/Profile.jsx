import Dropdown from "./DropdownProfile";
function Profile({name, image}) {
  return (
    <div>
      <button
        className="group inline-flex items-center justify-center"
        aria-haspopup="true"
      >
        <div className={`flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 transition duration-150 hover:bg-slate-200`}>
          <img src={image} />
        </div>
        <div className="flex items-center truncate">
          <span className="ml-2 truncate text-s font-medium group-hover:text-slate-400">
            {name}
          </span>          
          <svg className="ml-3 h-3 w-3 shrink-0 fill-current text-slate-400" viewBox="0 0 12 12">
            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
          </svg>
        </div>
      </button>
      <Dropdown align="right" name="관리자"></Dropdown>
    </div>
  );
}

export default Profile;
