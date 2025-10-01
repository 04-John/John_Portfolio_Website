import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Briefcase, TrendingUp, Users, Award, Building2 } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import StatsCard from '../components/StatsCard';
import SkillTag from '../components/SkillTag';

const Home: React.FC = () => {

  const featuredProjects = [
    {
      title: 'StarkLytics',
      description: 'High-performance query sandbox for StarkNet blockchain data with custom SQL parser and robust security measures. Hackathon winner for innovative blockchain analytics.',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Python', 'TypeScript', 'PostgreSQL'],
      link: 'https://github.com/Ndifreke000/Starklytics-For-STARKNET?tab=readme-ov-file'
    },
    {
      title: 'ClankFun Dashboard',
      description: 'Analytics dashboard for decentralized meme coin platform on Base blockchain. Enables discovery, launch, and trading of fair-launched tokens.',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Tableau', 'SQL', 'Analytics'],
      link: 'https://dune.com/_john_/clankfun'
    },
    {
      title: 'Neura DeFi Aggregator',
      description: 'AI-enhanced automated DeFi aggregator for Polygon ecosystem. Smart vaults automatically rebalance across protocols for optimal yields.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['TypeScript', 'DeFi', 'AI'],
      link: 'https://github.com/John-04/Neura'
    }
  ];

  const stats = [
    { label: '5+ Years', description: 'Data Analytics Experience', icon: TrendingUp },
    { label: '25+', description: 'Projects Completed', icon: Users },
    { label: 'Hackathon', description: 'Winner - StarkLytics', icon: Award },
    { label: '5+', description: 'Companies Trusted', icon: Building2 }
  ];

  const skills = [
    'SQL', 'Python', 'TypeScript', 'Tableau', 'Power BI', 'Excel', 'Dune', 'PostgreSQL'
  ];

  const companies = [
    { name: 'Agrolinking', role: 'Senior Data Analyst' },
    { name: 'TenderDexta', role: 'Analytics Facilitator' },
    { name: 'DataRactive', role: 'Research Analyst' },
    { name: 'ClankFun', role: 'Consultant' }
  ];

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6"
          >
            John Fashola — Data & Product Analyst | 
            <span className="text-blue-800"> Educator </span>| 
            <span className="text-blue-800"> On-Chain Analyst</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 mb-10 leading-relaxed"
          >
            Transforming data into actionable insights, educating the next generation of analysts, 
            and exploring the future of blockchain analytics.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/projects"
              className="bg-blue-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-900 transition-colors flex items-center justify-center gap-2"
            >
              <Briefcase size={20} />
              View Projects
            </Link>
            <a
              href="https://calendly.com/fashjohn04/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-blue-800 text-blue-800 px-8 py-4 rounded-xl font-semibold hover:bg-blue-800 hover:text-white transition-colors flex items-center justify-center gap-2"
            >
              <Calendar size={20} />
              Book a Meeting
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <StatsCard {...stat} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Discover my latest work in data analytics, blockchain analysis, and educational content creation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link
            to="/projects"
            className="inline-block bg-blue-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-900 transition-colors"
          >
            View All Projects
          </Link>
        </motion.div>
      </section>

      {/* Work Experience Preview */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
              Trusted By Leading Companies
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Delivering exceptional results across diverse industries and challenging analytical projects.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm text-center"
              >
                <h3 className="font-bold text-gray-900 mb-2">{company.name}</h3>
                <p className="text-gray-600 text-sm">{company.role}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <Link
              to="/experience"
              className="inline-block bg-blue-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-900 transition-colors"
            >
              View Full Experience
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Skills Strip */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
            Technical Expertise
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Proficient in cutting-edge tools and technologies for data analysis and visualization.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {skills.map((skill, index) => (
            <SkillTag key={skill} skill={skill} delay={index * 0.1} />
          ))}
        </motion.div>
      </section>

      {/* About Me Teaser */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-gray-900 mb-6"
            >
              About John Fashola
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 text-lg mb-8 leading-relaxed"
            >
              From social sciences to cutting-edge analytics, my journey has been driven by curiosity 
              and a passion for transforming complex data into meaningful insights. As an educator and 
              blockchain analyst, I'm committed to empowering others through knowledge and innovation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                to="/about"
                className="inline-block bg-blue-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-900 transition-colors"
              >
                Learn More About Me
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default Home;