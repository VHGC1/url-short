import styled from "styled-components";

export const WrapperNavBar = styled("nav")`
  display: flex;
  align-items: center;
  height: 5rem;
` 

export const SvgWrapper = styled("div")`
  margin-right: 3rem;

  svg {
    margin-top: 9px;
  }
`

export const NavItems = styled("ul")`
  display: flex;
  flex: 1;
  
  li {
    padding: 0 5px;
    font-weight: bold;
    color: hsl(0, 0%, 75%);
  }

  li:hover {
    color: #000;
  }
`

export const NavButtonsWrapper = styled(NavItems)`
  flex: none;
  align-items: center;
`
