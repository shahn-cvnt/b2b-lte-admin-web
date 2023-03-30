import React from "react";
import {
  Routes,
  Route,
  Outlet,
  Navigate,
  useNavigate,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./css/index.css";

import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import DeviceStatus from "./pages/device/DeviceStatus";

import { AuthProvider, useAuthContext } from "./hooks/useAuthContext";
import { useAuth } from "./hooks/useAuth";
import { useLocalStorage } from "./hooks/useLocalStroage";

import defaultUser from "./images/ic_user_default.svg";
import ComplexInfo from "./pages/complex/ComplexInfo";

import ComplexStruct from "./pages/complex_temp/ComplexStruct";
import ComplexSetting from "./pages/complex_temp/ComplexSetting";
import EntranceGroup from "./pages/entrance_temp/EntranceGroup"
import EntranceDevice from "./pages/entrance_temp/EntranceDevice"
import EntranceHistory from "./pages/entrance_temp/EntranceHistory";
import EntranceRFCard from "./pages/entrance_temp/EntranceRFCard";
import ComplexDongList from "./pages/complex/ComplexDongList";
import ComplexDongInfo from "./pages/complex/ComplexDongInfo";

const ProtectedLayout = () => {
  const navigate = useNavigate();
  const { user }: any = useAuthContext();

  if (!user) {
    return <Navigate to="/login" replace={true} />;
  }

  return (
    <>
    <Header>
        <Header.Title title={"문정 스마트빌 2차"} />
        <div>
          <button
            className="btn-xs border-slate-200 bg-white pl-2 text-slate-600 shadow-sm hover:border-slate-300"
            onClick={(e) => {
              navigate('/complex/setting');
            }}
          >
            <span className="text-xs text-blue-500">단지설정</span>
          </button>
        </div>
        <Header.Menu menu={routes[0].children?.filter((e) => (e.name))} />
        {user && <Header.Profile name={user.id} image={defaultUser} />}
      </Header>
      <Outlet />
    </>
  );
};


const routes = [
  {
    path: "/",
    element: <ProtectedLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/complex/setting',
        element: <ComplexSetting/>
      },
      {
        name: '(그룹 이름)',
        path: "/complex",
        children: [
          {
            name: '입주자 관리',
            path: 'struct',
            element: <ComplexStruct/>
          },
          {
            name: '방문자 관리',
            path: 'struct',
            element: <ComplexStruct/>
          }
        ]
      },
      {
        name: '단지 관리',
        path: "/complex",
        children: [
          {
            name: '단지 정보',
            path: "info",
            element: <ComplexInfo/>
          },
          {
            name: '동/세대 관리*',
            path: 'donglist',
            element: <ComplexDongList/>
          },
          {
            name: '동 상세(임시)*',
            path: 'donginfo',
            element: <ComplexDongInfo/>
          },
          {
            name: '관리/경비실 관리*',
            path: 'struct',
            element: <ComplexStruct/>
          }
        ],
      },
      {
        name: '기기 관리',
        path: "/device",
        element: <DeviceStatus />,
        children: [
          {
            name: '상태 정보',
            path: "status",
            element: <DeviceStatus />
          },
          {
            name: '펌웨어 등록',
            path: "firmware",
            element: <DeviceStatus />
          },
          {
            name: '기기 제어 로그*',
            path: "firmware",
            element: <DeviceStatus />
          },
        ],
      },
      {
        name: '출입 관리',
        path: "/entrance",
        children: [
          {
            name: '출입 그룹',
            path: "group",
            element: <EntranceGroup />
          },
          {
            name: '출입 기기',
            path: "device",
            element: <EntranceDevice />
          },
          {
            name: '출입 이력',
            path: "history",
            element: <EntranceHistory />
          },
          {
            name: 'RF 카드',
            path: "rfcard",
            element: <EntranceRFCard />
          },
        ],
      },
      {
        name: '통화 관리',
        path: "/call",
        children: [
          {
            name: '통화 이력',
            path: "",
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]
const router = createBrowserRouter(routes);

export default function App() {
  const [storedUser] = useLocalStorage("cvnt_current_user");
  return (
    <AuthProvider value={useAuth(storedUser)}>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

// function App() {
//   const [storedUser] = useLocalStorage("cvnt_current_user");

//   return (
//     <AuthProvider value={useAuth(storedUser)}>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route element={<ProtectedLayout />}>
//           <Route path="/" element={<Home />} />
//           <Route path="/device/status" element={<DeviceStatus />} />
//         </Route>
//       </Routes>
//     </AuthProvider>
//   );
// }

// export default App;
