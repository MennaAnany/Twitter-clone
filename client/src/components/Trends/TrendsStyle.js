import styled from "styled-components";
import { FiSettings } from "react-icons/fi";

export const Border = styled.div`
  border-bottom: 1px solid rgba(204, 204, 204, 0.2);
`;

export const Div = styled.div`
  background-color: ${({ theme }) => theme.colors.bgSecondry};
  border-radius: 1.5rem;
  color: ${(props) => (props.head ? props.theme.color : "")};
  display: ${(props) => (props.head ? "flex" : "")};
  justify-content: ${(props) => (props.head ? "space-between" : "")};
  align-items: ${(props) => (props.head ? "center" : "")};

  padding: 0.3rem 0.1rem;
  margin-left: ${(props) => (props.head ? "" : "4rem")};
  overflow: hidden;
  width: 31.5rem;
`;

export const H4 = styled.h4`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 900;
  font-size: 2rem;
  padding: 1rem 1rem;
`;
export const Svg = styled(FiSettings)(
  ({ theme }) => `
margin-right:1rem;
border-radius: 3rem;
font-size:1.7rem;
 padding:0.7rem;
transition: all 0.4s;
&:hover {
  background-color: ${theme.themeColors.hover};
  border-radius:50%;

}

color: ${theme.themeColors.color};
cursor: pointer;

`
);

export const DivButton = styled.div(
  ({ theme }) => `
color: ${theme.themeColors.color};
background-color: transparent;
cursor: pointer;
transition: all 0.4s;
padding: 1.2rem;

&:hover {
  background-color: ${theme.colors.bgHover};
  border:none;
}

`
);
export const Button = styled.div`
  color: currentColor;
  border: none;
  background: none;
  font-size: 1.4rem;
  cursor: pointer;
`;
