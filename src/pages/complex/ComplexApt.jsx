import { useEffect, useState } from "react";
import { useComplexApt } from "../../hooks/useComplex";
import { useLocation, useNavigate } from "react-router-dom";

function ComplexApt() {
  const navigate = useNavigate()
  const { state } = useLocation();
  const { apt, house, setHouse, fetchDataHouse } = useComplexApt(state.dong);

  const update = () => {};

  useEffect(() => {}, []);

  const handleClickAddFloor = () => {
    update({
      floor: apt.maxFloor + 1,
    });
  };

  const handleClickAddLine = () => {
    update({
      ho: apt.maxLine + 1,
    });
  };

  const handleClickHouse = async (ho) => {
    fetchDataHouse(ho);
  };

  const getGridCol = () => {
    // return apt ? "grid grid-cols-" + (apt.ho + 1) + " gap-" + (apt.ho + 1) : ""
    return "grid grid-cols-7 gap-2";
  };

  return (
    <main className="sidebar-expanded bg-slate-100 font-inter text-slate-600 antialiased">
      <div className="mx-auto w-full max-w-9xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Content */}
        <div className="mb-4">
          <button
            className="btn-sm border-slate-200 bg-white px-3 text-slate-600 hover:border-slate-300"
            onClick={() => {
              navigate(-1);
            }}
          >
            <svg
              className="mr-2 fill-current text-slate-400"
              width="7"
              height="12"
              viewBox="0 0 7 12"
            >
              <path d="M5.4.6 6.8 2l-4 4 4 4-1.4 1.4L0 6z" />
            </svg>
            <span>동 목록 이동</span>
          </button>
        </div>
        <div className="mb-8 rounded-sm bg-white shadow-lg">
          <div className="flex flex-row md:-mr-px md:flex-row">
            {/* <SettingsSidebar /> */}
            <div className="grow">
              <div className="p-6">
                <section>
                  <header className="mb-6 flex">
                    <h3 className="flex-1 text-xl font-bold leading-snug text-slate-800">
                      {state.dong} 동
                    </h3>
                    <button
                      className="btn-sm self-end bg-indigo-500 text-white hover:bg-indigo-600"
                      onClick={handleClickAddFloor}
                    >
                      층 추가
                    </button>
                    <button
                      className="btn-sm ml-3 self-end bg-indigo-500 text-white hover:bg-indigo-600"
                      onClick={handleClickAddLine}
                    >
                      호 추가
                    </button>
                  </header>
                  <div
                    key={Math.random()}
                    className={`mb-2 ${getGridCol()} rounded-sm bg-slate-50 text-center text-base uppercase text-slate-400`}
                  >
                    <div className="bg-white p-1" />
                    {apt &&
                      Array.from(Array(apt.ho), (e, i) => {
                        return (
                          <div className="p-1" key={i + Math.random()}>
                            {`${i + 1}`} 호
                          </div>
                        );
                      })}
                  </div>
                  {apt &&
                    Array.from(Array(apt.floor), (e, i) => {
                      return (
                        <div
                          className={`mt-1 ${getGridCol()}`}
                          key={Math.random()}
                        >
                          <div className="mb-1 rounded-sm bg-slate-50 text-base uppercase text-slate-400">
                            <div className="h-fit flex-col text-center">
                              {`${apt.floor - i}`} 층
                            </div>
                          </div>
                          {/* 호수 버튼 */}
                          {Array.from(Array(apt.ho), (e, j) => {
                            return (
                              <button
                                className={`col-span-full rounded-sm border border-slate-200 bg-white hover:bg-indigo-100 xl:col-span-1 ${
                                  house &&
                                  house.ho ===
                                    Number(apt.floor - i) * 100 + (j + 1)
                                    ? "bg-indigo-100"
                                    : ""
                                }`}
                                key={apt.ho + j}
                                onClick={() => {
                                  let ho =
                                    Number(apt.floor - i) * 100 + (j + 1);
                                  handleClickHouse(ho);
                                }}
                              >
                                <span className="text-base text-slate-800">
                                  <span className="font-semibold">
                                    {Number(apt.floor - i) * 100 + (j + 1)}{" "}
                                  </span>
                                  {"호"}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      );
                    })}
                </section>
              </div>
            </div>

            {/* 호 상세정보 */}
            {house && (
              <div>
                <div className="no-scrollbar border-t border-slate-200 bg-slate-50 lg:sticky lg:top-16 lg:h-[calc(100vh-64px)] lg:w-[320px] lg:shrink-0 lg:overflow-y-auto lg:overflow-x-hidden lg:border-l lg:border-t-0 xl:w-[352px] 2xl:w-[calc(352px+80px)]">
                  <div className="px-4 py-8 lg:px-8 2xl:px-12">
                    <button className="float-right" onClick={() => {
                      setHouse(null);
                    }}>
                      <svg className="icon icon-tabler icon-tabler-x text-slate-800" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#6f32be" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </button>
                    <div className="mx-auto max-w-sm lg:max-w-none">
                      <h2 className="mb-6 text-2xl font-bold text-slate-800">
                        {`${house.dong}동 ${house.ho}호`}
                      </h2>
                      <div className="space-y-6">
                        {/* 사용자 */}
                        <div>
                          <div className="mb-2 font-semibold text-slate-800">
                            SIP ID
                          </div>
                          <ul className="mb-4">
                            <li className="flex w-full justify-between border-b border-slate-200 py-3 text-sm">
                              <div>{house.sipId}</div>
                              <div className="font-medium text-slate-800">
                                변경
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <div className="mb-2 font-semibold text-slate-800">
                            세대원 정보
                          </div>
                          <ul className="mb-4">
                            {house.userList &&
                              house.userList.map((e, i) => {
                                return (
                                  <li className="flex w-full justify-between border-b border-slate-200 py-3 text-sm">
                                    <div>{e.id}</div>
                                    <div className="font-medium text-slate-800">
                                      삭제
                                    </div>
                                  </li>
                                );
                              })}
                          </ul>
                        </div>
                        {false && (
                          <>
                            <div>
                              <div className="mb-4 font-semibold text-slate-800">
                                Payment Details
                              </div>
                              <div className="space-y-4">
                                <div>
                                  <label
                                    className="mb-1 block text-sm font-medium"
                                    htmlFor="card-nr"
                                  >
                                    Card Number{" "}
                                    <span className="text-rose-500">*</span>
                                  </label>
                                  <input
                                    id="card-nr"
                                    className="form-input w-full"
                                    type="text"
                                    placeholder="1234 1234 1234 1234"
                                  />
                                </div>
                                <div className="flex space-x-4">
                                  <div className="flex-1">
                                    <label
                                      className="mb-1 block text-sm font-medium"
                                      htmlFor="card-expiry"
                                    >
                                      Expiry Date{" "}
                                      <span className="text-rose-500">*</span>
                                    </label>
                                    <input
                                      id="card-expiry"
                                      className="form-input w-full"
                                      type="text"
                                      placeholder="MM/YY"
                                    />
                                  </div>
                                  <div className="flex-1">
                                    <label
                                      className="mb-1 block text-sm font-medium"
                                      htmlFor="card-cvc"
                                    >
                                      CVC{" "}
                                      <span className="text-rose-500">*</span>
                                    </label>
                                    <input
                                      id="card-cvc"
                                      className="form-input w-full"
                                      type="text"
                                      placeholder="CVC"
                                    />
                                  </div>
                                </div>
                                <div>
                                  <label
                                    className="mb-1 block text-sm font-medium"
                                    htmlFor="card-name"
                                  >
                                    Name on Card{" "}
                                    <span className="text-rose-500">*</span>
                                  </label>
                                  <input
                                    id="card-name"
                                    className="form-input w-full"
                                    type="text"
                                    placeholder="John Doe"
                                  />
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="mb-4 font-semibold text-slate-800">
                                Additional Details
                              </div>
                              <div className="space-y-4">
                                <div>
                                  <label
                                    className="mb-1 block text-sm font-medium"
                                    htmlFor="card-email"
                                  >
                                    Email{" "}
                                    <span className="text-rose-500">*</span>
                                  </label>
                                  <input
                                    id="card-email"
                                    className="form-input w-full"
                                    type="email"
                                    placeholder="john@company.com"
                                  />
                                </div>
                                <div>
                                  <label
                                    className="mb-1 block text-sm font-medium"
                                    htmlFor="card-country"
                                  >
                                    Country{" "}
                                    <span className="text-rose-500">*</span>
                                  </label>
                                  <select
                                    id="card-country"
                                    className="form-select w-full"
                                  >
                                    <option>Italy</option>
                                    <option>USA</option>
                                    <option>United Kingdom</option>
                                  </select>
                                </div>
                              </div>
                            </div>

                            <div className="mt-6">
                              <div className="mb-4">
                                <button className="btn w-full bg-indigo-500 text-white hover:bg-indigo-600">
                                  Pay $253.00
                                </button>
                              </div>
                              <div className="text-center text-xs italic text-slate-500">
                                You'll be charged $253, including $48 for VAT in
                                Italy
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default ComplexApt;
