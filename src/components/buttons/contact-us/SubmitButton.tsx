"use client";
import { HTMLMotionProps, motion } from "framer-motion";
import React, { ButtonHTMLAttributes } from "react";

import { SubmissionStatus } from "@/components/contact-form/ContactForm";

import { statusToButtonText, statusToIconMap } from "./submit-helpers";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & HTMLMotionProps<"button"> & {
  onClick?: () => void;
  status: SubmissionStatus;
}

export const SubmitButton: React.FC<Props> = ({ status, onClick, disabled, ...restProps }) => {
  const isLoading = status === "sending";
  const success = status === "success";
  const error = status === "error";

  const buttonText = statusToButtonText[status] || "Gönder";
  const iconComponent = statusToIconMap[status] || null;

  return (
    <motion.button {...restProps}
      onClick={onClick}
      className={`flex justify-center items-center bg-brandColor text-white py-2 px-4 ${(isLoading || disabled) ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      } ${success && "bg-success"} ${error && "bg-warning"}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      disabled={disabled || isLoading}
    >
      <p className="pr-2">{buttonText}</p>
      {iconComponent}
    </motion.button>
  );
};


