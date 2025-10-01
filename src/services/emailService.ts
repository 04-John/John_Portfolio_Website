import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_CONFIG = {
  serviceId: 'service_1tj571f',
  templateId: 'template_xq48k3j',
  publicKey: 'dKqFnqA2_Bcm5EeR4',
};

export interface JobFormData {
  name: string;
  email: string;
  jobTitle: string;
  description: string;
  budget: string;
}

export const sendJobEmail = async (formData: JobFormData): Promise<void> => {
  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    job_title: formData.jobTitle,
    job_description: formData.description,
    budget: formData.budget || 'Not specified',
    to_email: 'fashjohn04@gmail.com',
    subject: `New Job Opportunity: ${formData.jobTitle}`,
    reply_to: formData.email,
  };

  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams,
      EMAILJS_CONFIG.publicKey
    );
    
    console.log('Email sent successfully:', response);
    return response;
  } catch (error) {
    console.error('Email sending failed:', error);
    throw error;
  }
};

// Initialize EmailJS (call this once in your app)
export const initializeEmailJS = () => {
  emailjs.init(EMAILJS_CONFIG.publicKey);
};