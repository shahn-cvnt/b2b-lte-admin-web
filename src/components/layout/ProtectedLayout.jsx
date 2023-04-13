import { Outlet, Navigate, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

// import defaultUser from "../../images/ic_user_default.svg";
import defaultUser from "../../images/img_user_avatar_32.png";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import { useEffect, useState } from "react";
import { USER_ROLE_NAME, USER_ROLE_PRIORITY } from "../../constants";
import { useComplexInfo } from "../../hooks/useComplex";

function ProtectedLayout({ menu }) {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  // const { complexInfo } = useComplexInfo();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate("/login", { replace: true });
      return;
    }
  }, [user]);

  return (
    <div className="flex h-screen overflow-hidden">
      {user && (
        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          menu={menu.filter((e) => {
            if (e.role) {
              return e.role <= USER_ROLE_PRIORITY[user.role];
            } else {
              return e;
            }
          })}
        />
      )}
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden bg-white">
        {user && (
          <Header>
            {/* <Header.Title title={complexInfo.name} /> */}
            {/* {user.role === USER_ROLE_NAME.ROLE_ADMIN && (
            <Header.SettingButton
              handleClick={() => navigate("complex/setting")}
            />
          )}
          <Header.Menu
            menu={menu.filter((e) => {
              if (e.role) {
                return e.role <= USER_ROLE_PRIORITY[user.role];
              } else {
                return e;
              }
            })}
          /> */}
            <Header.Profile
              name={user.id}
              imageUrl={defaultUser}
              align="right"
            />
            <hr className="mx-3 h-6 w-px bg-slate-200" />
            <Header.LogoutButton />
          </Header>
        )}
        <Outlet />
      </div>
    </div>
  );
}

export default ProtectedLayout;
