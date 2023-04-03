import React, { createContext } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import CharacterListPage from "./pages/CharacterListPage";

export interface MyContext {
  login: any;
  setLogin: any;
}
const Context = createContext<MyContext | null>(null);

interface Provider {
  children: React.ReactNode;
}
const MyProvider: React.FC<Provider> = ({ children }) => {
  const [login, setLogin] = React.useState(false);

  return (
    <Context.Provider value={{ login, setLogin }}>{children}</Context.Provider>
  );
};

const App: React.FC = () => {
  return (
    <Routes>
      <MyProvider>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="CharacterListPage" element={<CharacterListPage />}></Route>
      </MyProvider>
    </Routes>
  );
};

export default App;
