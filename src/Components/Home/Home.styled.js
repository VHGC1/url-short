import styled from "styled-components";
import Bg from "../../Assets/illustration-working.svg";
import { SignUpButton } from "../Header/NavBar.styled";

export const Section = styled("section")`
  height: 90vh;
  background: url("${Bg}") no-repeat top right;
  padding: 100px;
  margin-top: 1rem;
`;

export const Container = styled("div")`
  display: grid;
  grid-template-columns: 1fr 0.9fr;
  align-items: center;
`;

export const TextWrapper = styled("div")`
  h1 {
    font-size: 4rem;
  }
  
  p {
    color: hsl(0, 0%, 75%);
  }
`;

export const HomeButton = styled(SignUpButton)`
  margin: 1rem 0;
  font-size: 1rem;
`;
