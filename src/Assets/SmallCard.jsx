import React from 'react'
import img from "../Images/img.png";
import Button from './Button';
import Off from './Off';

const SmallCard = () => {
  return (
    <div>
            <div className="cardMainSmall bg-white w-[333px] h-[425px]   rounded-md p-6 flex flex-col      ">
                <div className="images w-[141px] h-[103px]        m-auto  "><img src={img} alt="img" /></div>
                <div className="offCont flex gap-4"> <Off off="20% Off" /> <Off off="Limited time " /> </div>
                <div className="cardName text-[16px] text-[#626E79] text-center  leading-[24px] py-3 ">Webbuilder 1</div>
                <div className="text-[16px] text-[#626E79] ">Computer  Modern clasic with wix support</div>
                <div className="smallCardPrice flex items-center gap-3">
                    <div className="newPrice text-[20px] text-[#5C6874] ">$39.96</div>
                    <div className="oldPrice text-[16px] text-[#9FA9B3]     ">$49.96</div>
                    <div className="discount text-[13px] text-[#EF4C5D]">(20% Off)</div>
                </div>

                <Button val="View Deal " />
            </div>        
    </div>
  )
}

export default SmallCard
