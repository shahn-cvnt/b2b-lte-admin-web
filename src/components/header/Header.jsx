import Title from "./Title";
import Menu from "./Menu";
import Profile from "./Profile";
import SettingButton from "./SettingButton";
import LogoutButton from "./LogoutButton";

function Header({ children }) {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="-mb-px flex h-16 items-center justify-between">
          {/* Header: Left side */}
          <div className="flex">{/* TODO: Hamburger button */}</div>
          {/* Header: Right side */}
          <div className="flex items-center space-x-3">
            {children}
          </div>
        </div>
      </div>
    </header>
  );
}

Header.Title = Title;
Header.Menu = Menu;
Header.Profile = Profile;
Header.SettingButton = SettingButton;
Header.LogoutButton = LogoutButton;

export default Header;
