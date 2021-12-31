import styled from "styled-components";
import { Button } from "../Button.styled";

export const Section = styled("section")`
  display: flex;
  height: calc(100vh - 5rem);
  margin-top: 1rem;
  overflow: hidden;
  
  @media (max-width: 40rem) {
    background: none;
    height: 100%;
    margin-bottom: 5rem;
  }
`;

export const Container = styled("div")`
  position: relative;
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
  z-index: 1;

  h1 {
    font-size: 4rem;
  }

  p {
    color: hsl(0, 0%, 75%);
    text-shadow: none;
  }

  @media (max-width: 50rem) {
    & {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    & h1 {
      font-size: 2.5rem;
    }

    & p {
      text-shadow: 0 0 2rem #fff;
    }
  }
`;

export const HomeButton = styled(Button)`
  margin: 1rem 0;
  font-size: 1rem;
`;

export const Img = styled("img")`
  position: absolute;
  left: 30rem;

  @media (max-width: 50rem) {
    & {
      left: 20rem;
    }
  }
`
