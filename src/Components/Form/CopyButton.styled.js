import styled, { css } from "styled-components";
import { SignUpButton } from "../Header/NavBar.styled";

export const Button = styled(SignUpButton)`
  border-radius: 0.2rem;
  margin-left: 1rem;
  ${({ copied }) =>
    copied &&
    css`
      background-color: #3b3054;
      &:hover,
      &:focus {
        background-color: #4c4068;
      }
    `}

  @media (max-width: 40rem) {
    & {
      margin: 0;
      align-self: center;
      width: 100%;
      margin: 0.5rem 0;
    }
  }
`;
