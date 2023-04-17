import { Outlet, Navigate, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

import defaultUser from "../../images/img_user_avatar_32.png";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import { useEffect, useState } from "react";
import { USER_ROLE_PRIORITY } from "../../constants";
import ModalBasic from "../modal/ModalBasic";
import ComplexSetting from "../../pages/complex-setting/ComplexSetting";
import { useComplexInfo } from "../../hooks/useComplex";

function ProtectedLayout({ menu }) {
  const navigate = useNavigate();
  const { user, loginByToken } = useAuthContext();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { complexInfo, fetchData } = useComplexInfo()
  const [isComplexSettingOpen, setIsComplexSettingOpen] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate("/login", { replace: true });
      return;
    }


  }, [user]);

  useEffect(() => {
    // setIsComplexSettingOpen(true);
  }, []);

  const handleClickSetting = () => {
    setIsComplexSettingOpen(!isComplexSettingOpen);
  }

  const handleChangeComplex = () => {
    fetchData();
    setIsComplexSettingOpen(false);
  }
  return (
    <div className="flex h-screen overflow-hidden">
      {user && (
        <Sidebar
          logoTitle={complexInfo.name}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          menu={menu.filter((e) => {
            if (e.role) {
              return e.role <= USER_ROLE_PRIORITY[user.role];
            } else {
              return e;
            }
          })}
          handleClickSetting={handleClickSetting}
        />
      )}
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden bg-white">
        {user && (
          <Header>
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
        <ModalBasic
        modalOpen={isComplexSettingOpen}
        setModalOpen={setIsComplexSettingOpen}
        title="단지 설정"
        >
          <ComplexSetting handleChangeComplex={handleChangeComplex} />
        </ModalBasic>
      </div>
    </div>
  );
}

export default ProtectedLayout;
