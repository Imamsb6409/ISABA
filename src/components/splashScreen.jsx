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
        className="text-4xl font-bold font-pacifico bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient-x"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        ISABA
      </motion.h1>
    </motion.div>
  );
}


//ini kalo gradient di latar 

// export default function SplashScreen() {
//   return (
//     <motion.div
//       className="fixed inset-0 flex items-center justify-center z-50
//                  bg-gradient-to-r from-primary via-secondary to-primary
//                  bg-[length:200%_200%] animate-gradient-x"
//       initial={{ opacity: 1 }}
//       animate={{ opacity: 0 }}
//       transition={{ delay: 2, duration: 0.8 }}
//     >
//       <motion.h1
//         className="text-4xl font-bold font-pacifico text-white"
//         initial={{ scale: 0.8, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         ISABA
//       </motion.h1>
//     </motion.div>
//   );
// }