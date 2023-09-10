import styled from "styled-components";

export const Header = styled.div`
  text-align: center;
`;
export const Tweet = styled.div`
  width: 70%;
  align-self: center;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Form = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 1024px) {
    &:first-child {
      margin-bottom: 2rem;
    }
  }
`;
export const BG = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1024px) {
    flex-direction: column;
    :nth-child(1) {
      margin-bottom: 1rem;
    }
    :nth-child(2) {
      margin-bottom: 1rem;
    }
    :nth-child(3) {
      margin-bottom: 1rem;
    }
  }
`;

export const DisplayContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    width: 20rem;
    height: 2rem;
  }
`;

export const Div = styled.div`
  border-radius: 2rem;
  position: relative;
  background-color: ${(props) =>
    props.secondry
      ? props.theme.colors.bgSecondry
      : props.theme.colors.bgPrimary};
  z-index: 300;
  width: ${(props) => (props.secondry ? "" : "65rem")};
  padding: 2rem;
  margin-bottom: 1rem;

  @media (max-width: 1024px) {
    width: ${(props) => (props.secondry ? "30rem" : "40rem")};
    height: ${(props) => (props.secondry ? "13rem" : "90rem")};
    top: ${(props) => (props.secondry ? "1rem" : " 45rem")};
  }
  transition: all 0.4s;
`;

export const H4 = styled.h4`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 900;
  font-size: 2.5rem;
  margin-bottom: 1rem;

  @media (max-width: 1024px) {
    font-size: 1.7rem;
  }
`;

export const P = styled.p`
  color: ${({ theme }) => theme.colors.textSecondry};
  font-size: ${(props) => (props.title ? "1.5rem" : "1.8rem")};
  font-weight: ${(props) => (props.title ? "900" : "400")};
  margin-bottom: 1rem;

  @media (max-width: 1024px) {
    font-size: ${(props) => (props.title ? "1.4rem" : "1.2rem")};
    margin-top: ${(props) => (props.title ? "1rem" : "")};
    margin-right: ${(props) => (props.title ? "" : "1rem")};
  }
`;
export const Button = styled.button`
  background-color: ${({ theme }) => theme.themeColors.color};
  color: #fff;
  font-size: 1.7rem;
  font-weight: 700;
  padding: 1rem 1.8rem;
  outline: none;
  border: none;
  cursor: pointer;
  align-self: center;
  border-radius: 3rem;
  transition: all 0.4s;

  @media (max-width: 1024px) {
    font-size: 1.5rem;
    margin-top: 1rem;
  }
`;
export const Head = styled.div`
  display: flex;
  flex-direction: column;
`;
