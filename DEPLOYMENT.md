# Deployment Guide

This document provides instructions for deploying the John Fashola Portfolio to various platforms.

## 🚀 Netlify Deployment

### Option 1: Direct Upload
1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

### Option 2: Git Integration
1. Push your code to GitHub
2. Connect your GitHub repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Option 3: Netlify CLI
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

## 🔧 Build Settings

- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Node Version**: 18.x

## 🌐 Custom Domain Setup

1. Purchase a domain (e.g., johnfashola.com)
2. In Netlify dashboard, go to Domain Settings
3. Add custom domain
4. Update DNS records as instructed

## 📧 Contact Form Setup

The contact forms currently use `mailto:` links. For production, consider:
- Netlify Forms
- Formspree
- EmailJS
- Custom backend API

## 🔒 Environment Variables

If you add environment variables:
1. Create `.env` file locally
2. Add variables to Netlify dashboard under Site Settings > Environment Variables

## 📊 Analytics Setup

Consider adding:
- Google Analytics
- Netlify Analytics
- Hotjar for user behavior

## 🚀 Performance Optimization

The site is already optimized with:
- Vite bundling
- Image optimization
- Code splitting
- Lazy loading

## 🔍 SEO Checklist

- ✅ Meta descriptions
- ✅ Proper heading structure
- ✅ Alt text for images
- ✅ Responsive design
- ✅ Fast loading times

## 📱 Testing

Test your deployment on:
- Desktop browsers (Chrome, Firefox, Safari, Edge)
- Mobile devices (iOS Safari, Android Chrome)
- Tablet devices

## 🐛 Troubleshooting

### Build Fails
- Check Node.js version (use 18.x)
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`

### Routing Issues
- Ensure `_redirects` file is in public folder with: `/* /index.html 200`

### Images Not Loading
- Verify image paths are correct
- Check if images are in public folder or imported properly

## 📞 Support

For deployment issues:
- Check Netlify documentation
- Review build logs
- Contact support if needed

---

Happy deploying! 🎉