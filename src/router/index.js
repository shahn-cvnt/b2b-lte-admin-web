import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import DeviceStatus from "../pages/device/DeviceStatus";
import ComplexInfo from "../pages/complex/ComplexInfo";
import ComplexSetting from "../pages/complex/ComplexSetting";
import EntranceGroup from "../pages/entrance_temp/EntranceGroup";
import EntranceDevice from "../pages/entrance_temp/EntranceDevice";
import EntranceHistory from "../pages/entrance_temp/EntranceHistory";
import EntranceRFCard from "../pages/entrance_temp/EntranceRFCard";
import ComplexAptGroup from "../pages/complex/ComplexAptGroup";
import ComplexApt from "../pages/complex/ComplexApt";
import ComplexOffice from "../pages/complex/ComplexOffice";

import ProtectedLayout from "../components/layout/ProtectedLayout"

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
    name: "(그룹 이름)",
    path: "/complex",
    children: [
      {
        name: "입주자 관리",
        path: "struct",
        element: <Home />,
      },
      {
        name: "방문자 관리",
        path: "struct",
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
        name: "동/세대 관리*",
        path: "donglist",
        element: <ComplexAptGroup />,
      },
      {
        path: "donginfo",
        element: <ComplexApt />,
      },
      {
        name: "관리/경비실 관리*",
        path: "guard",
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
        name: "상태 정보",
        path: "status",
        element: <DeviceStatus />,
      },
      {
        name: "펌웨어 등록",
        path: "firmware",
        element: <DeviceStatus />,
      },
      {
        name: "기기 제어 로그*",
        path: "firmware",
        element: <DeviceStatus />,
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
        path: "device",
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
