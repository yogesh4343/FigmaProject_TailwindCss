import React from 'react'

const Footer = () => {
  return (
    <div className="footerCover bg-[#212731] text-white font-[Inter] ">
    <div className="mainFooter flex flex-wrap justify-between max-w-[90%]  sm:max-w-[80%]  m-auto py-12 gap-4  ">

      <div className="leftFooter ">
        <div className="leftFooterHeading text-[16px] mb-3 ">Categories</div>
        <div className="footerPoints text-[13px] text-[#B6BDC4] mb-3  ">Web Builder</div>
        <div className="footerPoints  text-[13px] text-[#B6BDC4] mb-3   ">Hosting</div>
        <div className="footerPoints  text-[13px] text-[#B6BDC4] mb-3  ">Data Center</div>
        <div className="footerPoints  text-[13px] text-[#B6BDC4] mb-3  ">Robotic-Automation</div>
      </div>

      <div className="middleFooter">
      <div className="leftFooterHeading  text-[16px]  mb-3  ">Contact</div>
      <div className="footerPoints  text-[13px] text-[#B6BDC4] mb-3   ">Contact</div>
      <div className="footerPoints  text-[13px] text-[#B6BDC4] mb-3  ">Privacy Policy</div>
      <div className="footerPoints  text-[13px] text-[#B6BDC4] mb-3 ">Terms Of Service</div>
      <div className="footerPoints  text-[13px] text-[#B6BDC4] mb-3 ">Categories</div>
      <div className="footerPoints  text-[13px] text-[#B6BDC4] mb-3 ">About</div>
      </div>
      
        <div className="rightFooter    text-white text-[13px]">
            <select className=" bg-[#212731]  mb-3  " >
                <option value="">United State</option>
                <option value=""> State 1 </option>
                <option value=""> State 2</option>
            </select>
        </div>
    </div>
    </div>
  )
}

export default Footer
