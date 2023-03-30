import { useState } from "react";

function ComplexDongInfo() {
  const [sync, setSync] = useState(false);

  return (
    <main class="sidebar-expanded bg-slate-100 font-inter text-slate-600 antialiased">
      <div className="mx-auto w-full max-w-9xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Page header */}
        <div className="mb-8">
          {/* Title */}
          <h1 className="text-2xl font-bold text-slate-800 md:text-3xl">
            101 동
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
                  <header className="mb-6 flex">
                    <h3 className="flex-1 text-xl font-bold leading-snug text-slate-800">
                      101 동
                    </h3>
                    <button className="btn-sm self-end bg-indigo-500 text-white hover:bg-indigo-600">
                      동 추가
                    </button>
                  </header>
                  <div className="mb-2 grid grid-cols-12 gap-6 rounded-sm bg-slate-50 text-sm uppercase text-slate-400">
                    {/* ㅇㄴ */}
                    <div class="p-1"></div>
                    <div class="p-1">1호</div>
                    <div class="p-1">2호</div>
                    <div class="p-1">3호</div>
                    <div class="p-1">4호</div>
                  </div>
                  <div className="grid grid-cols-12 gap-6">
                    <div className="mb-2 rounded-sm bg-slate-50 text-sm uppercase text-slate-400">
                      {/* Card content */}
                      <div className="flex h-fit flex-col p-3 text-center">
                        3 층
                      </div>
                    </div>
                    {/* Card 1 */}
                    <div className="col-span-full rounded-sm border border-slate-200 bg-white shadow-md xl:col-span-1">
                      {/* Card content */}
                      <div className="flex h-fit flex-col p-3 text-center">
                        <header>
                          <h3 className="mb-1 text-lg font-semibold text-slate-800">
                            101 호
                          </h3>
                        </header>
                      </div>
                    </div>
                    {/* Card 1 */}
                    <div className="col-span-full rounded-sm border border-slate-200 bg-white shadow-md xl:col-span-1">
                      {/* Card content */}
                      <div className="flex h-fit flex-col p-3 text-center">
                        <header>
                          <h3 className="mb-1 text-lg font-semibold text-slate-800">
                            102 호
                          </h3>
                        </header>
                      </div>
                    </div>
                    {/* Card 1 */}
                    <div className="col-span-full rounded-sm border border-slate-200 bg-white shadow-md xl:col-span-1">
                      {/* Card content */}
                      <div className="flex h-fit flex-col p-3 text-center">
                        <header>
                          <h3 className="mb-1 text-lg font-semibold text-slate-800">
                            103 호
                          </h3>
                        </header>
                      </div>
                    </div>
                    {/* Card 1 */}
                    <div className="col-span-full rounded-sm border border-slate-200 bg-white shadow-md xl:col-span-1">
                      {/* Card content */}
                      <div className="flex h-fit flex-col p-3 text-center">
                        <header>
                          <h3 className="mb-1 text-lg font-semibold text-slate-800">
                            104 호
                          </h3>
                        </header>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 grid grid-cols-12 gap-6">
                    <div className="mb-2 rounded-sm bg-slate-50 text-sm uppercase text-slate-400">
                      {/* Card content */}
                      <div className="flex h-fit flex-col p-3 text-center">
                        2 층
                      </div>
                    </div>
                    {/* Card 1 */}
                    <div className="col-span-full rounded-sm border border-slate-200 bg-white shadow-md xl:col-span-1">
                      {/* Card content */}
                      <div className="flex h-fit flex-col p-3 text-center">
                        <header>
                          <h3 className="mb-1 text-lg font-semibold text-slate-800">
                            101 호
                          </h3>
                        </header>
                        <div className="text-sm">상세</div>
                      </div>
                    </div>
                    {/* Card 1 */}
                    <div className="col-span-full rounded-sm border border-slate-200 bg-white shadow-md xl:col-span-1">
                      {/* Card content */}
                      <div className="flex h-fit flex-col p-3 text-center">
                        <header>
                          <h3 className="mb-1 text-lg font-semibold text-slate-800">
                            101 호
                          </h3>
                        </header>
                        <div className="text-sm">상세</div>
                      </div>
                    </div>
                    {/* Card 1 */}
                    <div className="col-span-full rounded-sm border border-slate-200 bg-white shadow-md xl:col-span-1">
                      {/* Card content */}
                      <div className="flex h-fit flex-col p-3 text-center">
                        <header>
                          <h3 className="mb-1 text-lg font-semibold text-slate-800">
                            101 호
                          </h3>
                        </header>
                        <div className="text-sm">상세</div>
                      </div>
                    </div>
                    {/* Card 1 */}
                    <div className="col-span-full rounded-sm border border-slate-200 bg-white shadow-md xl:col-span-1">
                      {/* Card content */}
                      <div className="flex h-fit flex-col p-3 text-center">
                        <header>
                          <h3 className="mb-1 text-lg font-semibold text-slate-800">
                            101 호
                          </h3>
                        </header>
                        <div className="text-sm">상세</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 grid grid-cols-12 gap-6">
                    <div className="mb-2 rounded-sm bg-slate-50 text-sm uppercase text-slate-400">
                      {/* Card content */}
                      <div className="flex h-fit flex-col p-3 text-center">
                        1 층
                      </div>
                    </div>
                    {/* Card 1 */}
                    <div className="col-span-full rounded-sm border border-slate-200 bg-white shadow-md xl:col-span-1">
                      {/* Card content */}
                      <div className="flex h-fit flex-col p-3 text-center">
                        <header>
                          <h3 className="mb-1 text-lg font-semibold text-slate-800">
                            101 호
                          </h3>
                        </header>
                        <div className="text-sm">상세</div>
                      </div>
                    </div>
                    {/* Card 1 */}
                    <div className="col-span-full rounded-sm border border-slate-200 bg-white shadow-md xl:col-span-1">
                      {/* Card content */}
                      <div className="flex h-fit flex-col p-3 text-center">
                        <header>
                          <h3 className="mb-1 text-lg font-semibold text-slate-800">
                            101 호
                          </h3>
                        </header>
                        <div className="text-sm">상세</div>
                      </div>
                    </div>
                    {/* Card 1 */}
                    <div className="col-span-full rounded-sm border border-slate-200 bg-white shadow-md xl:col-span-1">
                      {/* Card content */}
                      <div className="flex h-fit flex-col p-3 text-center">
                        <header>
                          <h3 className="mb-1 text-lg font-semibold text-slate-800">
                            101 호
                          </h3>
                        </header>
                        <div className="text-sm">상세</div>
                      </div>
                    </div>
                    {/* Card 1 */}
                    <div className="col-span-full rounded-sm border border-slate-200 bg-white shadow-md xl:col-span-1">
                      {/* Card content */}
                      <div className="flex h-fit flex-col p-3 text-center">
                        <header>
                          <h3 className="mb-1 text-lg font-semibold text-slate-800">
                            101 호
                          </h3>
                        </header>
                        <div className="text-sm">상세</div>
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

export default ComplexDongInfo;
