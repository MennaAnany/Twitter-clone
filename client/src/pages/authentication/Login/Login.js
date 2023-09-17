import React, { useState, useEffect } from "react";
import Input from "../../../components/Input/Input/Input";
import { Button, P, Form, SignLink, Logo } from "../AuthStyle";
import { useNavigate } from "react-router-dom";
import { useUserActions } from "../../../UserStore";
import { useUserStore } from "../../../UserStore";
import { Error2 } from "../AuthStyle";
// import { Spinner } from "../../../components/Tweets/TweetsStyle";
const Signin = () => {
  const { signin } = useUserActions();
  const navigate = useNavigate();
  const currentUser = useUserStore((state) => state.user.email);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [loading, setLoading] = useState(true);
  const error = useUserStore((state) => state.signinError);

  const onSubmit = async (e) => {
    e.preventDefault();
    signin({
      user: { email, password },
    });
    navigate("/home");
  };

  useEffect(() => {
    if (currentUser) navigate("/home");
  }, [currentUser]);

  return (
    <div>
      {/* {loading ? (
        <Spinner />
      ) : ( */}
      <React.Fragment>
        <Form>
          <Logo />
          <P>Log in to Twitter</P>

          {error ? <Error2>{error}</Error2> : null}

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
      {/* )} */}
    </div>
  );
};

export default Signin;
