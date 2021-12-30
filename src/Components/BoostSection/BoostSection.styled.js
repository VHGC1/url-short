import styled from "styled-components";
import Bg from "../../Assets/bg-shorten-desktop.svg";
import { Button } from "../Button.styled";

export const Section = styled("section")`
  background: #3b3054 url("${Bg}") no-repeat center;
  background-size: cover;
`;

export const TextWrapper = styled("div")`
  text-align: center;
  padding: 100px 0;

  & h1 {
    color: #fff;
    margin-bottom: 1rem;
  }
`;

export const GetStartedButton = styled(Button)``;
