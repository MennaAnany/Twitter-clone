import styled from "styled-components";

export const TweetDisplayy = styled.div`
  border-radius: 1rem;
  border: 1px solid rgba(204, 204, 204, 0.2);
  display: flex;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  @media (max-width: 1024px) {
    font-size: 1.2rem;
  }
`;
export const Image = styled.div`
  display: flex;
  align-items: flex-start;
  margin-right: 1rem;
  img {
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
  }
`;

export const Info = styled.div`
  margin-bottom: 0.5rem;
`;

export const Text = styled.div`
  font-weight: 300;
  font-size: 1.5rem;

  @media (max-width: 1024px) {
    font-size: 1rem;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.colors.textSecondry};
  font-weight: 300;
  margin-left: 1rem;
`;
export const H4 = styled.h4`
  color: ${({ theme }) => theme.colors.textPrimary};
`;
export const P = styled.p`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: "Roboto";
`;
