import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[15px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[16px] max-w-5xl leading-[18px]'
      >
          As an entrepreneurially-driven final-year MEng student at Imperial College London, I’ve had the privilege of developing a large wealth of both leadership and technical experience, as well as a track record of ambitious projects. I pursue mental stimulation through software development, discretionary trading and investing (+600% since Q4 2023), and Chess.
  <br/><br/>
  As President of the 600-large Imperial Blockchain Society, I spearhead extensive industrial partnerships with Tier 1 financial Institutions and engineering companies, organise and run frequent major events and educational programs, lead a dedicated committee, and host educational lectures. 
  <br/><br/>
  I founded ImperialDAO, an organisation of 50 talented Imperial Staff/Students/Alumni now engaging in FinTech product development, venture capital, and market-trading fund management.
  <br/><br/>
  While at university, my work experience at HSBC, an AI Start-Up accelerator, and Napa Society, have afforded me a strong professional network and valuable insights into professional software development, the startup and venture capital ecosystem, and the Web3 industry.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
