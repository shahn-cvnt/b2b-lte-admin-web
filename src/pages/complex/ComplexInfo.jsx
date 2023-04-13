import { useComplexInfo } from "../../hooks/useComplex";

function ComplexInfo() {
  const { complexInfo } = useComplexInfo();

  return (
    <main className="sidebar-expanded bg-slate-100 font-inter text-slate-600 antialiased">
      <div className="mx-auto w-full max-w-9xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Content */}
        <div className="mb-8 rounded-sm bg-white shadow-lg">
          <div className="flex flex-col md:-mr-px md:flex-row">
            {/* <SettingsSidebar /> */}
            <div className="grow">
              {/* Panel body */}
              <div className="space-y-6 p-6">
                <header className="mb-6 flex">
                  <h2 className="flex-1 text-xl font-bold leading-snug text-slate-800">
                    단지 정보
                  </h2>
                </header>
                {/* Picture */}
                {/* <section>
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
                </section> */}
                {/* Business Profile */}
                <section>
                  <h2 className="text-md mb-1 font-bold leading-snug text-slate-800">
                    단지명
                  </h2>
                  <div className="text-lg">
                    {complexInfo.name}
                  </div>
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
                  <h2 className="text-md mb-1  font-bold leading-snug text-slate-800">
                    우편번호
                  </h2>
                  <div className="text-lg">{complexInfo.postcode}</div>
                </section>
                <section>
                  <div className="mt-5 space-y-4 sm:flex sm:items-center sm:space-x-4 sm:space-y-0">
                    <div className="sm:w-1/3">
                      <h2 className="text-md mb-1  font-bold leading-snug text-slate-800">
                        주소
                      </h2>
                      <div className="text-lg">
                      {complexInfo.address1}
                      </div>
                    </div>
                    <div className="sm:w-1/3">
                      <h2 className="text-md mb-1  font-bold leading-snug text-slate-800">
                        상세 주소
                      </h2>
                      <div className="text-md">{complexInfo.address2}</div>
                    </div>
                  </div>
                </section>
                {/* Password */}
                <section>
                  <h2 className="text-md mb-1 font-bold leading-snug text-slate-800">
                    미세먼지
                  </h2>
                  <div className="text-lg">매우 좋음 (관측 지점 : 서울)</div>
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
