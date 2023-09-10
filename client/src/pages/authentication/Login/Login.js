import React, { useState } from "react";
import Input from "../../../components/Input/Input/Input";
import { Button, P, Form, SignLink, Logo } from "../AuthStyle";
import { useNavigate } from "react-router-dom";
// import { Error2 } from "../AuthStyle";
import { useUserActions } from "../../../UserStore";
const Signin = () => {
  const { signin } = useUserActions();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const store = useUserStore();

  const onSubmit = async (e) => {
    e.preventDefault();

    signin({
      user: { email, password },
    });
    // navigate("/home");
  };
  return (
    <React.Fragment>
      <Form>
        <Logo />
        <P>Log in to Twitter</P>
        {/* {store.error ? <Error2>{store.error}</Error2> : null} */}
        <Input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button onClick={onSubmit} type="submit">
          Log in
        </Button>

        <SignLink to="/signup">Sign Up now</SignLink>
      </Form>
    </React.Fragment>
  );
};

export default Signin;
