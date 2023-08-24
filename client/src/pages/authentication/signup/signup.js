import React, { useRef } from "react";
import Input from "../../../components/Input/Input/Input";
import { Button, Form, P, SignLink, Logo } from "../AuthStyle";
// import { useState } from "react";
// import CircularProgress from "@mui/material/CircularProgress";

const Signup = (props) => {
  // const [isLoading, setIsloading] = useState(false);

  const usernameRef = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmationRef = useRef(null);

  const onSubmit = () => {
    props.getUser({
      username: usernameRef.current.value,
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      passwordConfirmation: passwordConfirmationRef.current.value,
    });
  };

  return (
    <div>
      <React.Fragment>
        <Form>
          <Logo />
          <P>Sign up to Twitter</P>
          <Input
            type="text"
            placeholder="Username"
            name="username"
            refrence={usernameRef}
          />
          <Input
            type="text"
            placeholder="Name"
            name="name"
            refrence={nameRef}
          />
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
          <Input
            type="password"
            placeholder="Password Confirmation"
            name="passwordConfirm"
            refrence={passwordConfirmationRef}
          />
          <Button onClick={onSubmit} type="submit">
            Sign up
          </Button>

          <SignLink to="/signin">Log in now</SignLink>
        </Form>
      </React.Fragment>
    </div>
  );
};

export default Signup;
