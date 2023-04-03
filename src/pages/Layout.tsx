import LoginPage from "./LoginPage";
import { Outlet, Link } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div>
      <Link to="/"></Link>
      <Link to="CharacterListPage"></Link>
      <Outlet />
    </div>
  );
};

export default Layout;
