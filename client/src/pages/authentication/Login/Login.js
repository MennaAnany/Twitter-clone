import React, { useRef } from "react";
import Input from "../../../components/Input/Input/Input";
import { Button, P, Form, SignLink, Logo } from "../AuthStyle";

const Signin = (props) => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const onSubmit = () => {
    props.getUser({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return (
    <div>
      <React.Fragment>
        <Form>
          <Logo />
          <P>Log in to Twitter</P>
          <Input
            type="email"
            placeholder="Email"
            name="email"
            refrence={emailRef}
          />
          <Input
            type="password"
            placeholder="Password"
            name="password"
            refrence={passwordRef}
          />

          <Button onClick={onSubmit} type="submit">
            Log in
          </Button>

          <SignLink to="/signup">Sign Up now</SignLink>
        </Form>
      </React.Fragment>
    </div>
  );
};

export default Signin;
