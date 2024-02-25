import React from 'react'

const SignUp = () => {
  return (
    <div>
        <div className="signUp   m-auto flex-wrap flex justify-center items-center gap-3 bg-[#FBFCFD]  py-9   ">
                <div className="leftSignUp max-w-[95%] sm:max-w-[90%] text-[21px]   lg:text-[32px]  leading-[44px]      text-[#5C6874] ">Sign up and get exclusive special deals</div>
                <div className="rightSignUp">
                    <div className="form">
                        <input type="text" className=" w-[198px] h-[48px]  lg:w-[348px] lg:h-[52px]     rounded-tl-[12px] rounded-bl-[12px] " />
                        <button className=" w-[87px] sm:w-[97px] h-[48px]  lg:h-[52px]   rounded-tr-[12px] rounded-br-[12px]  bg-[#1B88F4] text-white">Sign Up</button>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default SignUp
