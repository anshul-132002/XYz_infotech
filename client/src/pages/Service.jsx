import React from "react";
import ServiceC from "../components/Servicec";
import LogoSection from "../components/LogoSection";
import { motion } from "motion/react";
import ServiceSection from "./serviceSection";

function Service() {
  return (
    <motion.div
      initial={{ opacity: 0,  }}
      animate={{ opacity: 1,  }}
      exit={{ opacity: 0, }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="flex flex-col md:flex-auto"
    >
      <ServiceSection></ServiceSection>
      <LogoSection />
      <ServiceC />
    </motion.div>
  );
}

export default Service;
