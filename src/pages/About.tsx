import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Target, TrendingUp, Users, Lightbulb, Heart, ExternalLink } from 'lucide-react';

const About: React.FC = () => {
  const interests = [
    { name: 'Technology Innovation', icon: Lightbulb },
    { name: 'Real Estate Investment', icon: TrendingUp },
    { name: 'Continuous Learning', icon: GraduationCap },
    { name: 'Community Building', icon: Users },
    { name: 'Twitch Streaming', icon: Heart },
    { name: 'Blockchain Analysis', icon: Target }
  ];

  const goals = [
    {
      title: 'Revolutionize Blockchain Analytics in West Africa',
      description: 'Pioneering blockchain analytics and education across West Africa, making on-chain data accessible and actionable for the next generation of analysts.',
      timeline: 'Long-term Vision'
    },
    {
      title: 'Build a Community',
      description: 'Growing a global community of data enthusiasts and analysts through educational content and thought leadership.',
      timeline: '5-Year Goal'
    },
    {
      title: 'Empower Through Analytics',
      description: 'Training the next generation of data professionals and making analytics education accessible to everyone.',
      timeline: 'Ongoing Mission'
    }
  ];

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            About John Fashola
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From social sciences to cutting-edge analytics, discover the journey that shaped 
            my passion for transforming data into meaningful insights.
          </p>
        </motion.div>

        {/* Personal Story */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">My Journey</h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                My path to becoming a data analyst wasn't traditional. I began with a deep foundation 
                in social sciences, studying Criminal Justice, Crime Analysis, Victimology, and Forensic Science. 
                This unique background gave me a different perspective on data – I learned to see beyond numbers 
                and understand the human stories they tell.
              </p>
              <p>
                The transition from social sciences to analytics happened naturally as I discovered the 
                power of data in solving real-world problems. What started as curiosity about patterns 
                in criminal behavior evolved into a passion for uncovering insights across diverse industries.
              </p>
              <p>
                As someone who identifies as an introvert, I never imagined I'd become an educator. 
                Yet, sharing knowledge and empowering others through analytics has become one of my 
                greatest sources of fulfillment. Teaching complex concepts in simple terms has not only 
                helped my students but also deepened my own understanding.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-50 p-8 rounded-xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Values</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={16} className="text-blue-800" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Continuous Learning</h4>
                  <p className="text-gray-600 text-sm">Always seeking new knowledge and staying ahead of industry trends.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users size={16} className="text-blue-800" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Knowledge Sharing</h4>
                  <p className="text-gray-600 text-sm">Empowering others through education and mentorship.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target size={16} className="text-blue-800" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Data-Driven Decisions</h4>
                  <p className="text-gray-600 text-sm">Believing in the power of data to drive meaningful change.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Interests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Interests & Passions
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interests.map((interest, index) => {
              const IconComponent = interest.icon;
              return (
                <motion.div
                  key={interest.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 + (index * 0.1) }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 rounded-xl mb-4">
                    <IconComponent size={24} className="text-blue-800" />
                  </div>
                  <h3 className="font-bold text-gray-900">{interest.name}</h3>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="mt-12 bg-blue-50 p-8 rounded-xl text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Beyond Analytics</h3>
            <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
              When I'm not analyzing data or teaching, you can find me exploring the latest in technology, 
              researching real estate investment opportunities, or streaming SQL and Leetcode practice sessions 
              on Twitch. I believe in the power of community and continuous learning, whether it's mastering 
              a new programming language or understanding market trends.
            </p>
            
            <div className="mt-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Stay Connected</h4>
              <a
                href="https://www.linkedin.com/newsletters/7246517956120104961/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-blue-800 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-900 transition-colors"
              >
                <ExternalLink size={20} />
                Subscribe to "The Data Edge" Newsletter
              </a>
              <p className="text-gray-600 text-sm mt-2">
                Get monthly insights on data analytics, blockchain trends, and industry best practices.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Goals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Vision & Goals
          </h2>
          
          <div className="space-y-8">
            {goals.map((goal, index) => (
              <motion.div
                key={goal.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.8 + (index * 0.2) }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="lg:w-2/3">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{goal.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{goal.description}</p>
                  </div>
                  <div className="lg:w-1/3 lg:text-right">
                    <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-semibold text-sm">
                      {goal.timeline}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </motion.main>
  );
};

export default About;