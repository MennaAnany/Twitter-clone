import styled from "styled-components";

export const Notificationss = styled.div`
  min-height: 100vh;
  cursor: pointer;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.bgPrimary};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;
export const Icon = styled.div`
  svg {
    color: ${({ theme }) => theme.themeColors.color};
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const H4 = styled.h4`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 2rem;
  font-weight: 900;
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
