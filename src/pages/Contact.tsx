import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, Mail, Linkedin, Github, ExternalLink, Send, User, DollarSign } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [isJobModalOpen, setIsJobModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [jobFormData, setJobFormData] = useState({
    name: '',
    email: '',
    jobTitle: '',
    description: '',
    budget: ''
  });

  const socialLinks = [
    {
      name: 'Email',
      href: 'mailto:fashjohn04@gmail.com',
      icon: Mail,
      description: 'Send me a direct message'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/john-fashola-67a149228/',
      icon: Linkedin,
      description: 'Connect professionally'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/John-04',
      icon: Github,
      description: 'View my code repositories'
    },
    {
      name: 'Dune Analytics',
      href: 'https://dune.com/_john_',
      icon: ExternalLink,
      description: 'Check out my blockchain analytics'
    },
  ];

  const handleJobFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setJobFormData({
      ...jobFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleJobFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // EmailJS configuration
    const serviceId = 'service_1tj571f';
    const templateId = 'template_xq48k3j';
    const publicKey = 'dKqFnqA2_Bcm5EeR4';

    const templateParams = {
      from_name: jobFormData.name,
      from_email: jobFormData.email,
      job_title: jobFormData.jobTitle,
      job_description: jobFormData.description,
      budget: jobFormData.budget,
      to_email: 'fashjohn04@gmail.com',
      subject: `New Job Opportunity: ${jobFormData.jobTitle}`,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully:', response);
        setSubmitStatus('success');
        setJobFormData({ name: '', email: '', jobTitle: '', description: '', budget: '' });
        
        // Close modal after 2 seconds
        setTimeout(() => {
          setIsJobModalOpen(false);
          setSubmitStatus('idle');
        }, 2000);
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const closeModal = () => {
    setIsJobModalOpen(false);
    setSubmitStatus('idle');
  };

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
            Let's Connect
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your data into actionable insights? Whether you're looking to 
            schedule a consultation or have an exciting opportunity, I'd love to hear from you.
          </p>
        </motion.div>

        {/* Main Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-20"
        >
          <a
            href="https://calendly.com/fashjohn04/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-800 text-white px-12 py-6 rounded-xl font-bold text-lg hover:bg-blue-900 transition-colors flex items-center justify-center gap-3 group"
          >
            <Calendar size={24} />
            Book a Meeting
          </a>
          
          <button
            onClick={() => setIsJobModalOpen(true)}
            className="border-2 border-blue-800 text-blue-800 px-12 py-6 rounded-xl font-bold text-lg hover:bg-blue-800 hover:text-white transition-colors flex items-center justify-center gap-3"
          >
            <Briefcase size={24} />
            Have a Job?
          </button>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Connect With Me
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all text-center group"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-xl mb-4 group-hover:bg-blue-100 transition-colors">
                    <IconComponent size={32} className="text-blue-800" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-800 transition-colors">
                    {link.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{link.description}</p>
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* What to Expect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="bg-gray-50 p-12 rounded-xl text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            What You Can Expect
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-4">
                <Send size={24} className="text-blue-800" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Quick Response</h3>
              <p className="text-gray-600">I'll get back to you within 24 hours with a thoughtful response.</p>
            </div>
            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-4">
                <User size={24} className="text-blue-800" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Personalized Approach</h3>
              <p className="text-gray-600">Every project is unique, and I'll tailor my approach to your specific needs.</p>
            </div>
            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-4">
                <DollarSign size={24} className="text-blue-800" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Transparent Pricing</h3>
              <p className="text-gray-600">Clear, upfront pricing with no hidden fees or surprises.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Job Modal */}
      {isJobModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-gray-900">Job Opportunity</h2>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleJobFormSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={jobFormData.name}
                    onChange={handleJobFormChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-800 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={jobFormData.email}
                    onChange={handleJobFormChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-800 focus:border-transparent"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="jobTitle" className="block text-sm font-semibold text-gray-700 mb-2">
                  Job Title *
                </label>
                <input
                  type="text"
                  id="jobTitle"
                  name="jobTitle"
                  required
                  value={jobFormData.jobTitle}
                  onChange={handleJobFormChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-800 focus:border-transparent"
                  placeholder="e.g., Senior Data Analyst, Product Analyst"
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
                  Job Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  rows={4}
                  value={jobFormData.description}
                  onChange={handleJobFormChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-800 focus:border-transparent resize-none"
                  placeholder="Tell me about the role, requirements, and what you're looking for..."
                />
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">
                  Budget/Offer
                </label>
                <input
                  type="text"
                  id="budget"
                  name="budget"
                  value={jobFormData.budget}
                  onChange={handleJobFormChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-800 focus:border-transparent"
                  placeholder="e.g., $80,000 - $100,000, Project-based: $5,000"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : submitStatus === 'success'
                      ? 'bg-green-600 hover:bg-green-700'
                      : submitStatus === 'error'
                      ? 'bg-red-600 hover:bg-red-700'
                      : 'bg-blue-800 hover:bg-blue-900'
                  } text-white`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                      Sending...
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      <Send size={16} />
                      Sent Successfully!
                    </>
                  ) : submitStatus === 'error' ? (
                    <>
                      <Send size={16} />
                      Failed - Try Again
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Job Details
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  disabled={isSubmitting}
                  className={`flex-1 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold transition-colors ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'
                  }`}
                >
                  Cancel
                </button>
              </div>

              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl">
                  <p className="text-red-700 text-sm">
                    Failed to send email. Please try again or contact me directly at{' '}
                    <a href="mailto:fashjohn04@gmail.com" className="underline">
                      fashjohn04@gmail.com
                    </a>
                  </p>
                </div>
              )}

              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl">
                  <p className="text-green-700 text-sm">
                    Your job details have been sent successfully! I'll get back to you within 24 hours.
                  </p>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      )}
    </motion.main>
  );
};

export default Contact;