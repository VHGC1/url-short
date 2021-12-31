import React from "react";
import {FooterWrapper, IconsWrapper, OptionsWrapper, Wrapper} from "./Footer.styled" 
import {ReactComponent as Logo} from "../../Assets/logo.svg"
import {ReactComponent as Facebook} from "../../Assets/icon-facebook.svg"
import {ReactComponent as Twitter} from "../../Assets/icon-twitter.svg"
import {ReactComponent as Pinterest} from "../../Assets/icon-pinterest.svg"
import {ReactComponent as Instagram} from "../../Assets/icon-instagram.svg"


const Footer = () => {
  return (
    <FooterWrapper>
      <Wrapper className="container">
        <Logo />
        <Wrapper>
          <OptionsWrapper>
            <span>Features</span>
            <ul>
              <li>Link Shortening</li>
              <li>Branded Links</li>
              <li>Analytics</li>
            </ul>
          </OptionsWrapper>
          <OptionsWrapper>
            <span>Resources</span>
            <ul>
              <li>Blog</li>
              <li>Developers</li>
              <li>Support</li>
            </ul>
          </OptionsWrapper>
          <OptionsWrapper>
            <span>Company</span>
            <ul>
              <li>About</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </OptionsWrapper>
        </Wrapper>
        <IconsWrapper>
          <Facebook />
          <Twitter />
          <Pinterest />
          <Instagram />
        </IconsWrapper>
      </Wrapper>
    </FooterWrapper>
  );
};

export default Footer;
