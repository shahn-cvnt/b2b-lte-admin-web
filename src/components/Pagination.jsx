import { useEffect, useState } from "react";

const getCurrentPages = (totalPage, currentPage, visibleCount) => {
  let arr = [];
  let startPage = visibleCount * Math.floor(currentPage / visibleCount);

  for (let i = 0; i < visibleCount; i++) {
    let page = startPage + i;
    if (page < totalPage) {
      arr.push(page);
    }
  }
  // setCurrentPages(arr)
  return arr;
}

function Pagination({ totalPage, currentPage, handleClickPage }) {
  const visibleCount = 20;
  const [currentPages, setCurrentPages] = useState([]);


  const handleClickPrev = () => {
    handleClickPage(Math.max(0,(currentPages[0] - 1)));
  };

  const handleClickNext = () => {
      handleClickPage(Math.min((totalPage - 1), (currentPages[0] + visibleCount)));
  };

  // 매뉴얼 로컬 백업

  useEffect(() => {
    let arr = [];
    let startPage = visibleCount * Math.floor(currentPage / visibleCount);
  
    for (let i = 0; i < visibleCount; i++) {
      let page = startPage + i;
      if (page < totalPage) {
        arr.push(page);
      }
    }
    setCurrentPages(arr);

  }, [totalPage, currentPage]);

  return (
    <div className="flex justify-center">
      <nav className="flex" role="navigation" aria-label="Navigation">
        <div className="mr-2">
          <a
            href="#"
            className={`inline-flex items-center justify-center rounded border border-slate-200 bg-white px-2 py-1.5 leading-5
            ${
              currentPage <= 0
                ? "text-slate-300"
                : "text-slate-600 hover:text-slate-400"
            }`}
            onClick={handleClickPrev}
          >
            <span className="sr-only">Previous</span>
            <wbr />
            <svg className="h-4 w-4 fill-current" viewBox="0 0 16 16">
              <path d="M9.4 13.4l1.4-1.4-4-4 4-4-1.4-1.4L4 8z" />
            </svg>
          </a>
        </div>
        <ul className="inline-flex -space-x-px text-xs font-medium shadow-sm">
          {currentPages.map((e, index) => {
            return (
              <li key={index}>
                <a
                  className={`inline-flex items-center justify-center border border-slate-200 bg-white px-2.5 py-1.5 leading-5 hover:bg-indigo-500 hover:text-white
                          ${
                            currentPage === e
                              ? "font-bold text-indigo-700"
                              : "text-slate-600"
                          }`}
                  href="#"
                  onClick={() => {
                    handleClickPage(e);
                    // setCurrentPage(e);
                  }}
                >
                  {e + 1}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="ml-2">
          <a
            href="#"
            className={`inline-flex items-center justify-center rounded border border-slate-200 bg-white px-2 py-1.5 leading-5
            ${
              currentPage >= totalPage - 1
                ? "text-slate-300"
                : "text-slate-600 hover:text-slate-400"
            }`}
            onClick={handleClickNext}
          >
            <span className="sr-only">Next</span>
            <wbr />
            <svg className="h-4 w-4 fill-current" viewBox="0 0 16 16">
              <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
            </svg>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Pagination;
