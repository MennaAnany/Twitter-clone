import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.9rem;
`;

export const Image = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  margin-right: 1rem;
`;

export const Name = styled.div`
  margin-bottom: 0.9rem;
`;

export const Bio = styled.div`
  margin-bottom: 0.9rem;
`;

export const Div = styled.div`
  background-color: ${(props) => props.theme.colors.bgPrimary};
  box-shadow: ${({ theme }) => `4px 3px 20px 5px ${theme.colors.shadowColor}`};
  padding: 1.8rem;
  border-radius: 1rem;
  width: 26rem;
  position: absolute;
  left: 60rem;
  margin-bottom: 10rem;
  @media (max-width: 1024px) {
    position: absolute;
    left: 10rem;
  }

  @media (max-width: 600px) {
    position: absolute;
    left: 60rem;
  }

  @media (max-width: 1200px) {
    position: absolute;
    left: 25rem;
  }

  @media (max-width: 500px) {
    position: absolute;
    left: 8rem;
  }
`;
export const P = styled.p`
  color: ${(props) =>
    props.primary
      ? props.theme.colors.textPrimary
      : props.theme.colors.textSecondry};
  font-size: ${(props) => (props.primary ? "1.5rem" : "1.2rem")};
`;
export const Button = styled.button`
  border: 1px solid ${({ theme }) => theme.themeColors.color};
  outline: none;
  background: transparent;
  border-radius: 3rem;
  padding: 0.4rem 1.5rem;
  color: ${({ theme }) => theme.themeColors.color};
  cursor: pointer;
  font-weight: 900;

  &:hover {
    background: ${({ theme }) => theme.themeColors.hover};
  }
`;
export const Span = styled.span`
  color: ${({ theme }) => theme.colors.textSecondry};
  font-weight: 900;
`;
export const Footer = styled.div`
      display: flex;
      align-items: center;
   `;
