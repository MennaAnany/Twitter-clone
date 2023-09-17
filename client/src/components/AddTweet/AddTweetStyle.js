import styled from "styled-components";
import { MdGif } from "react-icons/md";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { TextareaAutosize } from "@material-ui/core";
import { FiImage, FiSmile, FiCalendar } from "react-icons/fi";

export const Tweet = styled.div(
  ({ theme }) => `
  display: flex;
  border-bottom: 12px solid rgba(204, 204, 204, 0.2);
  padding: 1.4rem;
  color: ${theme.colors.textPrimary};

  input {
    display: none;
  }
`
);

export const TweetLeft = styled.div`
  margin-right: 1rem;
`;

export const TweetRight = styled.div`
  width: 100%;
`;

export const UserImg = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
`;
export const Image = styled.div`
  width: 10rem;
  height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  img {
    width: 10rem;
    height: 8rem;
  }
`;

export const TweetBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const TweetIcons = styled.div`
  display: flex;
  align-items: center;
`;

export const MdGifNew = styled(MdGif)`
  border: 1px solid;
  color: ${({ theme }) => theme.themeColors.color};
  border-radius: 3px;
`;

export const FiImageNew = styled(FiImage)`
  color: ${({ theme }) => theme.themeColors.color};
`;
export const FiSmileNew = styled(FiSmile)`
  color: ${({ theme }) => theme.themeColors.color};
`;
export const FiCalendarNew = styled(FiCalendar)`
  color: ${({ theme }) => theme.themeColors.color};
`;

export const RiBarChartHorizontalLine2 = styled(RiBarChartHorizontalLine)`
  border-left: 1px solid;
  color: ${({ theme }) => theme.themeColors.color};
`;

export const TweetButton = styled.button`
  color: #fff;
  background-color: ${({ theme }) => theme.themeColors.color};
  border: none;
  outline: none;
  padding: 1rem 1.5rem;
  border-radius: 3rem;
  font-weight: 700;
  font-size: 1.6rem;
  cursor: pointer;
  &:disabled {
    opacity: 0.3;
  }
  @media (max-width: 700px) {
    font-size: 1.2rem;
  }
`;
export const TextArea = styled(TextareaAutosize)`
  color: ${({ theme }) => theme.colors.textPrimary};
  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondry};
  }
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 2rem;
  padding: 1.5rem 0;
  font-family: inherit;
  resize: none;
  overflow: hidden;

  @media (max-width: 700px) {
    font-size: 1.5rem;
  }
`;

export const IconButton = styled.div`
  padding: 0.8rem;
  font-size: 2.3rem;
  display: flex;
  transition: all 0.5s;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.themeColors.hover};
    border-radius: 50%;
  }
  @media (max-width: 700px) {
    font-size: 1.8rem;
  }
`;
