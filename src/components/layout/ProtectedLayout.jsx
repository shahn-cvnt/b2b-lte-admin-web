import { Outlet, Navigate, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

// temp
import defaultUser from "../../images/ic_user_default.svg";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import { useEffect } from "react";

function ProtectedLayout({ menu }) {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/', {replace: true});
    } else {
      navigate('/login', {replace: true});
    }

  }, [user])

  return (
    <>
      {/* {false &&  <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />} */}
      <Header>
        <Header.Title title={"문정 스마트빌 2차"} />
        {/* TODO: Admin Check */}
        <Header.SettingButton handleClick={() => navigate("complex/setting")} />
        <Header.Menu menu={menu} />
        {user && <Header.Profile name={user.id} image={defaultUser} />}
      </Header>
      <Outlet />
    </>
  );
}

export default ProtectedLayout;