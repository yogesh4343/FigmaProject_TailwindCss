import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {

  const [hide, setHide] = useState(false);;

  const hideFunc = () => {
    if (hide === true) {
      setHide(false)
    } else {
      setHide(true)
    }
  };


  return (
   <div className="bg-[#212731] relative mb-3">
     <div className='mainNav flex max-w-[86%] md:max-w-[80%] m-auto h-[64px] justify-center'>
      <div className="mainHeader flex justify-around w-full items-center ">
        <div className="search flex justify-center h-[37px] relative ">
          <span className="absolute m-auto left-0 top-[20%]  "><CiSearch  className=" w-[24px] h-[24px]  "  /></span>
          <input type="" className=" rounded-md pl-[2rem]" />
        </div>
        <div className="options text-[#D1D6DA] text-[14px]  justify-center items-center gap-9 hidden md:flex" >
          <div className="span">Categories</div>
          <div className="span">Website Builders</div>
          <div className="span">Todays Deals</div>
        </div>
        <div className="hamBurger flex md:hidden text-white text-[2rem]" onClick={hideFunc}>
          <GiHamburgerMenu />
        </div>
      </div>


      {hide === true ? <div className="mainHeaderHide absolute top-[100%] bg-[black] text-white w-full text-center p-8 ">
        <div className="options flex justify-center gap-5 flex-col">
          <div className="span">Categories</div>
          <div className="span">Website Builders</div>
          <div className="span">Todays Deals</div>
        </div>
      </div> : null}
    </div>
   </div>
  )
}

export default NavBar
