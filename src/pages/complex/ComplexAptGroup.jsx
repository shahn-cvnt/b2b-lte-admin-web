import { NavLink, Link } from "react-router-dom";
import { useComplexAptGroup } from "../../hooks/useComplex";
import EditMenu from "./DropdownEditMenu";

function ComplexAptGroup() {
  const { complexAptGroup } = useComplexAptGroup();

  function ComplexAptListItemA({ dong, count }) {
    return (
      <div className="col-span-full rounded-sm border border-slate-200 bg-white shadow-lg sm:col-span-6 xl:col-span-4">
        <div className="flex h-full flex-col">
          {/* Card top */}
          <div className="grow p-5">
            <div className="flex items-start justify-between">
              {/* Image + name */}
              <header>
                <div className="mb-2 flex">
                  <div className="mt-1 pr-1">
                    <Link
                      className="inline-flex text-slate-800 hover:text-slate-900"
                      to={"props.link"}
                    >
                      <h2 className="justify-center text-xl font-semibold leading-snug">{`${dong} 동`}</h2>
                    </Link>
                    {/* <div className="flex items-center">
                      <span>{`동 메모`}</span>
                    </div> */}
                  </div>
                </div>
              </header>
              {/* Menu button */}
              <EditMenu align="right" className="relative inline-flex shrink-0">
                <li>
                  <Link
                    className="flex px-3 py-1 text-sm font-medium text-slate-600 hover:text-slate-800"
                    to="#0"
                  >
                    상세정보
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex px-3 py-1 text-sm font-medium text-slate-600 hover:text-slate-800"
                    to="#0"
                  >
                    수정하기
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex px-3 py-1 text-sm font-medium text-rose-500 hover:text-rose-600"
                    to="#0"
                  >
                    삭제하기
                  </Link>
                </li>
              </EditMenu>
            </div>
            {/* Bio */}
            <div>
              <div className="text-sm">{"41 세대 / 총 10층 / 총 2호 / 경비실 관리실 / 관할 출입"}</div>
            </div>
          </div>
          {/* Card footer */}
          <div className="border-t border-slate-200">
            <div className="divide-slate-200r flex divide-x">
              <NavLink
                className="block flex-1 px-1 py-2 text-center text-sm font-medium text-indigo-500 hover:text-indigo-600"
                to={"apt"}
                state={{
                  dong: dong,
                }}
              >
                <div className="flex items-center justify-center">
                  {/* <svg
                    className="mr-2 h-4 w-4 shrink-0 fill-current"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.6 0 0 3.1 0 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L8.9 12H8c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z" />
                  </svg> */}
                  <span>세대 관리</span>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // function ComplexAptListItemA({ dong, count }) {
  //   return (
  //     <div className="col-span-full rounded-sm border border-slate-200 bg-white shadow-lg sm:col-span-6 xl:col-span-4">
  //       <div className="flex h-full flex-col">
  //         {/* Card top */}
  //         <div className="grow p-5">
  //           <div className="flex items-start justify-between">
  //             {/* Image + name */}
  //             <header>
  //               <div className="mb-2 flex">
  //                 <div className="mt-1 pr-1">
  //                   <Link
  //                     className="inline-flex text-slate-800 hover:text-slate-900"
  //                     to={"props.link"}
  //                   >
  //                     <h2 className="justify-center text-xl font-semibold leading-snug">{`${dong} 호`}</h2>
  //                   </Link>
  //                   <div className="flex items-center">
  //                     <span>{`${count} 세대`}</span>
  //                   </div>
  //                 </div>
  //               </div>
  //             </header>
  //             {/* Menu button */}
  //             <EditMenu align="right" className="relative inline-flex shrink-0">
  //               <li>
  //                 <Link
  //                   className="flex px-3 py-1 text-sm font-medium text-slate-600 hover:text-slate-800"
  //                   to="#0"
  //                 >
  //                   Option 1
  //                 </Link>
  //               </li>
  //               <li>
  //                 <Link
  //                   className="flex px-3 py-1 text-sm font-medium text-slate-600 hover:text-slate-800"
  //                   to="#0"
  //                 >
  //                   Option 2
  //                 </Link>
  //               </li>
  //               <li>
  //                 <Link
  //                   className="flex px-3 py-1 text-sm font-medium text-rose-500 hover:text-rose-600"
  //                   to="#0"
  //                 >
  //                   Remove
  //                 </Link>
  //               </li>
  //             </EditMenu>
  //           </div>
  //           {/* Bio */}
  //           <div className="mt-2">
  //             <div className="text-sm">{"props.content"}</div>
  //           </div>
  //         </div>
  //         {/* Card footer */}
  //         <div className="border-t border-slate-200">
  //           <div className="divide-slate-200r flex divide-x">
  //             <Link
  //               className="group block flex-1 px-3 py-4 text-center text-sm font-medium text-slate-600 hover:text-slate-800"
  //               to="/settings"
  //             >
  //               <div className="flex items-center justify-center">
  //                 <svg
  //                   className="mr-2 h-4 w-4 shrink-0 fill-current text-slate-400 group-hover:text-slate-500"
  //                   viewBox="0 0 16 16"
  //                 >
  //                   <path d="M11.7.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM4.6 14H2v-2.6l6-6L10.6 8l-6 6zM12 6.6L9.4 4 11 2.4 13.6 5 12 6.6z" />
  //                 </svg>
  //                 <span>수정 하기 </span>
  //               </div>
  //             </Link>
  //             <Link
  //               className="block flex-1 px-3 py-4 text-center text-sm font-medium text-indigo-500 hover:text-indigo-600"
  //               to="/messages"
  //             >
  //               <div className="flex items-center justify-center">
  //                 <svg
  //                   className="mr-2 h-4 w-4 shrink-0 fill-current"
  //                   viewBox="0 0 16 16"
  //                 >
  //                   <path d="M8 0C3.6 0 0 3.1 0 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L8.9 12H8c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z" />
  //                 </svg>
  //                 <span>세대 정보</span>
  //               </div>
  //             </Link>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  const ComplexAptListItem = ({ dong, count, props }) => {
    return (
      <div
        className={`xrounded-sm border border-slate-200 bg-white px-5 py-4 shadow-lg hover:border-amber-300 hover:bg-amber-50`}
      >
        <NavLink
          to={"apt"}
          state={{
            dong: dong,
          }}
          className="flex items-center justify-between space-x-2 space-y-4 md:flex md:space-y-0"
        >
          {/* Left side */}
          <div className="flex items-start space-x-3 md:space-x-4">
            <div>
              <div className="inline-flex font-semibold text-slate-800">
                {`${dong} 동`}
              </div>
              <div className="text-sm">{count} 세대</div>
            </div>
          </div>
          {/* Right side */}
          <div className="flex items-center space-x-4 pl-10 md:pl-0">
            <div className="whitespace-nowrap text-sm italic text-slate-500">
              <button
                className="btn-sm border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <svg
                  className="h-4 w-4 shrink-0 fill-current text-slate-500"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.7.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM4.6 14H2v-2.6l6-6L10.6 8l-6 6zM12 6.6L9.4 4 11 2.4 13.6 5 12 6.6z" />
                </svg>
                <span className="ml-2">수정</span>
              </button>
            </div>
            {/* <div
                className={`inline-flex rounded-full px-2.5 py-1 text-center text-xs font-medium ${
                  props === "Featured"
                    ? "bg-amber-100 text-amber-600"
                    : "bg-emerald-100 text-emerald-600"
                }`}
              >
                {props}
              </div> */}
          </div>
        </NavLink>
      </div>
    );
  };

  return (
    <main className="sidebar-expanded bg-slate-100 font-inter text-slate-600 antialiased">
      <div className="mx-auto w-full max-w-9xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 rounded-sm bg-white shadow-lg">
          <div className="flex flex-col md:-mr-px md:flex-row">
            <div className="grow">
              <div className="p-6">
                <section>
                  <header className="mb-6 flex">
                    <h3 className="flex-1 text-xl font-bold leading-snug text-slate-800">
                      동 세대 관리
                    </h3>
                    <button className="btn-sm self-end bg-indigo-500 text-white hover:bg-indigo-600">
                      동 추가
                    </button>
                  </header>
                  <div className="grid grid-cols-8 gap-6">
                    {/* <div className="mt-6 space-y-2"> */}
                    {complexAptGroup &&
                      complexAptGroup.map((e) => {
                        return (
                          <ComplexAptListItemA
                            dong={e.dong}
                            count={e.cntTotalUnit}
                            key={e.dong}
                          />
                        );
                      })}
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
