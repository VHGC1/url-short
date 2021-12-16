import React from "react";
import useMedia from "../../Hooks/useMedia";
import MobileNavBar from "./MobileNavBar";
import NavBar from "./NavBar";

const Header = () => {
  const mobile = useMedia('(max-width: 40rem)')
  
  return (
    <>
      {mobile ? <MobileNavBar /> :<NavBar />}
    </>
  );
};

export default Header;
