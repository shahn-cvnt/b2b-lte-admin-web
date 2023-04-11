import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useComplexAptGroup } from "../../hooks/useComplexAptGroup";

function ComplexAptGroup() {
  const { aptGroup } = useComplexAptGroup();
  const navigate = useNavigate();
  const [sync, setSync] = useState(false);

  console.log("aptGroup : ", aptGroup);

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
                {/* Trending Categories cards */}
                <section>
                  <header className="mb-6 flex">
                    <h3 className="flex-1 text-xl font-bold leading-snug text-slate-800">
                      동 목록
                    </h3>
                    <button className="btn-sm self-end bg-indigo-500 text-white hover:bg-indigo-600">
                      동 추가
                    </button>
                  </header>
                  <div className="grid grid-cols-12 gap-6">
                    {aptGroup &&
                      aptGroup.map((e, index) => {
                        return (
                          <div className="col-span-full rounded-sm border border-slate-200 bg-white shadow-md xl:col-span-3" key={index}>
                            {/* Card content */}
                            <div className="flex h-full flex-col p-5">
                              <div className="grow">
                                <header>
                                  <h3 className="mb-1 text-lg font-semibold text-slate-800">
                                    {`${e.dong}동`}
                                  </h3>
                                </header>
                              </div>
                              {/* Card footer */}
                              <footer className="mt-2">
                                <div className="flex flex-wrap items-center justify-between">
                                  {/* Left side */}
                                  <div className="text-sm italic text-slate-500">
                                    {`${e.aptNum}세대`}
                                  </div>
                                  {/* Right side */}
                                  <a
                                    className="text-sm font-medium text-indigo-500 hover:text-indigo-600"
                                    href=""
                                    onClick={() => {
                                      console.log('complex/donginfo/'+ e.dong);
                                      navigate("/complex/donginfo", {
                                        state: {
                                          "dong": e.dong
                                        }
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
