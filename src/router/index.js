import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import DeviceStatus from "../pages/device/DeviceStatus";
import ComplexInfo from "../pages/complex/ComplexInfo";
import ComplexSetting from "../pages/complex-setting/ComplexSetting";
import EntranceGroup from "../pages/entrance_temp/EntranceGroup";
import EntranceDevice from "../pages/entrance_temp/EntranceDevice";
import EntranceHistory from "../pages/entrance_temp/EntranceHistory";
import EntranceRFCard from "../pages/entrance_temp/EntranceRFCard";
import ComplexAptGroup from "../pages/complex/ComplexAptGroup";
import ComplexApt from "../pages/complex/ComplexApt";
import ComplexOffice from "../pages/complex/ComplexOffice";

import ProtectedLayout from "../components/layout/ProtectedLayout"

import { USER_ROLE_PRIORITY } from "../constants";

// 메뉴 탭에 추가 할 페이지 목록
const childrenRoutes = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: "/complex/setting",
    element: <ComplexSetting />,
  },
  {
    name: "사용자 관리",
    path: "/community",
    role: USER_ROLE_PRIORITY.ROLE_MAN_OFFICE,
    children: [
      {
        name: "입주자 관리",
        path: "resident",
        element: <Home />,
      },
      {
        name: "방문자 관리",
        path: "visitor",
        element: <Home />,
      },
    ],
  },
  {
    name: "단지 관리",
    path: "/complex",
    children: [
      {
        name: "단지 정보",
        path: "info",
        element: <ComplexInfo />,
      },
      {
        name: "동/세대 관리",
        path: "apt_group",
        role: USER_ROLE_PRIORITY.ROLE_MAN_OFFICE,
        element: <ComplexAptGroup />
      },
      {
        path: "apt_group/apt",
        element: <ComplexApt />,
      },
      {
        name: "관리/경비실 관리",
        path: "guard",
        role: USER_ROLE_PRIORITY.ROLE_MAN_OFFICE,
        element: <ComplexOffice />,
      },
    ],
  },
  {
    name: "기기 관리",
    path: "/device",
    element: <DeviceStatus />,
    children: [
      {
        name: "기기 모니터링",
        path: "monitor",
        role: USER_ROLE_PRIORITY.ROLE_MAN_OFFICE,
        element: <DeviceStatus />,
      },
      {
        name: "펌웨어 등록",
        path: "firmware",
        role: USER_ROLE_PRIORITY.ROLE_ADMIN,
        element: <Home />,
      },
      {
        name: "기기 제어 로그",
        path: "control_log",
        role: USER_ROLE_PRIORITY.ROLE_MAN_OFFICE,
        element: <Home />,
      },
    ],
  },
  {
    name: "출입 관리",
    path: "/entrance",
    children: [
      {
        name: "출입 그룹",
        path: "group",
        element: <EntranceGroup />,
      },
      {
        name: "출입 기기",
        path: "entdevice",
        element: <EntranceDevice />,
      },
      {
        name: "출입 이력",
        path: "history",
        element: <EntranceHistory />,
      },
      {
        name: "RF 카드",
        path: "rfcard",
        element: <EntranceRFCard />,
      },
    ],
  },
  {
    name: "통화 관리",
    path: "/call",
    children: [
      {
        name: "통화 이력",
        path: "",
      },
    ],
  },
];

const routes = [
  {
    path: "/",
    element: <ProtectedLayout menu={childrenRoutes.filter((e) => e.name)}/>,
    children: childrenRoutes,
  },
  {
    path: "/login",
    element: <Login />,
  },
];

const router = createBrowserRouter(routes);

export { router };
