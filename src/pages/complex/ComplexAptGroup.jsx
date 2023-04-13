import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useComplexAptGroup } from "../../hooks/useComplexAptGroup";

function ComplexAptGroup() {
  const navigate = useNavigate();
  const { aptGroup } = useComplexAptGroup();

  const ComplexAptListItemA = ({ dong, count, props }) => {
    return (
      <div
        // className={`shadow-lg rounded-sm border px-5 py-4 ${props.type === 'Featured' ? 'bg-amber-50 border-amber-300' : 'bg-white border-slate-200'}`}
        className={`xrounded-sm border border-slate-200 bg-white px-5 py-4 shadow-lg hover:bg-amber-50 hover:border-amber-300`}
      >
        <NavLink
        to={`/complex/donginfo`}
        state={{
          "dong": dong
        }}
        className="flex items-center justify-between space-x-2 space-y-4 md:flex md:space-y-0">
          {/* Left side */}
          <div className="flex items-start space-x-3 md:space-x-4">
            <div>
              <div className="inline-flex font-semibold text-slate-800">
                {`${dong} 동`}
              </div>

              <div className="text-sm">
              전체 <span className="font-medium text-slate-600">41 </span> 세대 중 <span className="font-medium text-slate-600">21</span> 세대 사용 중
                </div>
            </div>
          </div>
          {/* Right side */}
          <div className="flex items-center space-x-4 pl-10 md:pl-0">
            <div className="whitespace-nowrap text-sm italic text-slate-500">
            {`전체 ${count} 세대`}
            </div>
            {props && (
              <div
                className={`inline-flex rounded-full px-2.5 py-1 text-center text-xs font-medium ${
                  props.type === "Featured"
                    ? "bg-amber-100 text-amber-600"
                    : "bg-emerald-100 text-emerald-600"
                }`}
              >
                {props.type}
              </div>
            )}
            {/* <button
              className={`${
                props.fav
                  ? "text-amber-500"
                  : "text-slate-300 hover:text-slate-400"
              }`}
            >
              <span className="sr-only">Bookmark</span>
              <svg
                className="h-4 w-3 fill-current"
                width="12"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 0C.9 0 0 .9 0 2v14l6-3 6 3V2c0-1.1-.9-2-2-2H2Z" />
              </svg>
            </button> */}
          </div>
        </NavLink>
      </div>
    );
  };

  const ComplexAptListItem = ({ dong, count }) => {
    return (
      <div className="col-span-full rounded-sm border border-slate-200 bg-white shadow-md xl:col-span-3">
        {/* Card content */}
        <div className="flex h-full flex-col p-5">
          <div className="grow">
            <header>
              <h3 className="mb-1 text-lg font-semibold text-slate-800">
                {/* {`${e.dong}동`} */}
                {`${dong}동`}
              </h3>
            </header>
          </div>
          {/* Card footer */}
          <footer className="mt-2">
            <div className="flex flex-wrap items-center justify-between">
              {/* Left side */}
              <div className="text-sm italic text-slate-500">
                {/* {`${e.aptNum}세대`} */}
                {`${count}세대`}
              </div>
              {/* Right side */}
              <a
                className="text-sm font-medium text-indigo-500 hover:text-indigo-600"
                href=""
                onClick={() => {
                  navigate("/complex/donginfo", {
                    state: {
                      dong: dong,
                    },
                  });
                }}
              >
                세대 정보 -&gt;
              </a>
            </div>
          </footer>
        </div>
      </div>
    );
  };
  return (
    <main className="sidebar-expanded bg-slate-100 font-inter text-slate-600 antialiased">
      <div className="mx-auto w-full max-w-9xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Content */}
        <div className="mb-8 rounded-sm bg-white shadow-lg">
          <div className="flex flex-col md:-mr-px md:flex-row">
            {/* <SettingsSidebar /> */}
            <div className="grow">
              {/* Panel body */}
              <div className="p-6">
                {/* Trending Categories cards */}
                <section>
                  <header className="mb-6 flex">
                    <h3 className="flex-1 text-xl font-bold leading-snug text-slate-800">
                      동/세대 관리
                    </h3>
                    <button className="btn-sm self-end bg-indigo-500 text-white hover:bg-indigo-600">
                      동 추가
                    </button>
                  </header>
                  {/* <div className="grid grid-cols-12 gap-6"> */}
                  <div>
                    <div className="mt-6 space-y-2">
                      {aptGroup &&
                        aptGroup.map((e) => {
                          return (
                            <ComplexAptListItemA
                              dong={e.dong}
                              count={e.aptNum}
                              key={e.dong}
                            />
                          );
                        })}
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ComplexAptGroup;
