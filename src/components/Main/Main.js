import {Link} from "react-scroll";
import React from "react";

const Main = () => {
  return (
    <main className="flex flex-col items-center justify-center pt-[80px] sm:pt-[120px] my-0 mx-auto">
        <div className="main-wrapper w-full max-w-[842px] my-0 mx-auto " >
            <div className="max-w-[842px] flex flex-col items-center justify-center my-0 mx-auto">
                <h1 className="text-[rgb]">Full-stack developer</h1>
                <h2 className="mt-[22px]">Hi! My name is Abdukarim, I am a beginner full-stack developer specializing in
                    creating modern and
                    functional web applications. My goal is to develop projects that will be user—friendly and benefit
                    companies. Now I am actively studying, developing my skills and ready to bring my ideas to
                    life.</h2>
                <div className="mt-[33px]">
                    <button id="" className="bg-[aqua] px-[33px] py-4 rounded-[100px] hover:shadow-aqua hover:shadow-md">
                        <Link activeClass="active" to="about" spy={true} smooth={true} duration={500} >Get Started</Link>
                    </button>
                </div>
            </div>
        </div>
        <div className="companies mt-40 mx-auto">
            <p>Companies I've worked with</p>
            <div className="logos flex justify-center items-center gap-14 mt-[25px] flex-wrap mx-auto">
                <img className="w-[130px] h-[30px]" src="/images/logo-1.svg " alt="logo"/>
                <img className="w-[100px] h-[31px]" src="/images/logo-2.svg" alt="logo"/>
                <img className="w-[113px] h-[23px]" src="/images/logo-3.svg" alt="logo"/>
                <img className="w-[82px] h-[32px]" src="/images/logo-4.svg" alt="logo"/>
                <img className="w-[122px] h-[25px]" src="/images/logo-5.svg" alt="logo"/>
                <img className="w-[87px] h-[44px]" src="/images/logo-6.svg" alt="logo"/>
                <img className="w-[124px] h-[24px]" src="/images/logo-7.svg" alt="logo"/>
            </div>
        </div>
    </main>
  );
};

export default Main;
