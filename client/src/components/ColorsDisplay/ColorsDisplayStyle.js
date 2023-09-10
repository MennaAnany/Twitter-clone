import styled from "styled-components";
import { FiCheck } from "react-icons/fi";
export const Colors = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1024px) {
    width: 8rem;
    margin-top: 1rem;
  }
`;
export const Label = styled.div`
  cursor: pointer;
  position: relative;
`;

export const Input = styled.div`
  display: none;
`;
export const Image = styled.div`
  margin-top: 0.5rem;
  width: 2.5rem;
  height: 2.5rem;

  @media (max-width: 1024px) {
    width: 2rem;
    height: 2rem;
  }
`;
export const Span = styled.button`
  height: 4.5rem;
  width: 4.5rem;
  border: none;
  cursor: pointer;
  background-color: ${({ id }) => {
    if (id === "blue") {
      return "rgb(29, 161, 242)";
    } else if (id === "yellow") {
      return "rgb(255, 172, 51)";
    } else if (id === "pink") {
      return "rgb(224, 36, 94)";
    } else if (id === "purple") {
      return "rgb(121, 75, 196)";
    } else if (id === "orange") {
      return "rgb(244, 93, 34)";
    } else if (id === "green") {
      return "rgb(23, 191, 99)";
    } else {
      return "";
    }
  }};
  border-radius: 50%;
  display: inline-block;
  transition: all 0.1s;

  &:hover {
    transform: scale(1.1);
  }

  &:focus {
    transform: scale(0.9);
  }
  @media (max-width: 1024px) {
    height: 3rem;
    width: 3rem;
  }
`;
export const Icon = styled(FiCheck)`
  position: absolute;
  font-size: 3rem;
  top: 0.8rem;
  left: 0.8rem;
  color: rgb(255, 255, 255);
`;
