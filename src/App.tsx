import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Layout from "./pages/Layout";
import CharacterListPage from "./pages/CharacterListPage";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />}></Route>
      <Route path="CharacterListPage" element={<CharacterListPage />}></Route>
    </Routes>
  );
};

export default App;
