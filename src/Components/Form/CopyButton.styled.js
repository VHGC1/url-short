import styled, { css } from "styled-components";
import { Button } from "../Button.styled";

export const ButtonCopy = styled(Button)`
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
