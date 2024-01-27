import React from 'react'
import HeroImage from '../assets/hero-image.jpg'

function Hero() {
  return (
    <>
     <div className="w-[292px] absolute -z-10 h-[292px] bg-blue-500 bg-opacity-30 rounded-full blur-[123px] top-[150px]"></div>
    <div className="w-[366px] hidden h-[366px] -z-10  bg-blue-500 bg-opacity-30 rounded-full blur-[123px] top-[140px] lg:absolute left-[640px]"></div>
    <div className="w-[366px] hidden h-[366px] lg:block -z-10  bg-fuchsia-500 bg-opacity-20 rounded-full blur-[105px] lg:absolute top-[407px] -right-[90px]"></div>
    <section id="home" className="scroll-pt-32 max-w-[1160px] w-full mx-auto mt-[45px] lg:mt-[70px]  px-[24px] xl:px-0">
        <div className="flex lg:flex-row flex-col-reverse items-center justify-between gap-9">
            <div data-aos="fade-down-left" data-aos-duration="1000" className="max-w-[694px] w-full flex flex-col gap-4 lg:gap-[32px] ">
                <div>
                    <h1 className="lg:w-[694px] lg:text-start md:text-center text-transparent bg-clip-text bg-gradient-to-r from-[#DB5BFF] to-[#6F8EFF] text-5xl lg:text-[56px] font-bold via-[#A472FF] leading-[1.3] ">
                        Crafting Innovative Solutions Through Code
                    </h1>
                </div>
                <div className="w-full lg:max-w-[79%]">
                    <p className="text-white lg:text-start md:text-center leading-[1.5]">
                        Hello there! I'm John Doe, a <span className="font-bold"> Full-Stack Developer</span> with a passion
                        for turning ideas into reality.
                        I specialize in building scalable, efficient, and user-friendly web applications using
                        cutting-edge technologies like 
                        <span className="font-bold">React,</span><span className="font-bold">Node.js</span>
                        ,<span className="font-bold">Firebase</span>, and more.
                    </p>
                    <p className="mt-5 text-white  lg:text-start md:text-center leading-[1.5]">
                        Dive in to explore my projects, learn about my skills, and discover how I can bring your vision
                        to life. Let's create something amazing together!
                    </p>
                </div>
                <a href="#contact" className="flex text-lg text-white font-bold hover:shadow-2xl lg:mx-0 md:mx-auto duration-300 hover:shadow-blue-500/50  bg-blue-500 w-[179px] rounded-lg items-center gap-3 justify-center py-2 ">
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.4323 11.4109L12.17 11.1526C11.6267 11.0903 11.0923 11.2773 10.7093 11.6603L9.07041 13.2992C6.54978 12.0166 4.4834 9.95909 3.20082 7.42954L4.84858 5.78177C5.23157 5.39878 5.41862 4.86436 5.35627 4.32105L5.09797 2.07652C4.99109 1.17692 4.23401 0.5 3.32551 0.5H1.78464C0.778165 0.5 -0.0590758 1.33725 0.0032719 2.34372C0.475333 9.95018 6.55869 16.0247 14.1562 16.4967C15.1627 16.5591 15.9999 15.7218 15.9999 14.7154V13.1745C16.0088 12.2749 15.3319 11.5178 14.4323 11.4109Z" fill="white" />
                    </svg>
                    Let's talk
                </a>
            </div>
            <div data-aos="fade-up-left" data-aos-duration="1000" className="hidden lg:block w-full lg:w-[397px] relative">
                <img className="rounded-lg ml-auto w-full lg:h-[483px] object-cover" src={HeroImage} alt=""/>
            </div>
        </div>
    </section>
    </>
  )
}

export default Hero