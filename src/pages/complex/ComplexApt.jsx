import { useEffect, useState } from "react";
import { useComplexApt } from "../../hooks/useComplexApt";
import { useLocation } from "react-router-dom";

function ComplexApt() {
  console.log('ComplexApt');
  const location = useLocation();
  const { apt, update, getHo } = useComplexApt(location.state.dong);
  const [hoData, setHoData] = useState();

  const hadleClickAddFloor = () => {
    update({
      floor: apt.floor + 1,
    });
  };

  const hadleClickAddHo = () => {
    update({
      ho: apt.ho + 1,
    });
  };

  // 호수 선택 - TODO: api 요청 안함
  const handleClickItem = async (ho) => {
    const hoData = await getHo(ho);
    setHoData(hoData);
  };

  const getGridCol = () => {
    // return apt ? "grid grid-cols-" + (apt.ho + 1) + " gap-" + (apt.ho + 1) : ""
    return "grid grid-cols-7 gap-7";
  };

  const TableHeader = ({ col, arr }) => {
    console.log("arr : ", arr);
    return (
      <div
        key={Math.random()}
        className={`mb-2 grid rounded-sm bg-slate-50 text-center text-base uppercase text-slate-400 grid-cols-${col} gap-${col}`}
      >
        <div className="p-1" />
        {arr.map((e, i) => {
          return (
            <div className="p-1" key={i + Math.random()}>
              {`${e + 1}`} 호
            </div>
          );
        })}
      </div>
    );
  };

  useEffect(() => {
  }, []);

  return (
    <main className="sidebar-expanded bg-slate-100 font-inter text-slate-600 antialiased">
      <div className="mx-auto w-full max-w-9xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Content */}
        <div className="mb-8 rounded-sm bg-white shadow-lg">
          <div className="flex flex-row md:-mr-px md:flex-row">
            {/* <SettingsSidebar /> */}
            <div className="grow">
              <div className="p-6">
                <section>
                  <header className="mb-6 flex">
                    <h3 className="flex-1 text-xl font-bold leading-snug text-slate-800">
                      {location.state.dong} 동
                    </h3>
                    <button
                      className="btn-sm self-end bg-indigo-500 text-white hover:bg-indigo-600"
                      onClick={hadleClickAddFloor}
                    >
                      층 추가
                    </button>
                    <button
                      className="btn-sm ml-3 self-end bg-indigo-500 text-white hover:bg-indigo-600"
                      onClick={hadleClickAddHo}
                    >
                      호 추가
                    </button>
                  </header>
                  {/* TableHeader */}
                  {/* {apt && (
                    <TableHeader
                      col={apt.ho}
                      arr={Array.from(Array(apt.ho), (e, i) => {
                        return i;
                      })}
                    />
                  )} */}
                  <div
                    key={Math.random()}
                    className={`mb-2 ${getGridCol()} rounded-sm bg-slate-50 text-center text-base uppercase text-slate-400`}
                  >
                    <div className="p-1" />
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
                          className={`mt-2 ${getGridCol()}`}
                          key={Math.random()}
                        >
                          <div className="mb-2 rounded-sm bg-slate-50 text-base uppercase text-slate-400">
                            <div className="h-fit flex-col p-3 text-center">
                              {`${apt.floor - i}`} 층
                            </div>
                          </div>
                          {Array.from(Array(apt.ho), (e, j) => {
                            return (
                              <div
                                className="col-span-full rounded-sm border border-slate-200 bg-white shadow-md xl:col-span-1"
                                key={apt.ho + j}
                              >
                                <button
                                  className="flex h-fit flex-col p-3 text-center"
                                  onClick={() =>
                                    handleClickItem(
                                      apt.floor - i + "0" + (j + 1)
                                    )
                                  }
                                >
                                  <p className="text-lg font-semibold text-slate-800">
                                    {`${apt.floor - i + "0" + (j + 1)}호`}
                                  </p>
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      );
                    })}
                </section>
              </div>
            </div>

            {/* 호 상세정보 */}
            {hoData && (
              <div>
                <div className="no-scrollbar border-t border-slate-200 bg-slate-50 lg:sticky lg:top-16 lg:h-[calc(100vh-64px)] lg:w-[320px] lg:shrink-0 lg:overflow-y-auto lg:overflow-x-hidden lg:border-t-0 lg:border-l xl:w-[352px] 2xl:w-[calc(352px+80px)]">
                  <div className="py-8 px-4 lg:px-8 2xl:px-12">
                    <div className="mx-auto max-w-sm lg:max-w-none">
                      <h2 className="mb-6 text-2xl font-bold text-slate-800">
                        {`${location.state.dong}동 ${hoData.ho}호`}
                      </h2>
                      <div className="space-y-6">
                        {/* 사용자 */}
                        <div>
                          <div className="mb-2 font-semibold text-slate-800">
                            SIP ID
                          </div>
                          <ul className="mb-4">
                            <li className="flex w-full justify-between border-b border-slate-200 py-3 text-sm">
                              <div>10.10.10.10</div>
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
                            <li className="flex w-full justify-between border-b border-slate-200 py-3 text-sm">
                              <div>User1</div>
                              <div className="font-medium text-slate-800">
                                삭제
                              </div>
                            </li>
                            <li className="flex w-full justify-between border-b border-slate-200 py-3 text-sm">
                              <div>User2</div>
                              <div className="font-medium text-slate-800">
                                삭제
                              </div>
                            </li>
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
