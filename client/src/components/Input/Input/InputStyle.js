import styled from "styled-components";

const InputUser = styled.input(
  ({ theme }) => `
  background-color: ${theme.colors.bgSecondry};
  border: none;
  margin-bottom: 1.7rem;
  padding: 1.4rem;
  outline: none;
  width: 26%;
  font-size: 1.7rem;
  color: ${theme.colors.textPrimary};
  border-bottom: 1px solid ${theme.colors.textSecondry};
`
);

export default InputUser;
