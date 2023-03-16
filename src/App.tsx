import React from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Header from "./components/header/Header";

import './css/index.css';

// <Header>
// <Header.Title title={{"문정 스마트 빌 2차"}}>
// <Header.Menu menu={[''..''..''..]}>
// <Header.Profile profile={{icon: name.. }}>
// </Header>

function App() {
  return (
    <div>
      <Header>
      </Header>
    </div>
  );
}

export default App;
