import React, { useState } from "react";
import Input from "../../../components/Input/Input/Input";
import { Button, Form, P, SignLink, Logo, Error } from "../AuthStyle";
import { useNavigate } from "react-router-dom";
// import { Error2 } from "../AuthStyle";
import { useUserActions } from "../../../UserStore";
// import { useError } from "../../../UserStore";
// import { useUserActions } from "../../../UserStore";
const Signup = () => {
  const { signup } = useUserActions();
  // const { setError } = useUserActions();

  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordConfirmationError, setPasswordConfirmationError] =
    useState("");

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    const isValidEmail = (value) => {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(value);
    };

    let isValid = true;

    if (name.trim() === "") {
      setNameError("Please provide your name");
      isValid = false;
    } else {
      setNameError("");
    }

    if (username.trim() === "") {
      setUsernameError("Please provide your username");
      isValid = false;
    } else {
      setUsernameError("");
    }

    if (email.trim() === "") {
      setEmailError("Please provide your email");
      isValid = false;
    } else if (!isValidEmail(email)) {
      setEmailError("Please provide a valid email");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (password.trim() === "") {
      setPasswordError("Please provide your password");
      isValid = false;
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (passwordConfirmation.trim() === "") {
      setPasswordConfirmationError("Please confirm your password");
      isValid = false;
    } else if (passwordConfirmation !== password) {
      setPasswordConfirmationError("Passwords do not match");
      isValid = false;
    } else {
      setPasswordConfirmationError("");
    }

    if (isValid) {
      signup({
        user: { username, name, email, password, passwordConfirmation },
        isValid,
      });
      navigate("/home");
    }
  };
  return (
    <div>
      <React.Fragment>
        <Form>
          <Logo />
          <P>Sign up to Twitter</P>
          {/* {error ? <Error2>{error}</Error2> : null} */}
          <Input
            type="text"
            placeholder="Username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ border: usernameError ? "1px solid red" : null }}
          />
          <Error>{usernameError && <span>{usernameError}</span>}</Error>
          <br />
          <Input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ border: nameError ? "1px solid red" : null }}
          />
          <Error>{nameError && <span>{nameError}</span>}</Error>

          <br />
          <Input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ border: emailError ? "1px solid red" : null }}
          />
          <Error> {emailError && <span>{emailError}</span>}</Error>
          <br />
          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ border: passwordError ? "1px solid red" : null }}
          />
          <Error>{passwordError && <span>{passwordError}</span>}</Error>
          <br />
          <Input
            type="password"
            placeholder="Password Confirmation"
            name="passwordConfirm"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            style={{
              border: passwordConfirmationError ? "1px solid red" : null,
            }}
          />
          <Error>
            {passwordConfirmationError && (
              <span>{passwordConfirmationError}</span>
            )}
          </Error>
          <br />
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
