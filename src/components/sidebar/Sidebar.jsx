import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import SidebarLinkGroup from "./SidebarLinkGroup";
import { ReactComponent as SVGComplexNor } from "../../images/ic_complex_nor.svg";
import { ReactComponent as SVGComplexSel } from "../../images/ic_complex_sel.svg";
import { ReactComponent as SVGCommunityNor } from "../../images/ic_community_nor.svg";
import { ReactComponent as SVGCommunitySel } from "../../images/ic_community_sel.svg";
import { ReactComponent as SVGDeviceNor } from "../../images/ic_device_nor.svg";
import { ReactComponent as SVGDeviceSel } from "../../images/ic_device_sel.svg";
import { ReactComponent as SVGEntranceNor } from "../../images/ic_entrance_nor.svg";
import { ReactComponent as SVGEntranceSel } from "../../images/ic_entrance_sel.svg";
import { ReactComponent as SVGTasksNor } from "../../images/ic_tasks_nor.svg";
import { ReactComponent as SVGTasksSel } from "../../images/ic_tasks_sel.svg";

function Sidebar({ logoTitle, menu, sidebarOpen, setSidebarOpen, handleClickSetting }) {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  const SideBarGroupIcon = ({ path }) => {
    if (path.includes("/complex")) {
      return pathname.includes("/complex") ? (
        <SVGComplexSel />
      ) : (
        <SVGComplexNor />
      );
    } else if (path.includes("/community")) {
      return pathname.includes("/community") ? (
        <SVGCommunitySel />
      ) : (
        <SVGCommunityNor />
      );
    } else if (path.includes("/device")) {
      return pathname.includes("/device") ? <SVGDeviceSel /> : <SVGDeviceNor />;
    } else if (path.includes("/entrance")) {
      return pathname.includes("/entrance") ? (
        <SVGEntranceSel />
      ) : (
        <SVGEntranceNor />
      );
    } else if (path.includes("/call")) {
      return pathname.includes("/call") ? <SVGTasksSel /> : <SVGTasksNor />;
    }
  };

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector("body").classList.add("sidebar-expanded");
    } else {
      document.querySelector("body").classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <div>
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 z-40 bg-slate-900 bg-opacity-30 transition-opacity duration-200 lg:z-auto lg:hidden ${
          sidebarOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`no-scrollbar absolute left-0 top-0 z-40 flex h-screen w-64 shrink-0 flex-col overflow-y-scroll bg-slate-800 p-4 transition-all duration-200 ease-in-out lg:static lg:left-auto lg:top-auto lg:w-20 lg:translate-x-0 lg:overflow-y-auto lg:sidebar-expanded:!w-64 2xl:!w-64 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        {/* Sidebar header */}
        <div className="mb-10 flex justify-between pr-3 sm:px-2">
          {/* Close button */}
          <button
            ref={trigger}
            className="text-slate-500 hover:text-slate-400 lg:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
          <NavLink end to="/" className="flex">
            {/* <svg width="32" height="32" viewBox="0 0 32 32">
              <defs>
                <linearGradient
                  x1="28.538%"
                  y1="20.229%"
                  x2="100%"
                  y2="108.156%"
                  id="logo-a"
                >
                  <stop stopColor="#A5B4FC" stopOpacity="0" offset="0%" />
                  <stop stopColor="#A5B4FC" offset="100%" />
                </linearGradient>
                <linearGradient
                  x1="88.638%"
                  y1="29.267%"
                  x2="22.42%"
                  y2="100%"
                  id="logo-b"
                >
                  <stop stopColor="#38BDF8" stopOpacity="0" offset="0%" />
                  <stop stopColor="#38BDF8" offset="100%" />
                </linearGradient>
              </defs>
              <rect fill="#6366F1" width="32" height="32" rx="16" />
              <path
                d="M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z"
                fill="#4F46E5"
              />
              <path
                d="M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z"
                fill="url(#logo-a)"
              />
              <path
                d="M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z"
                fill="url(#logo-b)"
              />
            </svg> */}
            <span className="ml-3 whitespace-break-spaces pt-1 text-lg font-semibold text-slate-200 duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
              {logoTitle}
            </span>
          </NavLink>
          {/* Setting */}
          <button className="btn-xs ml-2 pt-1" onClick={(e) => {
            e.stopPropagation();
            handleClickSetting();
          }}>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings hover:text-slate-200" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#e2e8f0" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          </button>
        </div>

        {/* Links */}
        <div className="space-y-8">
          {/* Pages group */}
          <div>
            <h3 className="pl-3 text-xs font-semibold uppercase text-slate-500">
              <span
                className="hidden w-6 text-center lg:block lg:sidebar-expanded:hidden 2xl:hidden"
                aria-hidden="true"
              >
                •••
              </span>
              <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                Pages
              </span>
            </h3>
            <ul className="mt-3">
              {menu.map((e, index) => {
                return (
                  <SidebarLinkGroup
                    activecondition={pathname.includes(e.path)}
                    key={index}
                  >
                    {(handleClick, open) => {
                      return (
                        <>
                          {/* Group Name */}
                          <a
                            href="#0"
                            className={`block truncate text-slate-200 transition duration-150 ${
                              pathname.includes(e.path)
                                ? "hover:text-slate-200"
                                : "hover:text-white"
                            }`}
                            onClick={(e) => {
                              e.preventDefault();
                              sidebarExpanded
                                ? handleClick()
                                : setSidebarExpanded(true);
                            }}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <SideBarGroupIcon path={e.path} />
                                <span className="ml-3 text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                                  {e.name}
                                </span>
                              </div>
                              {/* Icon */}
                              <div className="ml-2 flex shrink-0">
                                <svg
                                  className={`ml-1 h-3 w-3 shrink-0 fill-current text-slate-400 ${
                                    open && "rotate-180"
                                  }`}
                                  viewBox="0 0 12 12"
                                >
                                  <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                                </svg>
                              </div>
                            </div>
                          </a>
                          {/* Child Menu */}
                          <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                            <ul className={`mt-1 pl-9 ${!open && "hidden"}`}>
                              {e.children.map((j, index) => {
                                return (
                                  <li className="mb-1 last:mb-0" key={index}>
                                    <NavLink
                                      end
                                      to={`${e.path}/${j.path}`}
                                      className={({ isActive }) =>
                                        "block truncate transition duration-150 " +
                                        (isActive
                                          ? "text-indigo-500"
                                          : "text-slate-400 hover:text-slate-200")
                                      }
                                    >
                                      <span className="text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                                        {j.name}
                                      </span>
                                    </NavLink>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </>
                      );
                    }}
                  </SidebarLinkGroup>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Expand / collapse button */}
        <div className="mt-auto hidden justify-end pt-3 lg:inline-flex 2xl:hidden">
          <div className="px-3 py-2">
            <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
              <span className="sr-only">Expand / collapse sidebar</span>
              <svg
                className="h-6 w-6 fill-current sidebar-expanded:rotate-180"
                viewBox="0 0 24 24"
              >
                <path
                  className="text-slate-400"
                  d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z"
                />
                <path className="text-slate-600" d="M3 23H1V1h2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
