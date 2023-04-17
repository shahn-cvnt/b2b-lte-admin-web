import { useNavigate } from "react-router-dom";

function ComplexAdd({setIsOpenAddComplex, handleClickAddComplex}) {
  return (
    <div className="space-y-6 px-6 pb-4 pt-4">
      <div>
        <button className="text-sm font-medium text-indigo-500 hover:text-indigo-600" onClick={(e) => {
          e.stopPropagation();
          setIsOpenAddComplex(false);
        }}>
          <div className="inline-block">&lt;-</div>
          <span> 단지 목록</span>
        </button>
      </div>
      <div>
        <div className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium" htmlFor="card-nr">
              단지 명 <span className="text-rose-500">*</span>
            </label>
            <input
              id="card-nr"
              className="form-input w-full"
              type="text"
              placeholder="단지명"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium" htmlFor="card-nr">
              우편 번호 <span className="text-rose-500">*</span>
            </label>
            <input
              id="card-nr"
              className="form-input w-full"
              type="text"
              placeholder="우편 번호"
            />
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label
                className="mb-1 block text-sm font-medium"
                htmlFor="card-expiry"
              >
                단지 주소 <span className="text-rose-600">*</span>
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
                상세주소 <span className="text-rose-500">*</span>
              </label>
              <input
                id="card-cvc"
                className="form-input w-full"
                type="text"
                placeholder="상세주소"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="mb-4">
          <button
            className="btn w-full bg-indigo-500 text-white hover:bg-indigo-600"
            onClick={handleClickAddComplex}
          >
            단지 추가
          </button>
        </div>
      </div>
    </div>
  );
}

export default ComplexAdd