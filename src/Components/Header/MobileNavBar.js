import React, { useState } from "react";
import { ReactComponent as Logo } from "../../Assets/logo.svg";
import {
  List,
  ListItem,
  MenuMobileContainer,
  MobileButton,
  MobileSignUpButton,
  WrapperMobileMenu,
  WrapperMobileNavBar,
} from "./MobileNavBar.styled";

const MobileNavBar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header>
      <WrapperMobileNavBar className="container">
        <div>
          <Logo />
        </div>

        <MobileButton onClick={() => setMobileMenu(!mobileMenu)} />
      </WrapperMobileNavBar>

      {mobileMenu && (
        <WrapperMobileMenu>
          <MenuMobileContainer>
            <List>
              <ListItem>Features</ListItem>
              <ListItem>Pricing</ListItem>
              <ListItem>Resources</ListItem>
            </List>
            <ul>
              <ListItem>Login</ListItem>
              <ListItem>
                <MobileSignUpButton>Sign Up</MobileSignUpButton>
              </ListItem>
            </ul>
          </MenuMobileContainer>
        </WrapperMobileMenu>
      )}
    </header>
  );
};

export default MobileNavBar;