function HouseholdsInfo() {
  return (
    <div className="w-1/2">
      <span className="text-lg font-bold">세대 정보</span>
      <button className="btn mx-2 border bg-emerald-100">층 추가</button>
      <button className="btn mx-2 border bg-yellow-100">호 추가</button>
      <div className="flex">
        <ul className="w-1/4">
          <li>
            <button className="btn m-2 border bg-red-200">601 호</button>
            <button className="btn m-2 border bg-red-200">602 호</button>
          </li>
          <li>
            <button className="btn m-2 border bg-gray-200">501 호</button>
            <button className="btn m-2 border bg-red-200">502 호</button>
          </li>
          <li>
            <button className="btn m-2 border bg-gray-200">401 호</button>
            <button className="btn m-2 border bg-red-200">402 호</button>
          </li>
          <li>
            <button className="btn m-2 border bg-red-200">301 호</button>
            <button className="btn m-2 border bg-gray-200">302 호</button>
          </li>
          <li>
            <button className="btn m-2 border bg-red-200">201 호</button>
            <button className="btn m-2 border bg-red-200">202 호</button>
          </li>
          <li>
            <button className="btn m-2 border bg-gray-200">101 호</button>
            <button className="btn m-2 border bg-red-200">102 호</button>
          </li>
        </ul>
        <div>
          <span className="text-lg font-bold">상세 정보</span>
          <div className="border">
            <span>102 동 601호</span>
            <br />
            <span>SIP : 1212.121212.2121212</span>
          </div>
          <div className="h-full border">
            <span>세대원 목록
            <button className="btn m-2 border bg-orange-200	">
                <span>삭제</span>
              </button>
            </span>
            <br />
            <span>- 김일동</span>
            <br />
            <span>- 김이동</span>
            <br />
            <span>- 김삼동</span>
            <div>
              <button className="btn m-2 border bg-red-200">
                <span>세대 비밀번호 설정</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HouseholdsInfo;
