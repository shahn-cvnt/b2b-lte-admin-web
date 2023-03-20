import React from "react";
import {
  Routes,
  Route,
  Outlet,
  Navigate,
  createBrowserRouter,
  RouterProvider,
  useRoutes,
} from "react-router-dom";

import "./css/index.css";

import Header from "./components/header/Header";
import Home from "./pages/Home";
import Login from "./pages/login/Login";
import DeviceStatus from "./pages/device/DeviceStatus";

import { AuthProvider, useAuthContext } from "./hooks/useAuthContext";
import { useAuth } from "./hooks/useAuth";
import { useLocalStorage } from "./hooks/useLocalStroage";

import defaultUser from "./images/ic_user_default.svg";

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
  const { user }: any = useAuthContext();

  if (!user) {
    return <Navigate to="/login" replace={true}/>;
  }

  return <Outlet />;
};


function App() {
  const [ storedUser ] = useLocalStorage("cvnt_current_user");

  console.log(storedUser);

  return (
    <AuthProvider value={useAuth(storedUser)}>
      <Header>
        <Header.Title title={"문정 어쩌구 2차"} />
        <Header.Menu menu={menu} />
        { storedUser && <Header.Profile name={storedUser.id} image={defaultUser} /> }
      </Header>
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/device/status" element={<DeviceStatus />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
