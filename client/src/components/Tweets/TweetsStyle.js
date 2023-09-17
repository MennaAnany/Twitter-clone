import styled from "styled-components";
import { FiMessageSquare, FiRepeat, FiHeart, FiShare } from "react-icons/fi";
import { Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

export const Tweett = styled.div`
  display: flex;
  background-color: transparent;
  align-items: flex-start;
`;
export const TweetLeft = styled.div`
  cursor: pointer;

  img {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    margin-right: 1rem;
  }
`;

export const TweetRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const Paragraph = styled.div`
  width: auto;
`;
export const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 2rem;
  gap: 10rem;
  svg {
    color: ${({ theme }) => theme.colors.textSecondry};
    cursor: pointer;
    font-size: 2rem;
  }

  @media (max-width: 700px) {
    gap: 6rem;
    svg {
      font-size: 1.4rem;
    }
  }
`;
export const Comment = styled(FiMessageSquare)`
  padding: 0.7rem;
  font-size: 0.2rem;
  transition: all 0.3s;
  &:hover {
    color: #1da1f2;
    background-color: rgba(29, 161, 242, 0.07);
    border-radius: 50%;
  }
`;
export const Retweet = styled(FiRepeat)`
  padding: 0.7rem;

  transition: all 0.3s;
  &:hover {
    color: #17bf63;
    background-color: rgba(23, 191, 99, 0.07);
    border-radius: 50%;
  }
`;
export const Heart = styled(FiHeart)`
  padding: 0.7rem;
  transition: all 0.3s;
  &:hover {
    color: #e0245e;
    background-color: rgba(224, 36, 94, 0.07);
    border-radius: 50%;
  }
`;
export const Share = styled(FiShare)`
  padding: 0.7rem;
  transition: all 0.3s;
  &:hover {
    color: #1da1f2;
    background-color: rgba(29, 161, 242, 0.07);
    border-radius: 50%;
  }
`;

export const Image = styled.div`
  width: auto;
  height: 30rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 1rem;
  margin-top: 2rem;
`;

export const P = styled.p`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 700;
  font-size: 1.6rem;
  font-family: "Roboto";
  text-decoration: none;

  @media (max-width: 700px) {
    font-size: 1.3rem;
  }
`;
export const Span = styled.span`
  color: ${({ theme }) => theme.colors.textSecondry};
  font-weight: 400;
  margin-left: 0.5rem;
`;

export const Links = styled(Link)`
  text-decoration: none;
`;
export const Div = styled.div`
  transition: all 0.3s;
  color: ${({ theme }) => theme.colors.textSecondry};
  display: flex;
  background-color: transparent;
  align-items: flex-start;
  padding: 1.2rem;
  border-bottom: 1px solid rgba(204, 204, 204, 0.2);

  &:hover {
    background-color: ${({ theme }) => theme.colors.bgHover};
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-top: 1.4rem;
  font-size: 1.6rem;
  font-family: "Roboto";
  text-decoration: none;

  @media (max-width: 700px) {
    font-size: 1.3rem;
  }
`;

export const Spinner = styled(CircularProgress)`
  margin-left: 28rem;
  margin-top: 20rem;
  border-radius: 50%;
`;

export const Spinnerr = styled(CircularProgress)`
  margin-left: 90rem;
  margin-top: 10rem;
  border-radius: 50%;
`;
