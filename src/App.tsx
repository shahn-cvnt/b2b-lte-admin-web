import React from "react";
import {
  Routes,
  Route,
  Outlet,
  createBrowserRouter,
  RouterProvider,
  useRoutes,
} from "react-router-dom";

import "./css/index.css";

import Header from "./components/header/Header";
import Home from "./pages/Home";
import DeviceStatus from "./pages/device/DeviceStatus";
import defaultUser from "./images/defaultUser.svg";

const menu = [
  {
    name: "단지 관리",
    path: "",
    disabled: true,
  },
  {
    name: "기기 관리",
    path: "/device/status",
    children: [
      {
        name: "상태 정보",
        path: "/device/status",
      },
      {
        name: "펌웨어 등록",
        path: "",
      },
    ],
  },
  {
    name: "출입 관리",
    path: "",
    disabled: true,
  },
  {
    name: "통화 관리",
    path: "",
    disabled: true,
  },
];

const ProtectedLayout = () => {
  // const { user }: any = useAuthContext();

  // if (!user) {
  //   return <Navigate to="/login" />;
  // }

  return <Outlet />;
};

// {
//   path?: string;
//   index?: boolean;
//   children?: React.ReactNode;
//   caseSensitive?: boolean;
//   id?: string;
//   loader?: LoaderFunction;
//   action?: ActionFunction;
//   element?: React.ReactNode | null;
//   Component?: React.ComponentType | null;
//   errorElement?: React.ReactNode | null;
//   ErrorBoundary?: React.ComponentType | null;
//   handle?: RouteObject["handle"];
//   shouldRevalidate?: ShouldRevalidateFunction;
//   lazy?: LazyRouteFunction<RouteObject>;
// },

function App() {
  return (
    <>
      <Header>
        <Header.Title title={"문정 어쩌구 2차"} />
        <Header.Menu menu={menu} />
        <Header.Profile name={"관리자"} image={defaultUser} />
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/device" element={<ProtectedLayout />}>
          <Route path="status" element={<DeviceStatus />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
