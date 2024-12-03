import React from 'react';
import {Link} from 'react-scroll';
const Header = () => {
    const [isOpen, setOpen] = React.useState(false);
    const closeMenu = () =>{
        setOpen(false)
    }
    return (
      <header className="flex items-center justify-between mt-12 mx-auto gap-4 sm:gap-4 flex-wrap ">
          <div className="logo">
              <div className="logo-icon">
                  <a href="#">&#10040;</a>
              </div>
          </div>
          <nav className="border border-gray-800 rounded-full bg-gray px-8 py-5">
              <ul className="flex items-center gap-20 text-white font-plus-jakarta text-[16px] font-normal leading-5 tracking-tight text-center">
                  <li>
                      <Link activeClass="active" className="hover:text-gray-400 transition duration-200 glow" to="about" spy={true} smooth={true} duration={500} >About</Link>
                  </li>
                  <li>
                      <Link activeClass="active" className="hover:text-gray-400 transition duration-200 glow" to="skills" spy={true} smooth={true} duration={500} >Skills</Link>
                  </li>
                  <li>
                      <Link activeClass="active" className="hover:text-gray-400 transition duration-200 glow" to="contact" spy={true} smooth={true} duration={500} >Contact</Link>
                  </li>
              </ul>
          </nav>
          <div className="burger-menu hidden">
              <button
                  onClick={() => setOpen(!isOpen)}
                  className={`hamburger-button ${isOpen ? "open" : "close"}`}
              />
              <div className={`panel ${isOpen ? "open" : "close"}`}>
                  <ul>
                      <li>
                          <Link activeClass="active" className="hover:text-gray-400 transition duration-200 glow" to="about" spy={true} smooth={true} duration={500} onClick={closeMenu} >About</Link>
                      </li>
                      <li>
                          <Link activeClass="active" className="hover:text-gray-400 transition duration-200 glow" to="skills" spy={true} smooth={true} duration={500} onClick={closeMenu}  >Skills</Link>
                      </li>
                      <li>
                          <Link activeClass="active" className="hover:text-gray-400 transition duration-200 glow" to="contact" spy={true} smooth={true} duration={500} onClick={closeMenu}  >Contact</Link>
                      </li>
                      <li>
                          <a href="tel:+998990877993" onClick={closeMenu} >Let's Talk</a>
                      </li>
                  </ul>
              </div>
          </div>
          <div className="btn">
              <button
                  className="box-border hover:text-gray-400 transition glow rounded-full bg-[rgba(26,26,26,0.6)] px-8 py-5 text-white text-[16px] font-normal leading-5 tracking-tight text-left font-['Plus_Jakarta_Sans']">
                  <a href="tel:+998990877993">Let's Talk</a>
              </button>
          </div>
      </header>
  );
};

export default Header;
