import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface StatsCardProps {
  label: string;
  description: string;
  icon: LucideIcon;
}

const StatsCard: React.FC<StatsCardProps> = ({ label, description, icon: Icon }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 text-center"
    >
      <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 rounded-xl mb-4">
        <Icon size={24} className="text-blue-800" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{label}</h3>
      <p className="text-gray-600 text-sm font-medium">{description}</p>
    </motion.div>
  );
};

export default StatsCard;