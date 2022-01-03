import React from "react";
import { ReactComponent as Logo } from "../../Assets/logo.svg";
import { Button } from "../Button.styled";
import {
  WrapperNavBar,
  NavItems,
  NavButtonsWrapper,
  SvgWrapper,
} from "./NavBar.styled";

const NavBar = () => {
  return (
    <>
      <WrapperNavBar className="container">
        <SvgWrapper>
          <Logo />
        </SvgWrapper>

        <NavItems>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </NavItems>

        <NavButtonsWrapper nada="true">
          <li>Login</li>
          <li>
            <Button>Sign Up</Button>
          </li>
        </NavButtonsWrapper>
      </WrapperNavBar>
    </>
  );
};

export default NavBar;
