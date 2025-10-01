# EmailJS Setup Guide

To enable automatic email notifications for job inquiries, you need to set up EmailJS. Follow these steps:

## 1. Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## 3. Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Job Opportunity: {{job_title}}

Hello John,

You have received a new job inquiry through your portfolio website.

**Contact Details:**
Name: {{from_name}}
Email: {{from_email}}

**Job Details:**
Position: {{job_title}}
Budget/Offer: {{budget}}

**Description:**
{{job_description}}

**Reply to:** {{from_email}}

---
Sent from your portfolio contact form
```

4. Save the template and note down your **Template ID**

## 4. Get Your Public Key

1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** (also called User ID)

## 5. Update Your Code

Replace the placeholder values in `src/pages/Contact.tsx`:

```typescript
const serviceId = 'YOUR_SERVICE_ID'; // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your Template ID  
const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your Public Key
```

## 6. Test the Setup

1. Fill out the job form on your website
2. Submit the form
3. Check your email for the notification
4. Verify all details are correctly formatted

## 7. Email Template Variables

The following variables are available in your template:
- `{{from_name}}` - Applicant's name
- `{{from_email}}` - Applicant's email
- `{{job_title}}` - Job position title
- `{{job_description}}` - Job description
- `{{budget}}` - Budget/salary information
- `{{subject}}` - Email subject line

## 8. Troubleshooting

**Common Issues:**
- **403 Forbidden**: Check your public key and service configuration
- **Template not found**: Verify your template ID is correct
- **Service unavailable**: Ensure your email service is properly connected

**Free Plan Limits:**
- 200 emails per month
- EmailJS branding in emails
- Basic support

**Upgrade for:**
- More emails per month
- Remove EmailJS branding
- Priority support
- Custom domains

## 9. Security Notes

- Your EmailJS keys are safe to use in frontend code
- EmailJS handles the actual email sending securely
- No sensitive email credentials are exposed
- Rate limiting is built-in to prevent abuse

## 10. Alternative Setup

If you prefer a different email service, you can also use:
- Formspree
- Netlify Forms
- Custom backend API

The current implementation provides a robust, secure solution for receiving job inquiries directly to your email.