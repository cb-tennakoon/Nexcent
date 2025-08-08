import React from "react";
import { motion } from "framer-motion";

const Tsotion = () => {
  return (
    <div className="space-y-32 p-10">
      {/* Slide in from left */}
      <motion.div
        initial={{ opacity: 0, x: "-100%" }}  // start hidden & left
        whileInView={{ opacity: 1, x: 0 }} // animate when visible
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-blue-500 text-white p-6 rounded-xl shadow-lg"
      >
        Slide in from Left
      </motion.div>

      {/* Slide in from right */}
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-green-500 text-white p-6 rounded-xl shadow-lg"
      >
        Slide in from Right
      </motion.div>

      {/* Slide in from bottom */}
      <motion.div
        initial={{ opacity: 0, y: "100%" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-red-500 text-white p-6 rounded-xl shadow-lg"
      >
        Slide in from Bottom
      </motion.div>
    </div>
  );
};

export default Tsotion;
