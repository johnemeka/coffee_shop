import React from "react";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaPhone,
  FaTelegram
} from 'react-icons/fa';
import {FaMapLocation} from 'react-icons/fa6';
import CreditCards from '../../assets/website/credit-cards.webp';
import {motion} from 'framer-motion'

const Footer = () => {
  return <div>
    <div className="bg-gradient-to-r from-primary to-primaryDark pt-12 pb-8 text-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* company details section */}
          <motion.div 
           initial={{opacity:0, y: 100}} 
        whileInView={{opacity:1, y: 0}} 
        transition={{
          type:'spring',
          stiffness: 150,
          damping: 10,
          delay: 0.2,
        }}
          className="space-y-6">
            <h1 className="text-3xl font-bold uppercase">Coders Cafe</h1>
            <p className="text-sm max-w-[300px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam sapiente cum temporibus perferendis ullam quia nisi ratione consequatur doloremque ex.</p>
            <div className="">
              <p className="flex items-center gap-2 mt-2"> <FaPhone/> +1 (123) 456-7890</p>
              <p className="flex items-center gap-2 mt-2"> <FaMapLocation/> Lorem ipsum dolor sit amet.</p>
            </div>
          </motion.div>

          {/* footer links section */}
          <motion.div 
           initial={{opacity:0, y: 100}} 
        whileInView={{opacity:1, y: 0}} 
        transition={{
        duration:0.6,
          delay: 0.4,
        }}
          className="space-y-6">
           <h1 className="text-3xl font-bold">Quick Links</h1>
           <div className="grid grid-cols-2">
            <div className="">
              <ul className="space-y-2">
                <li>Home</li>
                <li>About</li>
                <li>Contact us</li>
                <li>Privacy</li>
              </ul>
            </div>

            <div className="">
              <ul className="space-y-2">
                <li>Home</li>
                <li>About</li>
                <li>Contact us</li>
                <li>Privacy</li>
              </ul>
            </div>
           </div>
          </motion.div>
          {/* social links section */}
          <motion.div 
           initial={{opacity:0, y: 100}} 
        whileInView={{opacity:1, y: 0}} 
        transition={{
        
          delay: 0.6,
          duration:0.6
        }}
          className="space-y-6">
          <h1 className="text-3xl font-bold">Follow Us</h1>
          <div className="flex items-center gap-3">
            <FaFacebook className="text-3xl hover:scale-105 duration-300"/>

            <FaInstagram className="text-3xl hover:scale-105 duration-300"/>

            <FaTelegram className="text-3xl hover:scale-105 duration-300"/>

            <FaGoogle className="text-3xl hover:scale-105 duration-300"/>
          </div>
          <div className="">
            <h1 className="text-xl font-semibold mb-2">Payment Method</h1>
            <img src={CreditCards} alt="" className="w-[80%]"/>
          </div>
          </motion.div>
        </div>

        <p className="text-white text-center mt-8 pt-8 border-t-2">Copyright & copy 2024 company name, All rights reserved</p>
      </div>
    </div>
  </div>;
};

export default Footer;
