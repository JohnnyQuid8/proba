import React, { useContext } from "react";
import { Form, Input, Button } from "antd";
import CharacterListPage from "./CharacterListPage";
import Context from "../App";

const LoginPage: React.FC = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { login, setLogin } = useContext(Context);
  console.log(login);

  // Mogu nadograditi ako stignem
  const onFinish = (e: Event) => {
    if (username === "FWW" && password === "nikola") {
      setLogin(true);
      console.log("uspesno");
    } else {
      alert("Wrong password or username");
    }
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  console.log(username, password);
  return (
    <div>
      {!login ? (
        <Form onFinish={onFinish}>
          <Input
            placeholder="username"
            value={username}
            id="username"
            required
            onChange={handleUsernameChange}
          />
          <Input.Password
            placeholder="password"
            id="password"
            value={password}
            required
            onChange={handlePasswordChange}
          />
          <Button htmlType="submit">LOG IN</Button>
        </Form>
      ) : (
        <CharacterListPage />
      )}
    </div>
  );
};
export default LoginPage;
