import { useState } from "react";
import { useComplexSetting } from "../../hooks/useComplexSetting";

function ComplexSetting() {
  const { complexList } = useComplexSetting();
  const [isOpenAddComplex, setIsOpenAddComplex] = useState(false);

  const handleClickAddComplex = () => {
    setIsOpenAddComplex(!isOpenAddComplex);
  };

  return (
    <main>
      {!isOpenAddComplex ? <div className="mx-auto max-w-7xl bg-white">
        <div className="space-y-6 px-6 pb-8 pt-1">
          <section>
            <div className="align-center my-1 flex">
              <h3 className="flex-1 text-lg font-bold leading-snug text-slate-800 ">
                단지 목록
              </h3>
              <div>
                <span className="mr-2 text-sm text-slate-500"></span>
              </div>
              <button
                type="submit"
                className="btn-sm self-end border-slate-200 bg-white text-sm text-indigo-500 hover:border-slate-300"
                onClick={handleClickAddComplex}
              >
                단지 추가
              </button>
            </div>
          </section>
          <section>
            <div>
              <ul className="my-1">
                {complexList &&
                  complexList.map((e) => {
                    return (
                      <li className="flex px-2">
                        {/* <div className="my-2 mr-3 h-9 w-9 shrink-0 rounded-full bg-indigo-500">
                    <svg
                      className="h-9 w-9 fill-current text-indigo-50"
                      viewBox="0 0 36 36"
                    >
                      <path d="M18 10c-4.4 0-8 3.1-8 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L18.9 22H18c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z" />
                    </svg>
                  </div> */}
                        <div className="flex grow items-center border-b border-slate-100 py-2 text-sm">
                          <div className="flex grow justify-between">
                            <div className="self-center">{e.name}</div>
                          </div>
                        </div>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </section>

          <section>
            <div className="flex items-end justify-end py-3">
              <button
                className="btn-sm border-rose-400 border-slate-200 px-4 shadow-sm hover:text-rose-800"
                onClick={() => {}}
              >
                변경
              </button>
            </div>
          </section>
        </div>
      </div>:(
        <div className="mx-auto max-w-7xl bg-white">
          <div>
            <div className="mb-4 font-semibold text-slate-800">
              단지 추가
            </div>
            <div className="space-y-4">
              <div>
                <label
                  className="mb-1 block text-sm font-medium"
                  htmlFor="card-nr"
                >
                  단지 명 <span className="text-rose-500">*</span>
                </label>
                <input
                  id="card-nr"
                  className="form-input w-full"
                  type="text"
                  placeholder="단지명"
                />
              </div>
              <div className="flex space-x-4">
                <div className="flex-1">
                  <label
                    className="mb-1 block text-sm font-medium"
                    htmlFor="card-expiry"
                  >
                    단지 주소 <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="card-expiry"
                    className="form-input w-full"
                    type="text"
                    placeholder="단지 주소"
                  />
                </div>
                <div className="flex-1">
                  <label
                    className="mb-1 block text-sm font-medium"
                    htmlFor="card-cvc"
                  >
                    미세먼지 지역 <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="card-cvc"
                    className="form-input w-full"
                    type="text"
                    placeholder="미세먼지 지역"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="space-y-4">
              <div>
                <label
                  className="mb-1 block text-sm font-medium"
                  htmlFor="card-email"
                >
                  단지 주소 <span className="text-rose-500">*</span>
                </label>
                <input
                  id="card-email"
                  className="form-input w-full"
                  type="email"
                  placeholder="단지 주소"
                />
              </div>
              <div>
                <label
                  className="mb-1 block text-sm font-medium"
                  htmlFor="card-country"
                >
                  미세먼지 설정지역 <span className="text-rose-500">*</span>
                </label>
                <select id="card-country" className="form-select w-full">
                  <option>서울</option>
                  <option>경기</option>
                  <option>부산</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="mb-4">
              <button className="btn w-full bg-indigo-500 text-white hover:bg-indigo-600"
              onClick={handleClickAddComplex}>
                단지 추가
              </button>
            </div>
            <div className="text-center text-xs italic text-slate-500">
              You'll be charged $253, including $48 for VAT in Italy
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default ComplexSetting;
