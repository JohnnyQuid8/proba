import { Input, Button } from "antd";
import CharacterList from "../components/CharacterList";

const CharacterListPage: React.FC = () => {
  return (
    <div>
      <header>LOGO</header>
      <Input type="search" placeholder="search" />
      <Button>LOG OUT</Button>
      <CharacterList />
    </div>
  );
};
export default CharacterListPage;
