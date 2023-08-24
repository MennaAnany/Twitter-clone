import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";

export const Div = styled.div(
  ({ theme }) => `

  background-color: transparent;
  cursor: pointer;
  transition: all 0.4s;
  &:hover {
    background-color: ${theme.colors.bgHover};

  }
  color: ${(props) =>
    props.header
      ? props.theme.colors.textSecondry
      : props.theme.colors.textPrimary};
  padding:  0.2rem 0.2rem;
  border-radius: 3rem;
  display: flex;

  &:hover {
    color: ${(props) => (props.header ? props.theme.themeColors.color : "")};
    background-color: ${(props) =>
      props.header ? props.theme.themeColors.hover : ""};
      
  }

`
);

export const P = styled.p(
  (props) => `
  color: ${
    props.secondry
      ? props.theme.colors.textSecondry
      : props.theme.colors.textPrimary
  };
  font-size: ${props.secondry ? "1.2rem" : "1.5rem"};
  font-weight: 700;

  
  
`
);

export const TrendsItemm = styled.div`
  padding: 1rem 2rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.bgHover};
  }

  transition: all 0.4s;
`;
export const TrendsItemHeader = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Svg = styled(IoIosArrowDown)(
  ({ theme }) => `
  color: ${theme.colors.textSecondry};
  background-color: transparent;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: ${theme.themeColors.hover};
    color: ${theme.themeColors.color};
    border-radius:50%;

  }
`
);
export const Text = styled.div`
  margin-bottom: 0.5rem;
`;

export const Border = styled.div`
  border-bottom: 1px solid rgba(204, 204, 204, 0.2);
`;
