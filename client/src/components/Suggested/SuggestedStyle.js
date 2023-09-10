import styled from "styled-components";

export const Recommended = styled.div`
  margin-left: 2rem;
  /* @media (max-width: 1024px) {
    display: none;
  } */
`;

export const P = styled.p(
  ({ theme }) => `
color: ${theme.colors.textSecondry};
font-size: 1.2rem;
cursor: pointer;
`
);
