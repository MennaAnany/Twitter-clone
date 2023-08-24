import styled from "styled-components";

export const Div = styled.div`
  background-color: ${({ theme }) => theme.colors.bgSecondry};
  border-radius: 1.5rem;

  color: ${(props) => (props.primary ? props.theme.color : "")};
  padding: ${(props) => (props.primary ? "1rem" : "")};
  overflow: hidden;
`;

export const H4 = styled.h4(
  ({ theme }) => `
  color: ${theme.colors.textPrimary};
  font-weight: 900;
  font-size: 1.8rem;

`
);

export const Button = styled.div`
  color: ${({ theme }) => theme.themeColors.color};
  outline: none;
  border: none;
  background: none;
  font-size: 1.4rem;
  cursor: pointer;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.4s;
  padding: 1rem;
  &:hover {
    background-color: ${({ theme }) => theme.colors.bgHover};
  }
`;

export const Followw = styled.div`
  padding: 1.6rem;
  width: 32rem;
`;

export const Border = styled.div`
  border-bottom: 1px solid rgba(204, 204, 204, 0.2);
`;
