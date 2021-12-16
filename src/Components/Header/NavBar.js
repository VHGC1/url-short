import React from "react";
import { ReactComponent as Logo } from "../../Assets/logo.svg";
import {
  WrapperNavBar,
  NavItems,
  NavButtonsWrapper,
  SvgWrapper,
  SignUpButton,
} from "./NavBar.styled";

const NavBar = () => {
  return (
    <header>
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
            <SignUpButton>Sign Up</SignUpButton>
          </li>
        </NavButtonsWrapper>
      </WrapperNavBar>
    </header>
  );
};

export default NavBar;
