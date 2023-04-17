import { useEffect, useState } from "react";
import { useComplexSetting } from "../../hooks/useComplexSetting";
import ComplexAdd from "./ComplexAdd";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useComplexInfo } from "../../hooks/useComplex";
function ComplexSetting({handleChangeComplex}) {
  const { user, loginByToken } = useAuthContext();
  const { complexInfo } = useComplexInfo();
  const { complexList } = useComplexSetting();
  const [isOpenAddComplex, setIsOpenAddComplex] = useState(false);
  const [selectedComplex, setSelectedComplex] = useState({
    name: complexInfo.name,
    code: complexInfo.complexId
  } || null);

  const handleClickAddComplex = (e) => {
    e.stopPropagation();
    // setIsOpenAddComplex(!isOpenAddComplex);
  };

  const handleClick = (e) => {
    const {value} = e.target;

    setSelectedComplex(JSON.parse(value));
  }

  return (
    <main className="mx-auto max-w-7xl bg-white">
      {!isOpenAddComplex ? (
        <div className="space-y-6 px-6 pb-4 pt-4">
          <section className="relative">
            <div className="max-h-2xl overflow-auto">
              <ul className="my-1">
                {complexList &&
                  complexList.map((e, i) => {
                    return (
                      <li className="flex px-2" key={i}>
                        {/* <button className="flex grow items-center border-b border-slate-100 py-2 text-sm hover:font-semibold"> */}
                          {/* <div className="m-1"> */}
                          <label className="flex grow items-center border-b border-slate-100 py-2 text-sm hover:font-semibold">
                            {/* <label className="flex items-center"> */}
                              <input
                                type="radio"
                                name="complex"
                                className="form-radio"
                                value={JSON.stringify(e)}
                                defaultChecked={selectedComplex?.name == e.name}
                                onClick={handleClick}
                              />
                              <span className={`ml-3 text-sm ${selectedComplex?.name == e.name? "font-semibold": ""}`}>
                                {e.name}
                              </span>
                            </label>
                          {/* </div> */}
                        {/* </button> */}
                      </li>
                    );
                  })}
              </ul>
              <div
                className="pointer-events-none absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-white to-transparent"
                aria-hidden="true"
              />
            </div>
          </section>
          <section>
            <div className="align-center my-1">
              <button
                className="w-full flex text-md bg-white text-slate-500 hover:border-slate-300 justify-center"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpenAddComplex(!isOpenAddComplex);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-plus"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#64748b"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
                <span className="ml-2">{"단지 추가"}</span>
              </button>
            </div>
          </section>
          <section>
            <div className="flex items-end justify-end py-3">
              <button
                className="btn-sm border-rose-400 border-slate-200 px-4 shadow-sm hover:text-blue-800"
                onClick={async () => {
                  // navigate("/", { replace: true });
                  const isSuccess = await loginByToken(user.id, user.token, selectedComplex.code);
                  if (isSuccess) {
                    handleChangeComplex();
                  } else {
                    // TODO
                  }
                }}
              >
                변경
              </button>
            </div>
          </section>
        </div>
      ) : (
        <ComplexAdd handleClickAddComplex={handleClickAddComplex} setIsOpenAddComplex={setIsOpenAddComplex}/>
      )}
    </main>
  );
}

export default ComplexSetting;
