import Title from "./Title";
import Menu from "./Menu";
import Profile from "./Profile";
import SettingButton from "./SettingButton";

function Header({ children }) {
  return (
    // <header className="relative sticky top-0 z-30 border-b border-slate-200 bg-slate-800 text-slate-200">
    <div className="border-b border-slate-200 bg-slate-800">
    <header className="px-4 sm:px-6 lg:px-8 py-2 w-full max-w-9xl mx-auto ">
      <div className="-mb-px flex items-center px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </header>
    </div>
  );
}

Header.Title = Title;
Header.Menu = Menu;
Header.Profile = Profile;
Header.SettingButton = SettingButton;

export default Header;

