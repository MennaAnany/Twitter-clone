import styled from "styled-components";

export const Background = styled.span`
  height: 6rem;
  display: flex;
  @media (max-width: 1024px) {
    height: 4rem;
  }
`;
export const Input = styled.select`
  display: none;
`;

export const Name = styled.p`
  width: 75%;
  font-family: "Roboto", sans-serif;
  margin-left: 1.8rem;
  font-size: 1.8rem;

  @media (max-width: 1024px) {
    font-size: 1.4rem;
  }
`;

export const Label = styled.button`
  display: flex;
  align-items: center;
  padding: 1rem;
  min-width: 18rem;
  width: 100%;
  cursor: pointer;
  position: relative;
  font-weight: 500;

  @media (max-width: 1024px) {
    width: 25rem;
    height: 1.8rem;
    left: 1.5rem;
  }

  &:focus {
    border: 2.5px solid ${({ theme }) => theme.themeColors.color};
  }

  ${({ id }) => {
    if (id === "LIGHT_MODE") {
      return "background-color: rgb(255, 255, 255); color: rgb(20, 23, 26);";
    } else if (id === "DIM_MODE") {
      return "background-color: rgb(21, 32, 43); color: rgb(255, 255, 255);";
    } else if (id === "DARK_MODE") {
      return "background-color: rgb(0, 0, 0); color: rgb(217, 217, 217);";
    } else {
      return "";
    }
  }}

  border-radius: 0.5rem;
  border: 2px solid rgba(204, 204, 204, 0.1);
`;

export const Span = styled.button`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  display: inline-block;
  transition: all 0.1s;
  background-color: "trasnparent";
  border: 2.5px solid rgba(204, 204, 204, 0.2);

  @media (max-width: 1024px) {
    position: absolute;
    top: -0.5rem;
    height: 1.5rem;
    width: 1.5rem;
  }
`;
