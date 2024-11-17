import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import homeImage from "../assets/images/hagereLogo.svg";
import telegramImage from "../assets/images/telegram.jpg";
import Posts from './Posts';
import telegramSvg from "../assets/images/telegram.png";
import Contact from './pages/Contact';
import About from './pages/About';
const TopBar = () => {
  const logoRef = useRef(null);
  const descSectionRef = useRef(null);
  const telegramSectionRef = useRef(null); // Ref for the Telegram section
  const contactSectionRef = useRef(null); // Ref for the Contact section
  const textRef = useRef(null); // Ref for the animated text
  const centerTextRef = useRef(null); // Ref for the center text

  const handleMouseEnterLogo = () => {
    gsap.to(logoRef.current, { scale: 1.1, rotation: 180, duration: 0.5 });
  };

  const handleMouseLeaveLogo = () => {
    gsap.to(logoRef.current, { scale: 1, rotation: 0, duration: 0.5 });
  };

  const scrollToTelegram = () => {
    telegramSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollTODescription = () => {
    descSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAddress = () => {
    contactSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Create the endless animation for the Telegram section text
    const tl = gsap.timeline({ repeat: -1 });
    tl.to(centerTextRef.current, {
      y: -10,
      scale: 1.1,
      duration: 1,
      ease: "power1.inOut"
    })
      .to(centerTextRef.current, {
        y: 10,
        scale: 1,
        duration: 1,
        ease: "power1.inOut"
      });

    return () => {
      tl.kill();
    };
  }, []);

  useEffect(() => {
    // Create the endless animation for the text
    const tl = gsap.timeline({ repeat: -1 });
    tl.to(textRef.current, {
      x: 10,
      duration: 1,
      ease: "power1.inOut"
    })
      .to(textRef.current, {
        x: -10,
        duration: 1,
        ease: "power1.inOut"
      })
      .to(textRef.current, {
        x: 0,
        duration: 1,
        ease: "power1.inOut"
      });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="bg-gray-100">
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-2xl p-4 flex justify-between items-center h-24">
        <div className="flex flex-col">
          <a href="#posts">
            <img
              ref={logoRef}
              src={homeImage}
              alt="homeImage"
              className="w-12 h-12 rounded-2xl cursor-pointer"
              onMouseEnter={handleMouseEnterLogo}
              onMouseLeave={handleMouseLeaveLogo}
            />
          </a>
          <a href="#posts" className="font-ga text-cyan-500">HAGERE</a>
        </div>
        <div ref={centerTextRef} className="text-center font-bold text-lg text-cyan-600">
          <span className="font-permanent">You are in the right place</span>
        </div>
        <div className="flex items-center">
          <button
            onClick={scrollToTelegram}
            className="font-ga text-cyan-500 cursor-pointer bg-transparent border-2 border-cyan-500 rounded px-4 py-2 hover:bg-cyan-500 hover:text-white transition"
          >
            Join
          </button>

          <button
            onClick={scrollTODescription}
            className="font-ga text-cyan-500 cursor-pointer bg-transparent border-2 border-cyan-500 rounded px-4 py-2 hover:bg-cyan-500 hover:text-white transition"
          >
            About
          </button>
          <button
            onClick={scrollToAddress}
            className="font-ga text-cyan-500 cursor-pointer bg-transparent border-2 border-cyan-500 rounded px-4 py-2 hover:bg-cyan-500 hover:text-white transition"
          >
            Contact
          </button>
        </div>
      </div>

      {/* Content Below the Fixed Top Bar */}
      <div className="pt-32">
        <div className="flex justify-center gap-2 flex-wrap">
          <Posts />
        </div>
      </div>

      {/* Telegram Section */}
      <div ref={telegramSectionRef} className='flex mt-16 items-start justify-center'>
        <img className="w-96 ml-3 mr-3" src={telegramImage} alt="" />
        <div className="pt-6 pb-10 text-center w-96 rounded-2xl bg-gray-200">
          <h2 className="text-2xl font-permanent mb-4 text-gray-600" ref={textRef}>Join Our Telegram Channel!</h2>
          <p className="mb-4 font-permanent text-md text-gray-500">Get the latest updates, tips, and exclusive content on how to make money online!</p>

          <div className="flex ml-20 max-w-[300px] items-center justify-center bg-cyan-500 rounded-2xl hover:bg-cyan-300">

            <a
              href="https://t.me/hageretechs"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-white rounded flex items-center ml-1 cursor-pointer "
            >
              <img className="w-12 h-12" src={telegramSvg} alt="" />
              <span>JOIN NOW</span>
            </a>
          </div>


        </div>
      </div>

      {/* Contact Section */}

      <About ref={descSectionRef} />
      <Contact ref={contactSectionRef} />


    </div >
  );
}

export default TopBar;