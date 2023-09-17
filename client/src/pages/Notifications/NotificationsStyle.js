import styled from "styled-components";

export const Notificationss = styled.div`
  cursor: pointer;
`;

export const Icon = styled.div`
  svg {
    color: ${({ theme }) => theme.themeColors.color};
  }
  font-size: 2rem;
  @media (max-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const H4 = styled.h4`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 2rem;
  font-weight: 900;
  @media (max-width: 700px) {
    font-size: 1.5rem;
  }
`;
export const Div = styled.div`
  padding: 0.9rem;
  border-radius: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    background-color: ${({ theme }) => theme.themeColors.hover};
  }
  @media (max-width: 700px) {
    padding: 0.1rem;
  }
`;
export const DivHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  color: ${({ theme }) => theme.themeColors.color};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

export const Border = styled.div`
  border-bottom: 1px solid rgba(204, 204, 204, 0.2);
`;
