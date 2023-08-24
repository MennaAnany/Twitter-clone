import React, { useRef } from "react";
import Input from "../../../components/Input/Input/Input";
import { Button, P, Form, Logo2, SignupLink } from "../AuthStyle";

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
          <Logo2 />
          <P>Sign in to Twitter</P>

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
            Sign in
          </Button>

          <SignupLink to="/signup">Sign Up now</SignupLink>
        </Form>
      </React.Fragment>
    </div>
  );
};

export default Signin;
