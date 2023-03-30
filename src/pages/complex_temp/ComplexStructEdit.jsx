function ComplexStructEdit({handleClick}) {
  return (
    <div>
      <span className="text-lg font-bold">동 생성하기</span>
      <form>
        <div>
          <label>동 이름</label>
          <input className="input border" />
        </div>
        <div>
          <label>메모</label>
          <input className="input border" />
        </div>
        <div>
          <label>최대층</label>
          <input className="input border" />
          <label>최대호</label>
          <input className="input border" />
        </div>
        <br />
        <div>
          <label>관할 경비실</label>
          <input className="input border" />
          <label>관할 관리실</label>
          <input className="input border" />
        </div>
        <br />
        <div>
          <label>관할 출입</label>
          <br />
          <label>공통</label>
          <input className="input border" value={"주차 차단기"} /><br/>
          <label>1호</label>
          <input
            className="input border"
            value={"공동현관 B1층 1-2 라인, 공동현관 1층 1-2 라인"}
          /><br/>
          <label>3호</label>
          <input
            className="input border"
            value={"공동현관 B1층 3-4 라인, 공동현관 1층 3-4 라인"}
          /><br/>
        </div>
        <br />
        <button className="btn border bg-slate-400" onClick={handleClick}>수정하기</button>
      </form>
      <hr />
    </div>
  );
}

export default ComplexStructEdit;
