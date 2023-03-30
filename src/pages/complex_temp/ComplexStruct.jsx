import { useState } from "react";
import ComplexStructEdit from "./ComplexStructEdit";
import HouseholdsInfo from "./HouseholdsInfo";
import GuardInfo from "./GuardInfo"

function ComplexStruct() {
  const [isEditShow, setIsEditShow] = useState(false);
  const [isHouseholdsShow, setIsHouseholdsShow] = useState(false);
  const [isGuardShow, setIsGuardShow] = useState(false);
  
  return (
    <div>
      <h3 className="h3">동 세대 정보</h3>
      <hr />
      <hr />
      <div className="flex">
      <ul className="mx-8">
        <label className="font-bold">
          동 생성하기
          <button className="btn border bg-slate-400" onClick={() => setIsEditShow(!isEditShow)}>동 추가 버튼</button>
        </label>
        <li>
            102 동 / 세대 : 20
          <button className="btn border bg-emerald-100" onClick={() => setIsHouseholdsShow(!isHouseholdsShow)}>상세</button>
        </li>
        <li>
            103 동 / 세대 : 20
          <button className="btn border bg-emerald-100" onClick={() => setIsHouseholdsShow(!isHouseholdsShow)}>상세</button>
        </li>
        <li>
            202 동 / 세대 : 20
          <button className="btn border bg-emerald-100" onClick={() => setIsHouseholdsShow(!isHouseholdsShow)}>상세</button>
        </li>
        <li>
            302 동 / 세대 : 20
          <button className="btn border bg-emerald-100" onClick={() => setIsHouseholdsShow(!isHouseholdsShow)}>상세</button>
        </li>
        <li>
            402 동 / 세대 : 20
          <button className="btn border bg-emerald-100" onClick={() => setIsHouseholdsShow(!isHouseholdsShow)}>상세</button>
        </li>
        <li>
            502 동 / 세대 : 20
          <button className="btn border bg-emerald-100" onClick={() => setIsHouseholdsShow(!isHouseholdsShow)}>상세</button>
        </li>
      </ul>
      {isEditShow && <ComplexStructEdit handleClick={() => setIsEditShow(false)} />}
      {isGuardShow && <GuardInfo />}
      {isHouseholdsShow && <HouseholdsInfo />}
      </div>
      <hr />
    </div>
  );
}

export default ComplexStruct;
