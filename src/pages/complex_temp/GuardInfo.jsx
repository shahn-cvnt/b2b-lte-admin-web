function HouseholdsInfo() {
  return (
    <div>
      <span className="text-lg font-bold">관리실/경비실 구성</span>
      <button className="btn mx-2 border bg-orange-100">관리실 추가</button>
      <button className="btn mx-2 border bg-orange-100">경비실 추가</button>
      <div className="flex">
        <ul className="w-1/4">
          <li>
            <button className="btn m-2 border border-black">관리실</button>
          </li>
          <li>
            <button className="btn m-2 border border-black">101동 경비실</button>
          </li>
          <li>
            <button className="btn m-2 border border-black">102동 경비실</button>
          </li>
        </ul>
        <div>
          <span className="text-lg font-bold">상세 정보</span>
          <div className="border">
            <span>101동 경비실</span>
            <br />
            <span>SIP : 1212.121212.2121212</span>
          </div>
          <div className="h-full border">
            <span>
              사용자 목록
              <button className="btn m-2 border bg-orange-200">
                <span>삭제</span>
              </button>
              <button className="btn m-2 border bg-orange-200">
                <span>추가</span>
              </button>
            </span>
            <br />
            <span>- 김경비</span>
            <br />
            <span>- 김경비이</span>
            <br />
            <span>- 김경비삼</span>
            <div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HouseholdsInfo;
