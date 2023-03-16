import Title from "./Title";
import Menu from "./Menu";
import Profile from "./Profile"

function Header({ children }) {
  return (
    <header className="relative sticky top-0 z-30 border-b border-slate-200 bg-slate-800 text-slate-200">
      <div className="-mb-px flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </header>
  );
}

Header.Title = Title;
Header.Menu = Menu;
Header.Profile = Profile;

export default Header;
