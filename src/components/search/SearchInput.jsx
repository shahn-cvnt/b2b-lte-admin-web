function SearchInput() {
  return (
    <>
      <label htmlFor="msg-search" className="sr-only">
        Search
      </label>
      <input
        id="msg-search"
        className="form-input w-full border-none py-1.5 pl-2 text-sm focus:border-slate-200"
        type="search"
        placeholder="Search…"
      />
    </>
  );
}

export default SearchInput;
