import styled from "styled-components";
import Bg from "../../Assets/illustration-working.svg";
import { SignUpButton } from "../Header/NavBar.styled";

export const Section = styled("section")`
  display: flex;
  height: calc(100vh - 5rem);
  background: url("${Bg}") no-repeat right;
  margin-top: 1rem;

  @media (max-width: 40rem) {
    background: none;
    margin-bottom: 15rem;
  }
`;

export const Container = styled("div")`
  display: grid;
  grid-template-columns: 1fr 0.9fr;
  align-items: center;

  @media (max-width: 50rem) {
    grid-template-columns: none;
    text-align: center;
  }

  @media (max-width: 40rem) {
    & {
      display: flex;
      flex-direction: column;
      text-align: center;
    }
  }
`;

export const TextWrapper = styled("div")`
  h1 {
    font-size: 4rem;
  }

  p {
    color: hsl(0, 0%, 75%);
  }

  @media (max-width: 50rem) {
    & {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    & p {
      text-shadow: 0 0 2rem black;
    }
  }
`;

export const HomeButton = styled(SignUpButton)`
  margin: 1rem 0;
  font-size: 1rem;
`;
