function Profile({ name, imageUrl }) {
  return (
    <div className="relative inline-flex">
      <button className="group inline-flex items-center justify-center">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 transition duration-150">
          <img
            className="rounded-full"
            src={imageUrl}
            width="28"
            height="28"
            alt="User"
          />
        </div>
        <div className="flex items-center truncate">
          <span className="ml-2 truncate text-sm font-medium group-hover:text-slate-800">
            {name}
          </span>
        </div>
      </button>
    </div>
  );
}

export default Profile;
