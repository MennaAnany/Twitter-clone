import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai";
import { MdNotifications } from "react-icons/md";

export const NotificationItemsLeft = styled.div`
  margin-right: 0.8rem;
  svg {
    font-size: 3.1rem;
  }
`;
export const Heart = styled(AiFillHeart)`
  color: #e0245e;
`;
export const Notification = styled(MdNotifications)`
  color: #1da1f2;
`;

export const NotificationItemsRight = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;
export const Image = styled.div`
  margin-bottom: 0.8rem;
  img {
    width: 4.6rem;
    height: 4.6rem;
    border-radius: 50%;
    margin-right: 1rem;
  }
`;

export const Title = styled.div`
  margin-bottom: 0.8rem;
`;

export const Tweet = styled.div`
  margin-bottom: 0.5rem;
`;

export const Div = styled.div`
  background-color: transparent;
  &:hover {
    background-color: ${({ theme }) => theme.colors.bgHover};
  }
  padding: 1rem 1.5rem;
  transition: all 0.4s;
  display: flex;
`;
export const P = styled.p`
  color: ${(props) =>
    props.secondry
      ? props.theme.colors.textSecondry
      : props.theme.colors.textPrimary};
  font-size: 1.3rem;
  margin-bottom: 0.5rem;

  @media (max-width: 1024px) {
    font-size: 1rem;
  }
`;
export const Span = styled.span`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 1.6rem;
  font-weight: 700;
  @media (max-width: 1024px) {
    font-size: 1.3rem;
  }
`;
export const Spann = styled.span`
  color: ${({ theme }) => theme.colors.textSecondry};
  font-size: 1.3rem;
  @media (max-width: 1024px) {
    font-size: 1rem;
  }
`;

export const Border = styled.div`
  border-bottom: 1px solid rgba(204, 204, 204, 0.2);
`;
