import { forwardRef } from 'react';
import internet from '../../assets/images/internet.svg';
import apps from "../../assets/images/apps.svg";
import airdrop from "../../assets/images/airdrop.svg";

// Define the About component with a display name
const About = forwardRef(function About(props, ref) {
  return (


    <div ref={ref} className="  bg-gray-200  sm:mx-60 md:mx-60 my-5 py-5 font-permanent rounded-2xl items-center justify-center">

      <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-400 via-gray-500 to-gray-900 text-transparent bg-clip-text">Welcome to Hagere techs</h1>
      <ul>
        <li className="flex items-center rounded-md justify-center gap-1 mb-1 hover:scale-110 hover:bg-gray-400">
          <img src={internet} alt="Internet Icon" />
          Paid Websites
        </li>
        <li className="flex items-center rounded-md  justify-center gap-1 mb-1 hover:scale-110 hover:bg-gray-400">
          <img src={apps} alt="Apps Icon" />
          Profit-Generating Apps
        </li>
        <li className="flex items-center rounded-md  justify-center gap-1 hover:scale-110 hover:bg-gray-400">
          <img src={airdrop} alt="Airdrop Icon" />
          Airdrop Alerts
        </li>
      </ul>
      <h3>Subscribe now and start your journey towards financial freedom today!</h3>
    </div>



  );
});

export default About;