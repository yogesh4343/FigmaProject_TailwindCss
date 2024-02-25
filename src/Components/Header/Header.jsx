import React from 'react'
import { CiCircleCheck } from "react-icons/ci";
import { CiCircleAlert } from "react-icons/ci";
import { FaGreaterThan } from "react-icons/fa";
import Dir from '../../Assets/Dir';
import Tools from '../../Assets/Tools';


const Header = () => {
  return (
    <div className="bg-[#FBFCFD] ">
        <div className="main max-w-[86%] md:max-w-[80%]  m-auto ">
            <div className="box ">
                <div className="heading text-[30px] md:text-[48px] text-[#2C384A]">Best Website builders in the US</div>
                <hr className="bg-[#E1E4E6]"/>

                <div className="lastUpdateBox flex py-5 justify-between flex-wrap gap-4 ">
                    <div className="leftUpdateBox flex gap-4  flex-wrap"> 
                    
                        <div className="date flex text-center items-center align-middle gap-2 text-[#4B5665] text-[14px] ">
                        <span className='span'><CiCircleCheck /></span>
                        <span>Last Updated - February 22, 2020</span>
                        </div>
                        <div className="advertising flex  text-center items-center align-middle  gap-2 text-[#4B5665] text-[14px] ">

                        <span className='span'> <CiCircleAlert /> </span>
                        <span>   Advertising Disclosure</span>
                        </div>
                     </div>
                    

                    <div className="rightUpdateBox text-[#4B5665] text-[14px]">
                        <div className="topRelative ">
                        <select>
                            <option >Top Relevant</option>
                            <option id="1">Option1</option>
                            <option id="2">Option2</option>
                        </select>
                        </div>
                    </div>
                </div>
                <hr className="bg-[#E1E4E6]"/>
            </div>



            {/* tools  */}

          <div className="tools  flex text-[#4B5665] text-[14px]  flex-wrap justify-center sm:justify-start">
          <Tools val="Tools" />
          <Tools val="AWS Builder" />
          <Tools val="Start Build" />
          <Tools val="Build Supplies" />
          <Tools val="Tooling" />
          <Tools val="BlueHosting" />
          </div>

        <div className="dir text-[13px] text-[#727D87] flex mb-12  flex-wrap">
        <div className="combine flex text-center items-center gap-2">
            <Dir val="Home"/>
                <span className="span"> <FaGreaterThan /> </span>
            </div>

            <div className="combine flex text-center items-center gap-2 ">
            <Dir val="Hosting for all"/>
                <span className="span"> <FaGreaterThan /> </span>
            </div>

            <div className="combine flex text-center items-center gap-2 ">
            <Dir val="Hosting"/>
                <span className="span"> <FaGreaterThan /> </span>
            </div>

            <div className="combine flex text-center items-center gap-2 ">
            <Dir val="Hosting 5"/>
                <span className="span"> <FaGreaterThan /> </span>
            </div>
            
                <Dir val="Hosting 6"/>
        </div>
            </div>
    </div>
  )
}

export default Header
