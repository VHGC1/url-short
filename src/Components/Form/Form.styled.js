import styled from "styled-components";
import Bg from "../../Assets/bg-shorten-desktop.svg";
import { SignUpButton } from "../Header/NavBar.styled";

export const Section = styled("section")`
  background: linear-gradient(transparent 50%, #f0f1f6 50%) no-repeat;
`;

export const FormUrl = styled("form")`
  background: #3b3054 url("${Bg}");
  padding: 2.5rem;
  border-radius: 0.5rem;
`;

export const FormSubContainer = styled("div")`
  display: flex;
`

export const InputContainer = styled("div")`
  flex: 1;
`

export const Input = styled("input")`
  padding: 0.5rem 1.5rem;
  border-radius: 0.4rem;
  flex: 1;
  font-size: 18px;
  width: 100%;
`;

export const ShortenButton = styled(SignUpButton)`
  border-radius: 0.4rem;
  margin-left: 1rem;
`;

export const Error = styled("p")`
  position: absolute;
`
