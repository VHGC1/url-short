import styled from "styled-components";
import Bg from "../../Assets/bg-shorten-desktop.svg";

export const Section = styled("section")`
  background: linear-gradient(transparent 50%, rgb(191, 191, 191) 50%) no-repeat;
`

export const FormUrl = styled("form")`
  background: hsl(257, 27%, 26%) url("${Bg}");;
  padding: 50px;
  border-radius: .5rem;

  & div {
    display: flex;
  }
`