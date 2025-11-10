import { motion } from "framer-motion";

export default function SplashScreen() {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black text-white z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2, duration: 0.8 }}
    >
      <motion.h1
        className="text-4xl font-bold font-urbanist"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        ITSMAMSB
      </motion.h1>
    </motion.div>
  );
}
