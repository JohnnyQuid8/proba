import { Input, Button } from "antd";
import CharacterList from "../components/CharacterList";
import Layout from "../components/Layout";
import { useContext } from "react";
import { LoginContext } from "../App";
import SearchBar from "../components/SearchBar"
const CharacterListPage: React.FC = () => {
  const loginContext = useContext(LoginContext);

  return (
    // <Layout>
    <div> 
      <header>LOGO</header>
      <SearchBar />
      <Button onClick={() => loginContext.logout()}>LOG OUT</Button>
      <CharacterList />
      </div>
    // </Layout>
  );
};
export default CharacterListPage;
