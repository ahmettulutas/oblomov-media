import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

import { SubmissionStatus } from "@/components/contact-form/ContactForm";
import { ErrorIcon, SuccessIcon } from "@/components/result-icons";
import { animatePlane } from "@/constants/motinVariants";

export const statusToIconMap: Record<SubmissionStatus, React.JSX.Element> = {
  initial: <FaPaperPlane height={20} width={20} />,
  sending: (
    <motion.div
      className="ml-2 relative"
      variants={animatePlane}
      initial="hidden"
      animate="visible"
    >
      <FaPaperPlane width={20} />
    </motion.div>
  ),
  success: <SuccessIcon />,
  error: <ErrorIcon />,
};

export const statusToButtonText: Record<SubmissionStatus, string> = {
  initial: "Gönder",
  sending: "Gönderiliyor",
  success: "Gönderildi",
  error: "Gönderilemedi",
};
