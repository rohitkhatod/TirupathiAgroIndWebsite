'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export function AnimatedIn({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45 }}
    >
      {children}
    </motion.div>
  );
}
