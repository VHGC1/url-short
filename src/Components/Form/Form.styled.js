import styled, { css } from "styled-components";
import Bg from "../../Assets/bg-shorten-desktop.svg";
import { Button } from "../Button.styled";

export const Section = styled("section")`
  background: linear-gradient(transparent 50%, #f0f1f6 50%) no-repeat;
`;

export const FormUrl = styled("form")`
  background: #3b3054 url("${Bg}");
  background-size: cover;
  padding: 2.5rem;
  border-radius: 0.5rem;
`;

export const FormSubContainer = styled("div")`
  display: flex;

  @media (max-width: 40rem) {
    flex-direction: column;
  }
`;

export const InputContainer = styled("div")`
  flex: 1;
`;

export const Input = styled("input")`
  padding: 0.5rem 1.5rem;
  border-radius: 0.4rem;
  flex: 1;
  font-size: 18px;
  width: 100%;
  ${({ error }) =>
    error &&
    css`
      border: 2px hsl(0, 100%, 74%) solid;
      &::-webkit-input-placeholder {
        color: hsl(0, 100%, 74%);
      }
    `}
`;

export const ShortenButton = styled(Button)`
  border-radius: 0.4rem;
  margin-left: 1rem;

  @media (max-width: 40rem) {
    margin: 2rem 0 0 0;
  }
`;

export const Error = styled("p")`
  position: absolute;
  color: hsl(0, 100%, 74%);
`;
