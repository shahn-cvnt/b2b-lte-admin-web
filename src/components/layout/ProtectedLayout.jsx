import { Outlet, Navigate, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

import defaultUser from "../../images/ic_user_default.svg";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import { useEffect } from "react";
import { USER_ROLE_NAME, USER_ROLE_PRIORITY } from "../../constants";

function ProtectedLayout({ menu }) {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login", { replace: true });
    }
  }, [user]);

  return (
    <>
      {/* {false &&  <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />} */}
      <Header>
        <Header.Title title={"문정 스마트빌 2차"} />
        {/* TODO: Admin Check */}
        {(user.role === USER_ROLE_NAME.ROLE_ADMIN) && <Header.SettingButton handleClick={() => navigate("complex/setting")} />}
        <Header.Menu
          menu={menu.filter((e) => {
            if (e.role) {
              return e.role <= USER_ROLE_PRIORITY[user.role];
            } else {
              return e;
            }
          })
        }
        />
        {user && <Header.Profile name={user.id} image={defaultUser} />}
      </Header>
      <Outlet />
    </>
  );
}

export default ProtectedLayout;
