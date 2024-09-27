import React from "react";
import WorldMap from "../../assets/world-map.png"
import {motion} from 'framer-motion'; 


const WhereToBuy = () => {
  return <div className="container my-36">
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center">
      <div className="space-y-8">
        <motion.h1
          initial={{opacity: 0, y: 100}} 
          whileInView={{opacity: 1, y: 0}} 
          transition={{
            type:'spring',
            stiffness: 100,
            damping: 10,
            delay: 0.2,
          }}
        className="text-4xl font-bold text-darkGray font-serif">Buy our products from anywhere</motion.h1>

        <motion.div 
         initial={{opacity: 0, y: 100}} 
         whileInView={{opacity: 1, y: 0}} 
         transition={{
          type:'spring',
          stiffness: 100,
          damping: 10,
           delay: 0.4,
         }}
        className="flex items-center gap-4">
          <input type="text" placeholder="name" className="input-style w-full lg:w-[150px]" />

          <input type="Email" placeholder="Email" className="input-style w-full " />
        </motion.div>

        <motion.div 
         initial={{opacity: 0, y: 100}} 
         whileInView={{opacity: 1, y: 0}} 
         transition={{
          type:'spring',
          stiffness: 100,
          damping: 10,
           delay: 0.6,
         }}
        className="flex items-center gap-4">
          <input type="text" placeholder="country" className="input-style w-full " />

          <input type="Email" placeholder="Zipcode" className="input-style w-full lg:w-[150px]" /> 
        </motion.div>
        <motion.button 
         initial={{opacity: 0, y: 100}} 
         whileInView={{opacity: 1, y: 0}} 
         transition={{
          type:'spring',
          stiffness: 100,
          damping: 10,
           delay: 0.8,
         }}
        className="primary-btn w-full">Order Now</motion.button>
      </div>

      <div className="col-span-2">
        <motion.img 
            initial={{opacity: 0, y: 100}} 
            whileInView={{opacity: 1, y: 0}} 
            transition={{
             type:'spring',
             stiffness: 100,
             damping: 10,
              delay: 0.8,
            }}
        src={WorldMap} alt=""  className="w-full sm:w-[500px] mx-auto"/>
      </div>
    </div>

  </div>;
};

export default WhereToBuy;
