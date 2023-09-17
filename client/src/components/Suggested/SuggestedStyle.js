import styled from "styled-components";

export const Recommended = styled.div`
  margin-left: 2rem;
`;

export const P = styled.p(
  ({ theme }) => `
color: ${theme.colors.textSecondry};
font-size: 1.2rem;
cursor: pointer;
`
);
