import React from 'react';
import { motion } from 'framer-motion';

interface SkillTagProps {
  skill: string;
  delay?: number;
}

const SkillTag: React.FC<SkillTagProps> = ({ skill, delay = 0 }) => {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ scale: 1.05 }}
      className="px-6 py-3 bg-white border-2 border-blue-100 text-blue-800 font-semibold rounded-xl hover:bg-blue-50 hover:border-blue-200 transition-all duration-200 cursor-default"
    >
      {skill}
    </motion.span>
  );
};

export default SkillTag;