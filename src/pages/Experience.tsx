import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, TrendingUp, Users, Award } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Analytics Consultant',
      company: 'ClankFun Dashboard',
      period: 'September 2025',
      description: 'Built comprehensive analytics dashboard for ClankFun on Dune using SQL and blockchain data.',
      achievements: [
        'Transformed fragmented metrics into professional, export-ready product for investor presentations',
        'Reduced query execution time by 40% through optimized TrinoSQL schemas and caching strategies',
        'Delivered key insights on peak visitors, trade volume, and Twitter engagement trends',
        'Consulted with stakeholders to integrate critical metrics into executive-ready layouts'
      ],
      skills: ['TrinoSQL', 'Dune Analytics', 'Blockchain Data', 'Dashboard Design']
    },
    {
      title: 'Senior Data Analyst',
      company: 'Agrolinking',
      period: 'May 2024 – Present',
      description: 'Leading data-driven initiatives to optimize agricultural supply chain operations and market analysis.',
      achievements: [
        '+20% revenue increase through predictive analytics implementation',
        '+30% accuracy improvement in market forecasting models',
        'Developed automated reporting systems reducing manual work by 60%',
        'Led cross-functional teams in data migration and system optimization'
      ],
      skills: ['Python', 'SQL', 'Tableau', 'Machine Learning', 'Agriculture Tech']
    },
    {
      title: 'Analytics Facilitator',
      company: 'TenderDexta',
      period: 'April 2024 – August 2024',
      description: 'Designed and delivered comprehensive analytics training programs for educational technology platform.',
      achievements: [
        '95% user satisfaction rate in analytics training programs',
        '+40% engagement increase through gamified learning approaches',
        'Trained 50+ educators in data visualization techniques',
        'Created curriculum for advanced SQL and Excel courses'
      ],
      skills: ['Education Technology', 'Curriculum Design', 'Power BI', 'Training']
    },
    {
      title: 'Research Analyst',
      company: 'DataRactive',
      period: 'August 2024 – September 2024',
      description: 'Conducted comprehensive market research and data analysis for strategic business decisions.',
      achievements: [
        'Streamlined data collection workflows reducing processing time by 40%',
        '+25% client satisfaction improvement through enhanced reporting',
        'Developed automated data validation processes',
        'Created standardized research methodologies adopted company-wide'
      ],
      skills: ['Research Methodology', 'Data Validation', 'Statistical Analysis', 'Client Relations']
    }
  ];

  const certifications = [
    {
      name: 'Starklytics Hackathon Winner - Best Infra Tool',
      issuer: 'StarkNet Ecosystem',
      year: '2025',
      icon: Award
    },
    {
      name: 'Google Data Analytics Certification',
      issuer: 'Coursera',
      year: '2022',
      icon: TrendingUp
    },
    {
      name: 'IBM Data Science Certification',
      issuer: 'Coursera',
      year: '2023',
      icon: TrendingUp
    },
    {
      name: 'Data Science Certification',
      issuer: 'Colab Innovation Hub',
      year: '2021',
      icon: Users
    },
    {
      name: 'Udacity Data Analytics Certification',
      issuer: 'Udacity',
      year: '2021',
      icon: Users
    },
    {
      name: 'CCNA: Enterprise Networking, Security & Automation',
      issuer: 'Cisco Networking Academy',
      year: '2021',
      icon: Award
    },
    {
      name: 'CCNA: Introduction to Networks',
      issuer: 'Cisco Networking Academy',
      year: '2021',
      icon: Award
    },
    {
      name: 'CCNA: Switching, Routing & Wireless Essentials',
      issuer: 'Cisco Networking Academy',
      year: '2021',
      icon: Award
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
            Professional Experience
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my journey in data analytics, education, and blockchain analysis 
            across diverse industries and challenging projects.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-12 mb-20">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-sm p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="lg:w-1/3">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                  <h4 className="text-xl font-semibold text-blue-800 mb-2">{exp.company}</h4>
                  <div className="flex items-center text-gray-600 mb-4">
                    <Calendar size={16} className="mr-2" />
                    {exp.period}
                  </div>
                  <p className="text-gray-600 mb-4">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-50 text-blue-800 text-sm font-medium rounded-lg"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:w-2/3">
                  <h5 className="text-lg font-semibold text-gray-900 mb-4">Key Achievements</h5>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Certifications & Awards
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 + (index * 0.1) }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 rounded-xl mb-4">
                    <IconComponent size={24} className="text-blue-800" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{cert.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{cert.issuer}</p>
                  <p className="text-blue-800 font-semibold text-sm">{cert.year}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>
    </motion.main>
  );
};

export default Experience;