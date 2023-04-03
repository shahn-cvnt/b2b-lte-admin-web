import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ComplexAptGroup() {
  const navigate = useNavigate();
  const [sync, setSync] = useState(false);

  return (
    <main className="sidebar-expanded bg-slate-100 font-inter text-slate-600 antialiased">
      <div className="mx-auto w-full max-w-9xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Page header */}
        <div className="mb-8">
          {/* Title */}
          <h1 className="text-2xl font-bold text-slate-800 md:text-3xl">
            동/세대 관리
          </h1>
        </div>

        {/* Content */}
        <div className="mb-8 rounded-sm bg-white shadow-lg">
          <div className="flex flex-col md:-mr-px md:flex-row">
            {/* <SettingsSidebar /> */}
            <div className="grow">
              {/* Panel body */}
              <div className="p-6">
                {/* <h2 className="text-2xl text-slate-800 font-bold mb-5">Connected Apps</h2> */}

                {/* General */}
                {/* <div className="mb-6">
          <div className="mb-4 border-b border-slate-200">
            <ul className="text-sm font-medium flex flex-nowrap -mx-4 sm:-mx-6 lg:-mx-8 overflow-x-scroll no-scrollbar">
              <li className="pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
                <a className="text-indigo-500 whitespace-nowrap" href="#0">View All</a>
              </li>
              <li className="pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
                <a className="text-slate-500 hover:text-slate-600 whitespace-nowrap" href="#0">Utility</a>
              </li>
              <li className="pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
                <a className="text-slate-500 hover:text-slate-600 whitespace-nowrap" href="#0">Marketing</a>
              </li>
              <li className="pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
                <a className="text-slate-500 hover:text-slate-600 whitespace-nowrap" href="#0">Development</a>
              </li>
            </ul>
          </div>
        </div> */}

                {/* Trending Categories cards */}
                <section>
                  <header className="flex mb-6">
                      <h3 className="flex-1 text-xl font-bold leading-snug text-slate-800">
                        동 목록
                      </h3>
                      <button className="btn-sm bg-indigo-500 text-white hover:bg-indigo-600 self-end">
                        동 추가
                      </button>
                  </header>
                  <div className="grid grid-cols-12 gap-6">
                    {/* Card 1 */}
                    <div className="col-span-full rounded-sm border border-slate-200 bg-white shadow-md xl:col-span-3">
                      {/* Card content */}
                      <div className="flex h-full flex-col p-5">
                        <div className="grow">
                          <header>
                            <h3 className="mb-1 text-lg font-semibold text-slate-800">
                              101 동
                            </h3>
                          </header>
                        </div>
                        {/* Card footer */}
                        <footer className="mt-2">
                          <div className="flex flex-wrap items-center justify-between">
                            {/* Left side */}
                            <div className="text-sm italic text-slate-500">
                              41 세대
                            </div>
                            {/* Right side */}
                            <a
                              className="text-sm font-medium text-indigo-500 hover:text-indigo-600"
                              href=""
                              onClick={() => {
                                navigate('/complex/donginfo');
                              }}
                            >
                              세대 정보 -&gt;
                            </a>
                          </div>
                        </footer>
                      </div>
                    </div>
                    {/* Card 2 */}
                    <div className="col-span-full rounded-sm border border-slate-200 bg-white shadow-md xl:col-span-3">
                      {/* Card content */}
                      <div className="flex h-full flex-col p-5">
                        <div className="grow">
                          <header>
                            <h3 className="mb-1 text-lg font-semibold text-slate-800">
                              102 동
                            </h3>
                          </header>
                        </div>
                        {/* Card footer */}
                        <footer className="mt-2">
                          <div className="flex flex-wrap items-center justify-between">
                            {/* Left side */}
                            <div className="text-sm italic text-slate-500">
                              32 세대
                            </div>
                            {/* Right side */}
                            <a
                              className="text-sm font-medium text-indigo-500 hover:text-indigo-600"
                              href="#0"
                            >
                              세대 정보 -&gt;
                            </a>
                          </div>
                        </footer>
                      </div>
                    </div>
                    {/* Card 3 */}
                    <div className="col-span-full rounded-sm border border-slate-200 bg-white shadow-md xl:col-span-3">
                      {/* Card content */}
                      <div className="flex h-full flex-col p-5">
                        <div className="grow">
                          <header>
                            <h3 className="mb-1 text-lg font-semibold text-slate-800">
                              103 동
                            </h3>
                          </header>
                        </div>
                        {/* Card footer */}
                        <footer className="mt-2">
                          <div className="flex flex-wrap items-center justify-between">
                            {/* Left side */}
                            <div className="text-sm italic text-slate-500">
                              27 세대
                            </div>
                            {/* Right side */}
                            <a
                              className="text-sm font-medium text-indigo-500 hover:text-indigo-600"
                              href="#0"
                            >
                              세대 정보 -&gt;
                            </a>
                          </div>
                        </footer>
                      </div>
                    </div>
                    {/* Card 4 */}
                    <div className="col-span-full rounded-sm border border-slate-200 bg-white shadow-md xl:col-span-3">
                      {/* Card content */}
                      <div className="flex h-full flex-col p-5">
                        <div className="grow">
                          <header>
                            <h3 className="mb-1 text-lg font-semibold text-slate-800">
                              104 동
                            </h3>
                          </header>
                        </div>
                        {/* Card footer */}
                        <footer className="mt-2">
                          <div className="flex flex-wrap items-center justify-between">
                            {/* Left side */}
                            <div className="text-sm italic text-slate-500">
                              27 세대
                            </div>
                            {/* Right side */}
                            <a
                              className="text-sm font-medium text-indigo-500 hover:text-indigo-600"
                              href="#0"
                            >
                              세대 정보 -&gt;
                            </a>
                          </div>
                        </footer>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-12 gap-6">
                    {/* Card 1 */}
                    <div className="col-span-full rounded-sm border border-slate-200 bg-white shadow-md xl:col-span-3">
                      {/* Card content */}
                      <div className="flex h-full flex-col p-5">
                        <div className="grow">
                          <header>
                            <h3 className="mb-1 text-lg font-semibold text-slate-800">
                              105 동
                            </h3>
                          </header>
                        </div>
                        {/* Card footer */}
                        <footer className="mt-2">
                          <div className="flex flex-wrap items-center justify-between">
                            {/* Left side */}
                            <div className="text-sm italic text-slate-500">
                              40 세대
                            </div>
                            {/* Right side */}
                            <a
                              className="text-sm font-medium text-indigo-500 hover:text-indigo-600"
                              href="#0"
                            >
                              세대 정보 -&gt;
                            </a>
                          </div>
                        </footer>
                      </div>
                    </div>
                    {/* Card 2 */}
                    <div className="col-span-full rounded-sm border border-slate-200 bg-white shadow-md xl:col-span-3">
                      {/* Card content */}
                      <div className="flex h-full flex-col p-5">
                        <div className="grow">
                          <header>
                            <h3 className="mb-1 text-lg font-semibold text-slate-800">
                              106 동
                            </h3>
                          </header>
                        </div>
                        {/* Card footer */}
                        <footer className="mt-2">
                          <div className="flex flex-wrap items-center justify-between">
                            {/* Left side */}
                            <div className="text-sm italic text-slate-500">
                              30 세대
                            </div>
                            {/* Right side */}
                            <a
                              className="text-sm font-medium text-indigo-500 hover:text-indigo-600"
                              href="#0"
                            >
                              세대 정보 -&gt;
                            </a>
                          </div>
                        </footer>
                      </div>
                    </div>
                    {/* Card 3 */}
                    <div className="col-span-full rounded-sm border border-slate-200 bg-white shadow-md xl:col-span-3">
                      {/* Card content */}
                      <div className="flex h-full flex-col p-5">
                        <div className="grow">
                          <header>
                            <h3 className="mb-1 text-lg font-semibold text-slate-800">
                              107 동
                            </h3>
                          </header>
                        </div>
                        {/* Card footer */}
                        <footer className="mt-2">
                          <div className="flex flex-wrap items-center justify-between">
                            {/* Left side */}
                            <div className="text-sm italic text-slate-500">
                              27 세대
                            </div>
                            {/* Right side */}
                            <a
                              className="text-sm font-medium text-indigo-500 hover:text-indigo-600"
                              href="#0"
                            >
                              세대 정보 -&gt;
                            </a>
                          </div>
                        </footer>
                      </div>
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
