import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

function Login() {
  const navigate = useNavigate();
  const { user, login } = useAuthContext();
  const [loginInfo, setLoginInfo] = useState({
    userId: "",
    password: "",
  });
  const { userId, password } = loginInfo;

  useEffect(() => {
    if (user) {
      navigate("/", { replace: true });
    } else {
      navigate("/login", { replace: true });
    }
  }, [user]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setLoginInfo({
      ...loginInfo,
      [name]: value,
    });
  };

  const handleClickLogin = async () => {
    try {
      await login(loginInfo.userId, loginInfo.password);
      // navigate("/device/status", { replace: true });
    } catch (e) {
      // TODO: Error
    }
  };

  return (
    <main className="relative justify-center bg-slate-100 md:flex">
      <div className="flex h-full min-h-screen flex-col after:flex-1">
        <div className="mx-auto max-w-sm px-4 py-8">
          <h1 className="mb-6 text-3xl font-bold text-slate-800">로그인</h1>
          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium">아이디</label>
              <input
                id="userId"
                className="form-input w-full"
                name="userId"
                value={userId}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                className="mb-1 block text-sm font-medium"
                htmlFor="password"
              >
                비밀번호
              </label>
              <input
                id="password"
                className="form-input w-full"
                type="password"
                autoComplete="on"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end">
            <button
              className="btn ml-3 bg-blue-500 text-white hover:bg-blue-600"
              onClick={handleClickLogin}
            >
              로그인
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
