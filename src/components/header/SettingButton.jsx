function SettingButton({ handleClick }) {
  return (
    <button
      className="btn-xs border-slate-200 bg-white pl-2 text-slate-600 shadow-sm hover:border-slate-300"
      onClick={handleClick}
    >
      <span className="text-xs text-blue-500">단지설정</span>
    </button>
  );
}

export default SettingButton;