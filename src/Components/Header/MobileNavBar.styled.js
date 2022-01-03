import styled from "styled-components";
import { Button } from "../Button.styled";
import { WrapperNavBar } from "./NavBar.styled";

export const WrapperMobileNavBar = styled(WrapperNavBar)`
  justify-content: space-between;

  svg {
    margin-top: 9px;
  }
`;

export const MobileButton = styled("button")`
  background: transparent;
  border-radius: 0.2rem;
  height: 40px;
  width: 40px;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  transition: 0.1s;

  &::after {
    content: "";
    display: block;
    width: 1.2rem;
    height: 2px;
    border-radius: 2px;
    background: currentColor;
    box-shadow: 0 6px currentColor, 0 -6px currentColor;
    transition: 0.2s;
  }
`;

export const ContainerMobileMenu = styled("div")`
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 100;
`;

export const WrapperMobileMenu = styled("div")`
  position: absolute;
  width: 100%;
  padding: 1rem;
  color: #fff;
  font-weight: bold;
`;

export const MenuMobileContainer = styled("div")`
  background-color: #3b3054;
  text-align: center;
  border-radius: 0.5rem;
  padding: 1.5rem 2rem;
`;

export const List = styled("ul")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &::after {
    content: "";
    width: 100%;
    height: 0.5px;
    background: #9e9aa7;
  }
`;

export const ListItem = styled("li")`
  padding: 1.25rem 0;
`;

export const MobileSignUpButton = styled(Button)`
  width: 100%;
`;
