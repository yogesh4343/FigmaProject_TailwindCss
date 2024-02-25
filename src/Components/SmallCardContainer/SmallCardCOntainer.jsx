import React from 'react'
import SmallCard from '../../Assets/SmallCard';

const SmallCardCOntainer = () => {
  return (
    <div className="bg-[#FBFCFD]          ">
        <div className="smallContainerHeading max-w-[90%] sm:max-w-[80%]    m-auto ">
            <p className="heading text-[32px]     text-[#2C384A]  py-7     ">Related deals you might like for</p>


            <div className="smallBoxContainer flex justify-center gap-6        flex-wrap    ">
                <SmallCard />
                <SmallCard />
                <SmallCard />
            </div>
        </div>
    </div>
  )
}

export default SmallCardCOntainer
