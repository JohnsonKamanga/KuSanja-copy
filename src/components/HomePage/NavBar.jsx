import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo-no-background.png";
import { useEffect, useState } from "react";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";

function NavBar() {
  const [isSingedIn, setIsSignedIn] = useState(true);
  const [showDropDown, setShowDropDown] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleDropDown = () => {
    const navBar = document.getElementById("navBar");
    if (navBar) {
      if (showDropDown) {
        navBar.style.height = "56px";
      } else {
        navBar.style.height = "270px";
      }
    }
    setShowDropDown(!showDropDown);
  };

  useEffect(()=>{
    window.addEventListener("resize", () => {
      const element = document.getElementById("navBar");
      setWindowWidth(window.innerWidth);
      if(element && showDropDown){
      if(window.innerWidth > 1023){
      element.style.height = "56px";
      setShowDropDown(false);
      }
    }
    });
    return window.removeEventListener("resize", () => {
      console.log("removing resize listener");
    });
  },[windowWidth])

  return (
    <div
      id="navBar"
      className="flex flex-col lg:flex-row justify-between w-full overflow-hidden transition-all h-14 bg-white items-center text-center font-[200] bg-opacity-5 backdrop-blur-md sticky top-0 font-sora"
    >
      <div className="flex flex-col lg:flex-row w-full lg:w-fit items-center">
        <div className="h-[56px] w-full lg:w-fit flex items-center justify-between mr-5">
          <img className="h-full ml-5 lg:ml-0" src={Logo} />
          <div
            onClick={handleDropDown}
            className="block lg:hidden cursor-pointer"
          >
            {showDropDown ? <Cross1Icon /> : <HamburgerMenuIcon />}
          </div>
        </div>
        <nav className="flex flex-col lg:flex-row p-1">
          <div className="mx-2">
            <NavLink to="/Home">Home</NavLink>
          </div>
          <div className="mx-2">Features</div>
          <div className="mx-2">Team</div>
          <div className="mx-2">FAQ</div>
          <div className="mx-2">Contact</div>
          {isSingedIn && <div className="mx-2">Dashboard</div>}
        </nav>
      </div>{
        !isSingedIn &&
      <div className="flex flex-col lg:flex-row text-sm justify-end lg:mr-2">
        <div className="mb-1 lg:my-0 lg:mx-4 p-1 bg-[#d5b263] rounded-[4px] text-[#293040] font-semibold">
          Sign in
        </div>
        <div className="mt-1 mb-3 lg:mt-0 lg:mb-0 lg:mx-4 p-1 bg-[#d5b263] rounded-[4px] text-[#293040] font-semibold">
          Sign up
        </div>
      </div>}
    </div>
  );
}

export default NavBar;
