import { useEffect, useState } from "react";
import { useComplex } from "../../hooks/useComplex";

function ComplexInfo() {
  const { complex } = useComplex();
  const [sync, setSync] = useState(false);
  useEffect(() => {
    console.log('ComplexInfo : ' , complex);
  })

  return (
    <main className="font-inter antialiased bg-slate-100 text-slate-600 sidebar-expanded">
      <div className="mx-auto w-full max-w-9xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Page header */}
        <div className="mb-8">
          {/* Title */}
          <h1 className="text-2xl font-bold text-slate-800 md:text-3xl">
            단지 정보
          </h1>
        </div>

        {/* Content */}
        <div className="mb-8 rounded-sm bg-white shadow-lg">
          <div className="flex flex-col md:-mr-px md:flex-row">
            {/* <SettingsSidebar /> */}
            <div className="grow">
              {/* Panel body */}
              <div className="space-y-6 p-6">
                {/* <h2 className="mb-5 text-2xl font-bold text-slate-800">
                  단지 로고
                </h2> */}
                {/* Picture */}
                <section>
                  <div className="flex items-center">
                    <div className="mr-4">
                      <img
                        className="h-20 w-20 rounded-full"
                        src={""}
                        width="80"
                        height="80"
                        alt="User upload"
                      />
                    </div>
                    <button className="btn-sm bg-indigo-500 text-white hover:bg-indigo-600">
                      Change
                    </button>
                  </div>
                </section>
                {/* Business Profile */}
                <section>
                  <h2 className="mb-1 text-xl font-bold leading-snug text-slate-800">
                    단지명
                  </h2>
                  <div className="text-lg">문정 스마트빌 2차</div>
                  {/* <div className="mt-5 space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-4">
                    <div className="sm:w-1/3">
                      <label
                        className="mb-1 block text-sm font-medium"
                        htmlFor="name"
                      >
                        Business Name
                      </label>
                      <input
                        id="name"
                        className="form-input w-full"
                        type="text"
                      />
                    </div>
                    <div className="sm:w-1/3">
                      <label
                        className="mb-1 block text-sm font-medium"
                        htmlFor="business-id"
                      >
                        Business ID
                      </label>
                      <input
                        id="business-id"
                        className="form-input w-full"
                        type="text"
                      />
                    </div>
                    <div className="sm:w-1/3">
                      <label
                        className="mb-1 block text-sm font-medium"
                        htmlFor="location"
                      >
                        Location
                      </label>
                      <input
                        id="location"
                        className="form-input w-full"
                        type="text"
                      />
                    </div>
                  </div> */}
                </section>
                {/* Email */}
                <section>
                  <h2 className="mb-1 text-xl font-bold leading-snug text-slate-800">
                    주소
                  </h2>
                  <div className="text-lg">
                    서울특별시 송파구 송파대로 155 6층
                  </div>
                  {/* <div className="mt-5 flex flex-wrap">
                    <div className="mr-2">
                      <label className="sr-only" htmlFor="email">
                        Business email
                      </label>
                      <input id="email" className="form-input" type="email" />
                    </div>
                    <button className="btn border-slate-200 text-indigo-500 shadow-sm hover:border-slate-300">
                      Change
                    </button>
                  </div> */}
                </section>
                {/* Password */}
                <section>
                  <h2 className="mb-1 text-xl font-bold leading-snug text-slate-800">
                    미세먼지
                  </h2>
                  <div className="text-lg">
                    매우 좋음
                  </div>
                  {/* <div className="mt-5">
                    <button className="btn border-slate-200 text-indigo-500 shadow-sm">
                      Set New Password
                    </button>
                  </div> */}
                </section>
                {/* Smart Sync */}
                {/* <section>
                  <h2 className="mb-1 text-xl font-bold leading-snug text-slate-800">
                    Smart Sync update for Mac
                  </h2>
                  <div className="text-sm">
                    With this update, online-only files will no longer appear to
                    take up hard drive space.
                  </div>
                  <div className="mt-5 flex items-center">
                    <div className="form-switch">
                      <input
                        type="checkbox"
                        id="toggle"
                        className="sr-only"
                        checked={sync}
                        onChange={() => setSync(!sync)}
                      />
                      <label className="bg-slate-400" htmlFor="toggle">
                        <span
                          className="bg-white shadow-sm"
                          aria-hidden="true"
                        ></span>
                        <span className="sr-only">Enable smart sync</span>
                      </label>
                    </div>
                    <div className="ml-2 text-sm italic text-slate-400">
                      {sync ? "On" : "Off"}
                    </div>
                  </div>
                </section> */}
              </div>
              {/* Panel footer */}
              <footer>
                <div className="flex flex-col border-t border-slate-200 px-6 py-5">
                  <div className="flex self-end">
                    {/* <button className="btn border-slate-200 text-slate-600 hover:border-slate-300">
                      취소
                    </button> */}
                    <button className="btn ml-3 bg-indigo-500 text-white hover:bg-indigo-600">
                      정보 수정
                    </button>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ComplexInfo;
