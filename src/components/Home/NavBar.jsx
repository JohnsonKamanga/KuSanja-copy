import Logo from "../../assets/logo-no-background.png";
import { useEffect, useState } from "react";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { NavLink } from "react-router-dom";

function NavBar(props) {
  const homeRef = props.homeRef;
  const featuresRef = props.featuresRef;
  const aboutRef = props.aboutRef;
  const faqRef = props.faqRef;
  const activeRef = props.activeRef;
  const setActiveRef = props.setActiveRef;

  const [isSingedIn, setIsSignedIn] = useState(false);
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

  useEffect(() => {
    window.addEventListener("resize", () => {
      const element = document.getElementById("navBar");
      setWindowWidth(window.innerWidth);
      if (element && showDropDown) {
        if (window.innerWidth > 1023) {
          element.style.height = "56px";
          setShowDropDown(false);
        }
      }
    });
    return window.removeEventListener("resize", () => {
      console.log("removing resize listener");
    });
  }, [windowWidth, showDropDown]);

  return (
    <div
      id="navBar"
      className="flex flex-col lg:flex-row justify-between w-full overflow-hidden transition-all h-14 bg-white items-center text-center font-[200] bg-opacity-5 backdrop-blur-md fixed font-sora"
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
            <span
            className= {homeRef === activeRef ?
              "hover:cursor-pointer underline underline-offset-[5px] transition-all hover:text-[#d5b263]"
              :
              "hover:cursor-pointer transition-all hover:text-[#d5b263]"
            }
            onClick={()=>{
              homeRef.current?.scrollIntoView({behavior: 'smooth'});
              setActiveRef(homeRef);
            }
          }
            >
              Home
            </span>
          </div>
          <div className="mx-2">
            <span
            className= {featuresRef === activeRef ?
              "hover:cursor-pointer underline underline-offset-[5px] transition-all hover:text-[#d5b263]"
              :
              "hover:cursor-pointer transition-all hover:text-[#d5b263]"
            }
            onClick={()=>{
              featuresRef.current?.scrollIntoView({behavior: 'smooth'});
              setActiveRef(featuresRef);
            }
          }
            >
              Features
            </span>
          </div>
          <div className="mx-2">
            <span
            className= {aboutRef === activeRef ?
              "hover:cursor-pointer underline underline-offset-[5px] transition-all hover:text-[#d5b263]"
              :
              "hover:cursor-pointer transition-all hover:text-[#d5b263]"
            }
            onClick={()=>{
              aboutRef.current?.scrollIntoView({behavior: 'smooth'});
              setActiveRef(aboutRef);
            }
          }
            >
              About
            </span>
          </div>
          <div className="mx-2">
            <span
            className= {faqRef === activeRef ?
              "hover:cursor-pointer underline underline-offset-[5px] transition-all hover:text-[#d5b263]"
              :
              "hover:cursor-pointer transition-all hover:text-[#d5b263]"
            }
            onClick={()=>{
              faqRef.current?.scrollIntoView({behavior: 'smooth'});
              setActiveRef(faqRef);
            }
          }
            >
              FAQ
            </span>
          </div>
          {isSingedIn && <div className="mx-2">Dashboard</div>}
        </nav>
      </div>


      {!isSingedIn && (
        <div className="flex flex-col lg:flex-row text-sm justify-end lg:mr-2">

          <button className="mb-1 lg:my-0 lg:mx-4 p-1 bg-[#d5b263] rounded-[4px] text-[#293040] font-semibold">
          <NavLink to="/SignIn">
            Sign in
            </NavLink>
          </button>

          <button className="mt-1 mb-3 lg:mt-0 lg:mb-0 lg:mx-4 p-1 bg-[#d5b263] rounded-[4px] text-[#293040] font-semibold">
            <NavLink to="/SignUp">
            Sign up
            </NavLink>
          </button>

        </div>
      )}


    </div>
  );
}

export default NavBar;
