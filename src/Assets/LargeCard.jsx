import React from 'react'
import { FaStar } from "react-icons/fa";
import { IoTrophyOutline } from "react-icons/io5";
import { FaRegCircleCheck } from "react-icons/fa6";
import img from "../Images/img.png"
import Button from './Button';
import Off from './Off';

const LargeCard = ({ id, tag, Trophy, off, paraUpper1, paraUpper2, middleHeading, paraLower, rating, ratingVal, imageName, highlightOne, highlightTwo, highlightThree, one, two, three }) => {
    return (
        <>
            <div className=" relative flex-col sm:flex-row CardMain  flex gap-4 bg-[#fff] ">
                <div className="left w-[45%]  m-auto ">
                    <img className="w-[141px]    mb-5      h-[103px] m-auto " src={img} alt="img" />
                    <p className="cont text-center text-[13px]  text-[#626E79]">{imageName}</p>
                </div>

                <div className="middle w-full flex  flex-col gap-3 mt-8 mb-4">
                    <p className="paraUpper text-[16px]        text-[#4B5665]">
                        <strong>{paraUpper1}</strong> {paraUpper2}
                    </p>


                    {off ? <Off off={off} /> : null}

                    <div className="middleHeading text-[16px] text-[#2C384A] font-[700] ">
                        {middleHeading}
                    </div>


                    {highlightOne ? <> <div className="docs ml-5 bg-[#FFF4ED]  p-2 rounded-md flex flex-col gap-3">
                        <div className="docsInner flex gap-3  rounded-[4px]">
                            <div className="rank  bg-[#FFFFFF] p-2 flex justify-center items-center h-[24px] text-[16px] text-[#1B88F4]"> <span className='rankSpan'>9.9</span></div>
                            <div className="rankName">{highlightOne}</div>
                        </div>

                        <div className="docsInner flex gap-3">
                            <div className="rank  bg-[#FFFFFF] p-2 flex justify-center items-center h-[24px] text-[16px] text-[#1B88F4]"> <span className='rankSpan'>9.9</span></div>
                            <div className="rankName">{highlightTwo}</div>
                        </div>

                        <div className="docsInner flex gap-3">
                            <div className="rank  bg-[#FFFFFF] p-2 flex justify-center items-center h-[24px] text-[16px] text-[#1B88F4]"> <span className='rankSpan'>9.9</span></div>
                            <div className="rankName">{highlightThree}</div>
                        </div>
                    </div>



                        <div className="useBox">
                            <p className="useBoxPara text-[16px] text-[#2C384A]">Why we love it</p>

                            <div className="points text-[15px]   text-[#4B5665]">
                                <div className="pointOne flex gap-3 items-center  "><FaRegCircleCheck />  {one} </div>
                            </div>
                            <div className="points text-[15px]   text-[#4B5665] ">
                                <div className="pointOne flex gap-3 items-center  "><FaRegCircleCheck />  {two}  </div>
                            </div>
                            <div className="points text-[15px]   text-[#4B5665]  ">
                                <div className="pointOne flex gap-3  items-center   "><FaRegCircleCheck />  {three}</div>
                            </div>
                        </div>
                    </>

                        : null}
                    {/* ==== */}
                    {paraLower ? <div className="paraLower text-[16px] text-[#4B5665] pl-5  ">
                        {paraLower}
                    </div> : null}

                    <div className="showMore text-[16px] text-[#1B88F4]">
                        Show more ⋎
                    </div>
                </div>


                <div className="right w-[30%] hidden  sm:flex flex-col gap-5 justify-between">
                    <div className="rightTopBox w-[135px] mx-auto bg-[#F3F9FF] flex justify-center flex-col       align-center text-center  rounded-b-[12px] p-4" >
                        <div className="num text-[32px] text-[#074786]">{rating}</div>
                        <div className="Exceptional text-[14px] text-[#074786]">{ratingVal}</div>
                        <div className="stars text-center  flex        justify-center">
                            <div className="star text-[#ffb80e]"><FaStar />  </div>
                            <div className="star  text-[#ffb80e]"><FaStar />  </div>
                            <div className="star  text-[#ffb80e]"><FaStar />  </div>
                            <div className="star  text-[#ffb80e]"><FaStar />  </div>
                            <div className="star  text-[#ffb80e]"><FaStar />  </div>
                        </div>
                    </div>

                    <Button />

                </div>
                <div className="id absolute top-[20px] left-[-20px] w-[44px] h-[44px] flex justify-center border-[1px] rounded-[50%] items-center text-center ">
                    {id}
                </div>

                {tag ? <div className="bestSeller absolute top-[-22px] flex justify-center items-center gap-3 bg-[#FF7724]            text-[#fff] p-1 rounded-tr-[8px] rounded-br-[8px]">
                    <div className="troffy"> {Trophy}  </div>
                    <div className="bestChoise">
                        {tag}
                    </div>
                </div> : null}
            </div>

        </>
    )
}

export default LargeCard
