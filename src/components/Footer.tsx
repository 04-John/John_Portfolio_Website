import React from 'react';
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'Email',
      href: 'mailto:fashjohn04@gmail.com',
      icon: Mail,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/john-fashola-67a149228/',
      icon: Linkedin,
    },
    {
      name: 'GitHub',
      href: 'https://github.com/John-04',
      icon: Github,
    },
    {
      name: 'Dune',
      href: 'https://dune.com/_john_',
      icon: ExternalLink,
    },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-bold text-gray-900 mb-2">John Fashola</h3>
            <p className="text-gray-600 text-sm">
              Data & Product Analyst | Educator | On-Chain Analyst
            </p>
          </div>

          <div className="flex items-center space-x-6">
            {socialLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-xl shadow-sm hover:shadow-md hover:text-blue-800 transition-all duration-200"
                  aria-label={link.name}
                >
                  <IconComponent size={20} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 John Fashola. Crafted with care and attention to detail.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;