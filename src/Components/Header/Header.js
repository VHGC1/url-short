import React from "react";
import useMedia from "../../Hooks/useMedia";
import MobileNavBar from "./MobileNavBar";
import NavBar from "./NavBar";

const Header = () => {
  const mobile = useMedia('(max-width: 40rem)')
  
  return (
    <header>
      {mobile ? <MobileNavBar /> :<NavBar />}
    </header>
  );
};

export default Header;
