import { useAuthContext } from "../../hooks/useAuthContext";
function LogoutButton() {
  const { logout } = useAuthContext();

  return (
    <button
      className="flex items-center px-1 py-1 text-sm font-medium text-indigo-500 hover:text-indigo-600"
      onClick={() => {
        logout();
      }}
    >
      로그아웃
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-logout ml-1 stroke-indigo-500 hover:stroke-indigo-600"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#6f32be"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
        <path d="M7 12h14l-3 -3m0 6l3 -3" />
      </svg>
    </button>
  );
}

export default LogoutButton;
