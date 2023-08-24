import styled from "styled-components";

export const Div = styled.div`
  background-color: transparent;
  cursor: pointer;
  transition: all 0.4s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.bgHover};
  }
  color: ${(props) =>
    props.header
      ? props.theme.colors.textSecondry
      : props.theme.colors.textPrimary};
  padding: ${(props) => (props.header ? "0.5rem" : "")};
  border-radius: ${(props) => (props.header ? "3rem" : "")};

  display: flex;

  &:hover {
    color: ${(props) => (props.header ? props.theme.color : "")};
    background-color: ${(props) => (props.header ? props.theme.hover : "")};
  }

  padding: 1rem;
  align-items: center;
`;

export const P = styled.span`
  color: ${(props) =>
    props.secondry
      ? props.theme.colors.textSecondry
      : props.theme.colors.textPrimary};
  font-size: ${(props) => (props.secondry ? "1.2rem" : "1.5rem")};
  margin-bottom: ${(props) => (props.secondry ? "" : "0.5rem")};
`;

export const Span = styled.span`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button(
  ({ theme }) => `
  border: 1px solid ${theme.themeColors.color};
  outline: none;
  background: transparent;
  border-radius: 3rem;
  padding: 0.4rem 1.5rem;
  color: ${theme.themeColors.color};
  cursor: pointer;
  font-weight: 900;
  transition: all 0.5s;
  &:hover {
    background: ${theme.themeColors.hover};

  }
`
);

export const Image = styled.img`
  padding: 0.4rem 0.2rem;
  align-items: center;
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
  margin-right: 1rem;
`;

export const Border = styled.div`
  border-bottom: 1px solid rgba(204, 204, 204, 0.2);
`;
