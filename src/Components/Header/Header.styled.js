import styled from "styled-components";

export const NavBar = styled("nav")`
  display: flex;
  align-items: center;
  height: 4rem;
` 

export const SvgWrapper = styled("div")`
  margin-right: 3rem;

  svg {
    margin-top: 5px;
  }
`

export const NavItems = styled("ul")`
  display: flex;
  flex: 1;
  
  li {
    padding: 0 5px;
    font-weight: bold;
  }
`

export const NavButtonsWrapper = styled(NavItems)`
  flex: none;
  align-items: center;
  /* ${(props) => props.nada === "true" ? "background-color: #000;" : ""} */
`

export const SignUpButton = styled("button")`
  background-color: hsl(180, 66%, 49%);
  padding: 10px 20px;
  border: none;
  border-radius: 2rem;
  font-family: inherit;
  font-weight: bold;
  color: #fff;
`