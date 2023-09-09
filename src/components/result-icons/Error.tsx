"use client";
import { motion } from "framer-motion";
import React from "react";

import { showSvg } from "@/constants/motinVariants";

export const ErrorIcon = () => {

  return (
    <motion.svg xmlns="http://www.w3.org/2000/svg" width="20px" height="1em" viewBox="0 0 24 24" fill="none">
      <motion.path
        d="M12 16.99V17M12 7V14M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
        stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
        initial="hidden"
        animate="visible"
        variants={showSvg}
      />
    </motion.svg>
  );
};
