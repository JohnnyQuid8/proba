import { Input, Button } from "antd";
import CharacterList from "../components/CharacterList";
import Layout from "../components/Layout";

const CharacterListPage: React.FC = () => {
  return (
    <Layout>
      <header>LOGO</header>
      <Input type="search" placeholder="search" />
      <Button>LOG OUT</Button>
      <CharacterList />
    </Layout>
  );
};
export default CharacterListPage;
