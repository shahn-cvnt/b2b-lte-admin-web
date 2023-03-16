function Header({ children }) {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-slate-800 text-slate-200">
      <div className="-mb-px flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </header>
  );
}

// Header.Title
// Header.Menu
// Header.Profile

export default Header;
