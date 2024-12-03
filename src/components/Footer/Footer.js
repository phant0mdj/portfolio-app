import React from "react";
import {Link} from "react-scroll";

const Footer = () => {
  return (
    <footer className="py-12 flex items-center justify-between">
        <div className="logo">
            <div className="logo-icon">
                <a href="#">&#10040;</a>
            </div>
        </div>
            <div className="nav-footer gap-1 px-2 ">
                <ul className=" flex items-center gap-20 text-white font-plus-jakarta text-[16px] font-normal leading-5 tracking-tight text-center">
                    <li>
                        <Link activeClass="active" className="hover:text-gray-400 transition duration-200 glow"
                              to="about" spy={true} smooth={true} duration={500}>About</Link>
                    </li>
                    <li>
                        <Link activeClass="active" className="hover:text-gray-400 transition duration-200 glow"
                              to="skills" spy={true} smooth={true} duration={500}>Skills</Link>
                    </li>
                    <li>
                        <Link activeClass="active" className="hover:text-gray-400 transition duration-200 glow"
                              to="contact" spy={true} smooth={true} duration={500}>Contact</Link>
                    </li>
                </ul>
            </div>
        <div className="author">
            <p>Made with love ❤️ by Abdukarim</p>
        </div>
    </footer>
  );
};

export default Footer;
