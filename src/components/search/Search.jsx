import { useState } from "react";
import Category from "../DropdownBasic";

function Search({ options, handleClickSearch, refresh }) {
  const [selected, setSelected] = useState(0);

  const handleSelectedChange = (index) => {
    setSelected(index);
  };

  return (
    <>
      <div className="flex items-center justify-center rounded border border-slate-200 px-2 focus:border-slate-300">
        <Category
          options={options}
          selected={selected}
          handleChange={handleSelectedChange}
        />
        <div className="ml-3 flex max-w-sm border-l">
          <form
            className="flex"
            onSubmit={(e) => {
              e.preventDefault();
              handleClickSearch(e, options[selected]);
            }}
          >
            <label htmlFor="msg-search" className="sr-only">
              Search
            </label>
            <input
              id="msg-search"
              className="form-input w-full border-t-0 border-l-0 border-b-0 border-r border-l border-slate-200 py-1.5 pl-2 text-sm focus:border-slate-200"
              type="search"
              name="search"
              placeholder="Search…"
              required={1}
            />
            <button
              className="group inset-0 left-auto"
              type="submit"
              aria-label="Search"
            >
              <svg
                className="ml-3 mr-2 h-4 w-4 shrink-0 fill-current text-slate-400 group-hover:text-slate-500"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
              </svg>
            </button>
          </form>
        </div>
      </div>
      <button
        className="mx-2 my-2 flex self-end text-xs text-slate-500 hover:text-slate-800"
        onClick={() => {
          document.getElementById("msg-search").value = "";
          setSelected(0);
          refresh();
        }}
      >
        <span className="text-slate-500 hover:text-slate-800">초기화</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-rotate-clockwise ml-0.5"
          width="15"
          height="15"
          viewBox="0 0 24 20"
          strokeWidth="2"
          stroke="#64748b"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4.05 11a8 8 0 1 1 .5 4m-.5 5v-5h5" />
        </svg>
      </button>
    </>
  );
}

export default Search;
