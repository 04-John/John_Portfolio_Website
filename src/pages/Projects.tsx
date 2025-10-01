import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ListFilter as Filter } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const projects = {
    development: [
      {
        title: 'StarkLytics',
        description: 'Developed a high-performance query sandbox for StarkNet blockchain data using SQL, Python, and PostgreSQL. Built custom SQL parser with robust security measures including rate limiting and SQL injection protection.',
        image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
        tags: ['Python', 'TypeScript', 'PostgreSQL', 'Blockchain'],
        link: 'https://github.com/Ndifreke000/Starklytics-For-STARKNET?tab=readme-ov-file',
        category: 'development'
      },
      {
        title: 'Neura',
        description: 'An AI-enhanced, automated DeFi aggregator for the Polygon ecosystem. Pools user funds into smart vaults that automatically rebalance across protocols like Aave, QuickSwap, and Balancer.',
        image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
        tags: ['TypeScript', 'CSS', 'HTML', 'JavaScript', 'DeFi'],
        link: 'https://github.com/John-04/Neura',
        category: 'development'
      },
      {
        title: 'Vibe-Heist',
        description: 'A multiplayer Web3 raid game where players raid AI-guarded vaults using meme distractions, place SOL bets, and mint legendary NFTs as trophies. Combines Solana blockchain with AI-powered guards.',
        image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=800',
        tags: ['TypeScript', 'CSS', 'Solana', 'Web3', 'Gaming'],
        link: 'https://github.com/John-04/Vibe-Heist',
        category: 'development'
      }
    ],
    analytics: [
      {
        title: 'Aerodrome Dashboard',
        description: 'A decentralized exchange (DEX) protocol dashboard built on Base blockchain. Addresses key challenges in DEX design including sustainable growth, liquidity provision, and stakeholder incentive balancing.',
        image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
        tags: ['TrinoSQL', 'Dune', 'Base', 'DEX Analytics'],
        link: 'https://dune.com/_john_/aerodrome-dashboard',
        category: 'analytics'
      },
      {
        title: 'ClankFun',
        description: 'Analytics dashboard for a decentralized platform on Base blockchain, designed as a "pump.fun" equivalent for meme coins. Enables discovery, launch, and trading of fair-launched meme tokens.',
        image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
        tags: ['TrinoSQL', 'Python', 'Dune', 'Meme Coins'],
        link: 'https://dune.com/_john_/clankfun',
        category: 'analytics'
      },
      {
        title: 'OdinBot Analysis',
        description: 'Performance analysis of a Solana-based copy-trading bot claiming to be the fastest in its category with up to 30% of trades landing in the same block as the copied wallet.',
        image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800',
        tags: ['TrinoSQL', 'Dune', 'Solana', 'Trading Bots'],
        link: 'https://dune.com/_john_/odin-bot-performance-dashboard',
        category: 'analytics'
      },
      {
        title: 'Uniswap V2 Analysis',
        description: 'Comprehensive analysis of Uniswap V2 decentralized exchange protocol, focusing on the Factory contract and automated market making mechanisms for ERC-20 token swaps.',
        image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800',
        tags: ['TrinoSQL', 'Dune', 'Uniswap', 'DeFi'],
        link: 'https://dune.com/_john_/uniswap-v2-paircreated-dashboard',
        category: 'analytics'
      },
      {
        title: 'EverythingData',
        description: 'Development of high-performance ad dashboard templates for Microsoft Ads, LinkedIn Ads, and Snapchat Ads, built in collaboration with EverythingData.',
        image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
        tags: ['Excel', 'Python', 'Looker Studio', 'Ad Analytics'],
        link: 'https://github.com/John-04/EverythingData-Dashboard',
        category: 'analytics'
      },
      {
        title: 'Adventure Works',
        description: 'Comprehensive sales analysis of the Adventure Works dataset with interactive dashboard. Explores revenue, profit margins, and transactions across yearly, monthly, and country-based trends.',
        image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800',
        tags: ['Excel', 'Sales Analytics', 'Business Intelligence'],
        link: 'https://github.com/John-04/Adventure-Works',
        category: 'analytics'
      },
      {
        title: 'Spotify Stream',
        description: 'Analysis of song performance and characteristics in music streaming context. Examines streams, danceability, and valence to understand trends and factors influencing popularity.',
        image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800',
        tags: ['Excel', 'Microsoft SQL Server', 'Music Analytics'],
        link: 'https://github.com/John-04/Spotify-Stream-Analysis',
        category: 'analytics'
      },
      {
        title: 'Water Quality Predictor',
        description: 'Machine learning project predicting river water dissolved oxygen levels. Includes data preprocessing, feature engineering, outlier detection, and Random Forest optimization.',
        image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800',
        tags: ['Python', 'Jupyter Notebook', 'Machine Learning', 'Environmental'],
        link: 'https://github.com/John-04/Dissolved-Oxygen-Predictor-River-Water-Quality-Enhancement',
        category: 'analytics'
      },
      {
        title: 'Walmart Sales Analysis',
        description: 'Exploration of Walmart sales data to understand top performing branches, products, sales trends, and customer behavior for improved sales strategies.',
        image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
        tags: ['MySQL', 'Retail Analytics', 'Sales Strategy'],
        link: 'https://github.com/John-04/Walmart-Sales-Analysis',
        category: 'analytics'
      },
      {
        title: 'WeRateDogs Analysis',
        description: 'Data gathering and cleaning project from WeRateDogs Twitter archive. Follows structured data science pipeline including acquisition, assessment, cleaning, and visualization.',
        image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=800',
        tags: ['Python', 'Jupyter Notebook', 'Social Media Analytics'],
        link: 'https://github.com/John-04/WeRateDogs-Analysis',
        category: 'analytics'
      },
      {
        title: 'Ford GoBike Analysis',
        description: 'Analysis of bike-sharing data focusing on ride frequency by gender, user type relationships, and member demographics using advanced visualization techniques.',
        image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=800',
        tags: ['Python', 'Jupyter Notebook', 'Transportation Analytics'],
        link: 'https://github.com/John-04/Fordgobike_Tripdata',
        category: 'analytics'
      },
      {
        title: 'USA Crime Analysis',
        description: 'Comprehensive analysis of crime data across the United States. Includes data cleaning, exploratory analysis, and pattern identification across states and cities.',
        image: 'https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=800',
        tags: ['Python', 'Jupyter Notebook', 'Crime Analytics'],
        link: 'https://github.com/John-04/USA-Crime',
        category: 'analytics'
      },
      {
        title: 'TMDb Movies Analysis',
        description: 'Exploratory data analysis on The Movie Database dataset. Includes data cleaning, filtering, and descriptive statistics computation for movie industry insights.',
        image: 'https://images.pexels.com/photos/436413/pexels-photo-436413.jpeg?auto=compress&cs=tinysrgb&w=800',
        tags: ['Python', 'Jupyter Notebook', 'Entertainment Analytics'],
        link: 'https://github.com/John-04/TMDb-MOVIE',
        category: 'analytics'
      },
      {
        title: 'World Happiness Analysis',
        description: 'Global happiness data analysis combining multiple years of datasets. Explores correlations between various factors and country-level happiness scores.',
        image: 'https://images.pexels.com/photos/1496372/pexels-photo-1496372.jpeg?auto=compress&cs=tinysrgb&w=800',
        tags: ['Python', 'Jupyter Notebook', 'Social Analytics'],
        link: 'https://github.com/John-04/World-Happiness',
        category: 'analytics'
      },
      {
        title: 'Data Cleaning with Excel',
        description: 'The project demonstrates the process of cleaning messy data using Excel. It covers techniques such as removing duplicate values, trimming whitespace, sorting, finding and replacing odd or null values, removing/unwrapping formulas, transposing data, and applying formatting.',
        image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
        tags: ['Excel', 'Data Cleaning', 'Data Processing'],
        link: 'https://github.com/John-04/Data-Cleaning-Excel',
        category: 'analytics'
      }
    ],
    visualization: [
      {
        title: 'HR Dashboard',
        description: 'Comprehensive human resources dashboard providing insights into employee metrics, performance indicators, and organizational analytics.',
        image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
        tags: ['Dashboard', 'HR Analytics', 'Visualization'],
        link: 'https://app.powerbi.com/groups/me/reports/3995f78d-2f22-45c4-a819-eb5c03540540/ReportSection?experience=power-bi',
        category: 'visualization'
      },
      {
        title: 'Real Estate',
        description: 'Interactive real estate analytics dashboard showcasing market trends, property values, and investment opportunities across different regions.',
        image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800',
        tags: ['Real Estate', 'Market Analysis', 'Dashboard'],
        link: 'https://app.powerbi.com/groups/me/reports/dd8f56a2-959e-498b-8f62-b57455b60905/ReportSection?experience=power-bi',
        category: 'visualization'
      },
      {
        title: 'Data Professional Survey Breakdown',
        description: 'Comprehensive analysis of data professional survey responses, examining industry trends, salary distributions, job satisfaction, and career progression patterns across different data roles.',
        image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
        tags: ['Power BI', 'Survey Analysis', 'Professional Analytics'],
        link: 'https://app.powerbi.com/groups/me/reports/ab3fefc9-0490-4caa-b8e4-fee3d3c7111d/ReportSection?experience=power-bi',
        category: 'visualization'
      },
      {
        title: 'Batsman Performance',
        description: 'Sports analytics dashboard analyzing cricket batsman performance metrics, statistics, and comparative analysis across different matches and seasons.',
        image: 'https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg?auto=compress&cs=tinysrgb&w=800',
        tags: ['Tableau', 'Sports Analytics', 'Performance Metrics'],
        link: 'https://public.tableau.com/app/profile/john.fashola/viz/BatsmanPerformance_16747947258510/BatsmanPerformance',
        category: 'visualization'
      },
      {
        title: 'COVID Dashboard',
        description: 'Comprehensive COVID-19 analytics dashboard tracking pandemic metrics, vaccination rates, and regional impact analysis with real-time data visualization.',
        image: 'https://images.pexels.com/photos/3951628/pexels-photo-3951628.jpeg?auto=compress&cs=tinysrgb&w=800',
        tags: ['Tableau', 'Public Health', 'Pandemic Analytics'],
        link: 'https://public.tableau.com/app/profile/john.fashola/viz/CovidDashboard_16704186275310/CovidDashboard',
        category: 'visualization'
      }
    ]
  };

  const categories = [
    { id: 'all', name: 'All Projects', count: Object.values(projects).flat().length },
    { id: 'development', name: 'Development', count: projects.development.length },
    { id: 'analytics', name: 'Analytics', count: projects.analytics.length },
    { id: 'visualization', name: 'Visualization', count: projects.visualization.length }
  ];

  const getFilteredProjects = () => {
    if (activeCategory === 'all') {
      return Object.values(projects).flat();
    }
    return projects[activeCategory as keyof typeof projects] || [];
  };

  const filteredProjects = getFilteredProjects();

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
            My Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore my comprehensive portfolio spanning blockchain development, data analytics, 
            and visualization projects that have delivered measurable impact across various industries.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center gap-2 ${
                activeCategory === category.id
                  ? 'bg-blue-800 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              <Filter size={16} />
              {category.name}
              <span className={`px-2 py-1 rounded-lg text-xs font-bold ${
                activeCategory === category.id
                  ? 'bg-blue-700 text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={`${project.category}-${project.title}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink size={16} className="text-blue-800" />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-800 text-white text-xs font-semibold rounded-lg capitalize">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-800 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-50 text-blue-800 text-xs font-medium rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-800 font-semibold hover:text-blue-900 transition-colors"
                >
                  {project.link.includes('github.com') ? (
                    <>
                      <Github size={16} className="mr-2" />
                      View Code
                    </>
                  ) : (
                    <>
                      <ExternalLink size={16} className="mr-2" />
                      View Project
                    </>
                  )}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 text-lg">No projects found in this category.</p>
          </motion.div>
        )}
      </section>
    </motion.main>
  );
};

export default Projects;