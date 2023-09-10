import styled from "styled-components";
import { IoIosSearch } from "react-icons/io";

export const Input = styled.input(
  ({ theme }) => `

  background-color: ${theme.colors.bgSecondry};
  padding: 1.1rem;
  width: 28rem;
  border: none;
  border-radius: 2rem;
  outline: none;
  color: ${theme.colors.textPrimary};
  font-size: 1.5rem;
  padding-left: 3rem;
  &:focus {
    border: 1px solid ${theme.themeColors.color};
  }
`
);

export const Div = styled.div`
  color: ${({ theme }) => theme.colors.textSecondry};
`;

export const SearchbarDiv = styled.div`
  padding: 1.5rem;
  /* @media (max-width: 1024px) {
    display: none;
  } */
`;

export const Form = styled.div`
  display: flex;
  align-items: center;
`;

export const Svg = styled(IoIosSearch)`
  position: relative;
  left: 2.7rem;
  top: 0.2rem;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.textSecondry};
`;
