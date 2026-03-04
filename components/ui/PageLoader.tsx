"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9998] bg-[var(--bg)] flex flex-col items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.div
            className="font-syne font-extrabold text-gradient-blue-violet"
            style={{ fontSize: "clamp(2rem,5vw,4rem)", letterSpacing: "-2px" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            DevCraft.
          </motion.div>
          <div className="w-48 h-[2px] bg-white/10 rounded-full mt-6 overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-[var(--blue)] to-[var(--violet)]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.8, ease: [0.4, 0, 0.2, 1] }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
