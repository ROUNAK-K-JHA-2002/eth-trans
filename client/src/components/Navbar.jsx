import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";

function Navbar() {
  const [mobileMenuHeight, setMobileMenuHeight] = useState(0);
  const handleOpenMenu = () => {
    if (mobileMenuHeight == 0) {
      setMobileMenuHeight(260);
    } else {
      setMobileMenuHeight(0);
    }
  };

  const NavItems = ({ title }) => {
    return <button class="text-xl  py-2 px-4 rounded-full">{title}</button>;
  };

  return (
    <div className="text-white w-full flex flex-col lg:flex-row lg:justify-center justify-between items-center">
      <div className=" lg:py-5 flex flex-row lg:w-3/6 w-screen">
        <img src="/assets/logo.png" className="w-20" alt="" />
        <p className=" flex-1 mx-4 py-3 lg:text-5xl text-3xl">Eth-Trans</p>
        <p className="lg:hidden py-5 px-2" onClick={handleOpenMenu}>
          <BiMenuAltRight size={40} />{" "}
        </p>
      </div>
      <div
        className="w-auto overflow-hidden lg:overflow-visible"
        
      >
        <div className=" flex lg:flex-row flex-col my-1 py-5">
          {["MarketPlace", "Explore", "Tutorials", "Wallets"].map(
            (ele, index) => {
             return ( <NavItems title={ele} key={ele + index} />);
            }
          )}

          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
