import styled from "styled-components";
import {SignUpButton} from "../Header/NavBar.styled"

export const UrlShort = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  width: 100%;
  padding: .8rem 1.5rem;
  border-radius: 0.2rem;
  margin: .4rem 0;
  font-size: 16px;

  & div p:last-of-type {
    color: hsl(180, 66%, 49%);
  }
`

export const CopyButton = styled(SignUpButton)`
  border-radius: .2rem;
  margin-left: 1rem;
`