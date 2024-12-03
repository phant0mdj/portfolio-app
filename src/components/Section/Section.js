import React from "react";

const Section = () => {
  return (
      <section className="mb-30" id="about">
          <div className="about-me flex flex-col items-center justify-center pt-[140px]">
              <div className="flex items-center gap-2">
                  <img src="/images/star.svg" alt="star"/>
                  <h2 className="h2_link">ABOUT ME</h2>
              </div>
              <div className="section-text mt-[22.5px]">
                  <p className="max-w-[1060px] min-w-1 mx-auto">I am a <span>beginner Full-Stack developer with a big desire to create modern, functional and user-friendly
                  web applications.</span>I was born on April 1, 2006. At the moment, I am actively studying and
                      developing my
                      skills in the field of full-stack development.</p>
              </div>
          </div>
          <div className="skills mx-auto">
              <div className="skills flex flex-col items-center justify-center mt-[140px]">
                  <div className="flex items-center gap-2">
                      <img src="/images/star.svg" alt="star"/>
                      <h2 className="h2_link">SKILLS</h2>
                  </div>
              </div>
              <div className="skills-content flex justify-center items-center gap-9 mt-8 flex-wrap">
                  <div className="rounded-img flex justify-center items-center ">
                      <img src="/images/postgresql.svg" alt="icon"/>
                  </div>
                  <div className="rounded-img flex justify-center items-center">
                      <img src="/images/next.svg" alt="icon"/>
                  </div>
                  <div className="rounded-img flex justify-center items-center">
                      <img src="/images/react.svg" alt="icon"/>
                  </div>
                  <div className="rounded-img flex justify-center items-center">
                      <img src="/images/html.svg" alt="icon"/>
                  </div>
                  <div className="rounded-img flex justify-center items-center">
                      <img src="/images/js.svg" alt="icon"/>
                  </div>
                  <div className="rounded-img flex justify-center items-center">
                      <img src="/images/css.svg" alt="icon"/>
                  </div>
                  <div className="rounded-img flex justify-center items-center">
                      <img src="/images/sass.svg" alt="icon"/>
                  </div>
                  <div className="rounded-img flex justify-center items-center">
                      <img src="/images/tailwind.svg" alt="icon"/>
                  </div>
              </div>
          </div>
          <div className="skills-img mx-auto flex items-center justify-center mt-40">
              <div className="ball-wrapper">
                  <div className="ball rounded-full ">
                      <span className="star">&#10040;</span>
                  </div>
              </div>
          </div>
          <div className="contact-me mx-auto flex flex-col items-center justify-center mt-20" id="contact">
              <div className="flex items-center gap-2">
                  <img src="/images/star.svg" alt="star"/>
                  <h2 className="h2_link">CONTACT ME</h2>
              </div>
              <h2 className="contact-me-text">Let's create something amazing together</h2>
              <button className="bg-[aqua] px-[33px] py-4 rounded-[100px] hover:shadow-aqua hover:shadow-md"><a href="tel:+998990877993">Book a call</a></button>
          </div>
      </section>
  );
};

export default Section;
