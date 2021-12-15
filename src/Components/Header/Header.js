import React from "react";
import {ReactComponent as Logo} from "../../Assets/logo.svg"
import { NavBar, NavItems, NavButtonsWrapper, SvgWrapper, SignUpButton } from "./Header.styled";

const Header = () => {
  return (
    <header>
      <NavBar>
        <SvgWrapper>
          <li>
            <Logo/>
          </li>
        </SvgWrapper>

        <NavItems>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </NavItems>
        
        <NavButtonsWrapper nada="true" >
          <li>
            <button>Login</button>
          </li>
          <li>
            <SignUpButton>Sign Up</SignUpButton>
          </li>
        </NavButtonsWrapper>
      </NavBar>
    </header>
  );
};

export default Header;
