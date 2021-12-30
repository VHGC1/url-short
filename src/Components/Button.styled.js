import styled from "styled-components"

export const Button = styled("button")`
  background-color: 	#2acfcf;
  padding: 10px 20px;
  border: none;
  border-radius: 2rem;
  font-family: inherit;
  font-weight: bold;
  color: #fff;
  transition: .2s;

  &:hover,
  &:focus {
    background-color: 	#97E4E4;
  }

  &:disabled {
    cursor: wait;
    opacity: 0.5;
  }
`