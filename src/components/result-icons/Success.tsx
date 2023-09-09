"use client";
import { motion } from "framer-motion";
import React from "react";

import { showSvg } from "@/constants/motinVariants";

export const SuccessIcon = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20px" height="1em" fill="none">
      <motion.path
        d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
        stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
        initial="hidden"
        animate="visible"
        variants={showSvg}
      />
    </motion.svg>

  );
};

