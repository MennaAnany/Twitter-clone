import styled from "styled-components";
import { BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

const Button = styled.button(
  ({ theme }) => `
  background-color: ${theme.themeColors.color};
  color: ${theme.colors.textPrimary};
  outline: none;
  border: none;
  padding: 1rem;
  font-size: 1.7rem;
  font-weight: 700;
  cursor: pointer;
  border-radius: 5rem;
  width: 25%;

  @media (max-width: 1024px) {
 
    font-size: 1.3rem;
    width: 20%;
  }
  `
);
const P = styled.p(
  ({ theme }) => `
  color: ${theme.colors.textPrimary};
  font-size:2rem;
  font-weight: 700;
  margin-bottom: 2.5rem;

  @media (max-width: 1024px) {
 
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
  }
  
`
);

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 3rem;
`;
const Logo = styled(BsTwitter)`
  font-size: 4rem;
  margin-bottom: 1rem;
  color: #1da1f2;

  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }
`;

const SignLink = styled(Link)`
  margin-top: 2rem;
  color: #1da1f2;
  text-decoration: none;
  font-size: 1.7rem;
  @media (max-width: 1024px) {
    font-size: 1.5rem;
  }
`;

const Logo2 = styled(BsTwitter)`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

const SignupLink = styled(Link)`
  margin-top: 2rem;
  color: #1da1f2;
  text-decoration: none;
  font-size: 1.7rem;
`;

const Error = styled.p`
  color: #d63301;
  margin-top: -1rem;
  font-size: 1.1rem;
`;

const Error2 = styled.p`
  color: #d63301;
  margin-top: -1rem;
  margin-bottom: 1rem;
  font-size: 1.6rem;
`;

export { Button, Form, P, Logo, SignLink, Logo2, SignupLink, Error, Error2 };
