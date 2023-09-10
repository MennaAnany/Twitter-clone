import styled from "styled-components";

export const Cover = styled.div`
  input {
    display: none;
  }
  img {
    width: 100%;
  }
`;

export const Photo = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  padding: 0.5rem;
  height: 4rem;
  input {
    display: none;
  }
  @media (max-width: 700px) {
    height: 1.5rem;
  }
`;

export const Image = styled.div`
  img {
    width: 14rem;
    height: 14rem;
    border-radius: 50%;
    position: absolute;
    top: -10rem;
    border: 5px solid #555;
    left: 0.5rem;

    @media (max-width: 700px) {
      width: 10rem;
      height: 10rem;
      top: -8rem;
    }
  }
`;

export const Info = styled.div`
  padding: 1.7rem;
`;

export const Label = styled.div`
  position: relative;
`;
export const ImageIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  color: #fff;
`;

export const ImageIcon2 = styled.div`
  position: absolute;
  left: 9rem;
  transform: translate(-50%, -90%);
  z-index: 5;
  font-size: 3rem;
  color: #fff;
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin-top: 1.5rem;
`;

export const P = styled.p`
  color: ${(props) =>
    props.secondary
      ? props.theme.colors.textSecondry
      : props.theme.colors.textPrimary};

  font-size: ${(props) => (props.secondary ? "1.5rem" : "2rem")};
  font-weight: ${(props) => (props.secondary ? "400" : "700")};
  margin-top: ${(props) => (props.secondary ? "0.5rem" : "")};

  @media (max-width: 700px) {
    font-size: ${(props) => (props.secondary ? "1.2rem" : "1.7rem")};
  }
`;

export const Button = styled.button`
  border: 1px solid ${({ theme }) => theme.themeColors.color};
  background: ${(props) =>
    props.main ? "transparent" : props.theme.themeColors.color};
  transition: all 0.3s;
  border-radius: 3rem;
  padding: 0.8rem 1.8rem;
  color: ${(props) =>
    props.trans
      ? props.theme.themeColors.color
      : props.theme.colors.textPrimary};
  cursor: pointer;
  font-weight: 900;
  margin-right: ${(props) => (props.margin ? "1.5rem" : "0.5rem")};
  &:hover {
    background: ${({ theme }) => theme.themeColors.hover};
  }

  @media (max-width: 700px) {
    height: 4rem;
    margin-right: 1rem;
  }

  @media (max-width: 600px) {
    height: 4rem;
    margin-right: 1rem;
  }
`;

export const Bio = styled.p`
  color: ${(props) => props.theme.colors.textPrimary};
  font-size: 1.6rem;
  font-weight: 500;
  margin-top: 1rem;

  @media (max-width: 700px) {
    font-size: 1.3rem;
  }
`;

export const Input = styled.input`
  background-color: ${(props) => props.theme.colors.bgSecondry};
  border: none;
  margin-bottom: 1.7rem;
  padding: 1.4rem;
  outline: none;
  font-size: 1.8rem;
  color: ${(props) => props.theme.colors.textPrimary};
  border-bottom: 1px solid ${(props) => props.theme.colors.textSecondry};
`;
