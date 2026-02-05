# Hotel Maa Annapurna - Deployment Guide

## Prerequisites for Deployment

- Node.js 18+ installed on server
- MySQL 8.0+ database
- Domain name (optional but recommended)

## Production Deployment Steps

### 1. Database Setup

**Option A: Using Cloud MySQL (Recommended)**
- Sign up for [PlanetScale](https://planetscale.com/), [Railway](https://railway.app/), or [AWS RDS](https://aws.amazon.com/rds/)
- Create a new MySQL database
- Save the connection credentials

**Option B: Self-Hosted MySQL**
- Ensure MySQL 8.0+ is installed on your server
- Run the schema.sql file:
  ```bash
  mysql -u root -p < schema.sql
  ```

### 2. Backend Deployment

**Option A: Deploy to Railway (Recommended)**

1. Create account at [Railway.app](https://railway.app/)
2. Install Railway CLI:
   ```bash
   npm install -g @railway/cli
   ```
3. Login and deploy:
   ```bash
   cd hotel-maa-annapurna-backend
   railway login
   railway init
   railway up
   ```
4. Add environment variables in Railway dashboard:
   - `DB_HOST` - Your MySQL host
   - `DB_USER` - Your MySQL username
   - `DB_PASSWORD` - Your MySQL password
   - `DB_NAME` - `hotel_maa_annapurna`
   - `JWT_SECRET` - Generate a random 32-character string
   - `FRONTEND_URL` - Your frontend URL (e.g., `https://yourdomain.com`)
   - `NODE_ENV` - `production`

**Option B: Deploy to Render**

1. Create account at [Render.com](https://render.com/)
2. Create new Web Service
3. Connect your GitHub repository
4. Set build command: `npm install`
5. Set start command: `npm start`
6. Add environment variables in Render dashboard (same as above)

**Option C: Deploy to VPS (DigitalOcean, AWS EC2, etc.)**

1. SSH into your server
2. Install Node.js and MySQL
3. Clone your repository
4. Install dependencies:
   ```bash
   cd hotel-maa-annapurna-backend
   npm install --production
   ```
5. Create `.env` file with production values
6. Install PM2 for process management:
   ```bash
   npm install -g pm2
   pm2 start server.js --name hotel-api
   pm2 startup
   pm2 save
   ```
7. Setup Nginx reverse proxy (optional but recommended)

### 3. Frontend Deployment

**Option A: Deploy to Vercel (Recommended)**

1. Create account at [Vercel.com](https://vercel.com/)
2. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. Deploy:
   ```bash
   cd hotel-maa-annapurna-frontend
   vercel
   ```
4. Set environment variables in Vercel dashboard:
   - `VITE_API_URL` - Your backend URL (e.g., `https://api.yourdomain.com/api`)
   - `VITE_SITE_URL` - Your frontend URL

**Option B: Deploy to Netlify**

1. Create account at [Netlify.com](https://www.netlify.com/)
2. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```
3. Build and deploy:
   ```bash
   cd hotel-maa-annapurna-frontend
   npm run build
   netlify deploy --prod
   ```
4. Set environment variables in Netlify dashboard (same as above)

**Option C: Deploy to VPS**

1. Build the frontend:
   ```bash
   cd hotel-maa-annapurna-frontend
   npm install
   npm run build
   ```
2. Copy the `dist` folder to your server
3. Serve using Nginx:
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       
       root /var/www/hotel-frontend/dist;
       index index.html;
       
       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```

### 4. Post-Deployment Steps

1. **Update Admin Credentials**
   - Login to admin panel at `/admin/login`
   - Change default username and password immediately

2. **Generate QR Code for Reviews**
   - Use a QR code generator (e.g., [QR Code Generator](https://www.qr-code-generator.com/))
   - Create QR code for: `https://yourdomain.com/add-review`
   - Print and display at hotel reception and restaurant tables

3. **Add Hotel Images**
   - Upload real hotel images through admin panel
   - Update Gallery with actual property photos
   - Replace placeholder room images

4. **Test All Features**
   - Test room booking CTAs
   - Submit a test review via QR code
   - Test contact form
   - Verify WhatsApp and call buttons work
   - Test admin panel functionality

5. **Setup SSL Certificate (HTTPS)**
   - For Vercel/Netlify: SSL is automatic
   - For VPS: Use Let's Encrypt with Certbot
     ```bash
     sudo certbot --nginx -d yourdomain.com
     ```

6. **Configure Google Maps**
   - Get Google Maps embed code for your hotel location
   - Update `HOTEL_INFO.googleMapsUrl` in `constants.js`

7. **Update Contact Information**
   - Update phone number, email, WhatsApp number in `constants.js`
   - Verify all contact methods are working

### 5. SEO Optimization

1. **Submit to Google Search Console**
   - Add and verify your domain
   - Submit sitemap (can be generated using tools)

2. **Update Social Media Links**
   - Add your Facebook, Instagram, Twitter URLs in Footer component

3. **Schema Markup**
   - Already included in SEO component
   - Verify using [Google Rich Results Test](https://search.google.com/test/rich-results)

### 6. Monitoring and Maintenance

1. **Setup Error Monitoring**
   - Consider using [Sentry](https://sentry.io/) for error tracking
   
2. **Database Backups**
   - Setup automated daily backups of MySQL database
   
3. **Regular Updates**
   - Keep Node.js dependencies updated
   - Monitor security vulnerabilities

### 7. Performance Optimization

1. **Enable Caching**
   - Configure browser caching in Nginx/hosting platform
   
2. **Image Optimization**
   - Use WebP format for images
   - Compress images before uploading
   
3. **CDN (Optional)**
   - Use Cloudflare or similar CDN for better performance

## Environment Variables Summary

### Backend (.env)
```env
PORT=5000
NODE_ENV=production
DB_HOST=your_db_host
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=hotel_maa_annapurna
JWT_SECRET=your_random_32_char_secret
FRONTEND_URL=https://yourdomain.com
```

### Frontend (.env)
```env
VITE_API_URL=https://api.yourdomain.com/api
VITE_SITE_URL=https://yourdomain.com
```

## Troubleshooting

### Database Connection Issues
- Verify MySQL server is running
- Check firewall rules allow MySQL connections
- Confirm database credentials are correct

### CORS Errors
- Ensure `FRONTEND_URL` in backend matches actual frontend URL
- Check CORS configuration in `server.js`

### API Not Responding
- Check backend server logs
- Verify environment variables are set correctly
- Ensure database connection is successful

### Build Failures
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check Node.js version compatibility

## Support

For deployment issues or questions:
- Check application logs
- Review error messages carefully
- Ensure all environment variables are set correctly

---

**Your website should now be live and fully functional!** 🎉
