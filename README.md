# Hotel Maa Annapurna - Complete Website

A modern hotel website with booking system, restaurant menu, gallery, and review management.

## 🌟 Features

- **Rooms Management**: Display AC and Non-AC rooms with pricing
- **Restaurant Menu**: Pure vegetarian menu with meal timings
- **Gallery**: Image gallery for hotel, rooms, and food
- **Reviews System**: Customer reviews and ratings
- **Contact Form**: Get in touch with the hotel
- **Responsive Design**: Works on all devices
- **Backend API**: Full-featured REST API

## 🚀 Quick Start

### Option 1: Automated Setup (Recommended)

1. **Set up database:**
   - Double-click `SETUP-DATABASE.bat`
   - Enter your MySQL root password
   
2. **Start backend:**
   - Double-click `START-BACKEND.bat`
   - Keep the window open
   
3. **Open frontend:**
   - Right-click `hotel-maa-annapurna-frontend/index.html`
   - Select "Open with Live Server"

### Option 2: Manual Setup

See `QUICK-START.md` for detailed instructions.

## 📋 Requirements

- **Backend**: Node.js 16+ and MySQL 8+
- **Frontend**: Any modern web browser (no build required!)

## 🛠️ Technology Stack

### Frontend (Vanilla JavaScript)
- HTML5, CSS3, JavaScript (ES6+)
- Tailwind CSS (CDN)
- Font Awesome Icons
- Google Fonts

### Backend (Node.js)
- Express.js
- MySQL2
- JWT Authentication
- bcrypt for password hashing
- CORS enabled

## 📁 Project Structure

```
website/
├── hotel-maa-annapurna-frontend/    # Frontend (Vanilla JS)
│   ├── index.html                    # Main entry point
│   ├── test-api.html                 # API testing page
│   ├── app.js                        # Router & navigation
│   ├── config.js                     # Configuration
│   ├── styles.css                    # Custom styles
│   ├── components/                   # Reusable components
│   │   ├── header.js
│   │   ├── footer.js
│   │   ├── loader.js
│   │   └── star-rating.js
│   ├── pages/                        # Page modules
│   │   ├── home.js
│   │   ├── about.js
│   │   ├── rooms.js
│   │   ├── restaurant.js
│   │   ├── services.js
│   │   ├── gallery.js
│   │   ├── contact.js
│   │   ├── reviews.js
│   │   └── add-review.js
│   ├── services/                     # API services
│   │   └── api.js
│   └── utils/                        # Utilities
│       └── constants.js
│
└── hotel-maa-annapurna-backend/     # Backend (Node.js)
    ├── server.js                     # Main server
    ├── schema.sql                    # Database schema
    ├── seed-rooms.sql                # Sample data
    ├── config/                       # Configuration
    ├── controllers/                  # Route controllers
    ├── middleware/                   # Custom middleware
    └── routes/                       # API routes
```

## 🔌 API Endpoints

### Rooms
- `GET /api/rooms` - Get all rooms
- `GET /api/rooms/:id` - Get room by ID

### Gallery
- `GET /api/gallery` - Get all images
- `GET /api/gallery?category=Hotel` - Filter by category

### Reviews
- `GET /api/reviews` - Get all reviews
- `POST /api/reviews` - Submit a review

### Contact
- `POST /api/contact` - Submit contact form

### Admin (Protected)
- `POST /api/admin/login` - Admin login
- `GET /api/admin/dashboard` - Dashboard stats
- Rooms, Gallery, Reviews management

## 🎨 Features Highlights

### Frontend
✅ No build process required  
✅ Works with Live Server  
✅ Hash-based routing (#/about, #/rooms, etc.)  
✅ Custom color palette (Brown, Gold, Beige)  
✅ Responsive design  
✅ Dynamic content from backend  
✅ Form validation  
✅ Loading states  

### Backend
✅ RESTful API  
✅ MySQL database  
✅ JWT authentication  
✅ Input validation  
✅ Rate limiting  
✅ CORS configured  
✅ Error handling  
✅ Security headers  

## 📞 Contact Information

- **Hotel:** Hotel Maa Annapurna
- **Location:** Pravarasangam, Maharashtra, India
- **Phone:** +91 92604 37972
- **Email:** info@hotelmaaannapurna.com

## 🔧 Configuration

### Backend (.env)
```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=hotel_maa_annapurna
JWT_SECRET=your_secret_key
FRONTEND_URL=http://localhost:5173,http://127.0.0.1:5500
```

### Frontend (config.js)
```javascript
const CONFIG = {
    API_URL: 'http://localhost:5000/api',
    SITE_URL: 'http://localhost:5173'
};
```

## 🧪 Testing

1. **Test API Connection:**
   - Open `test-api.html`
   - Click test buttons to verify backend

2. **Manual Testing:**
   - Navigate all pages
   - Test contact form
   - Submit a review
   - Check rooms display

## 📝 Development

### Add New Room
```sql
INSERT INTO rooms (roomNumber, roomType, acType, price, amenities, isAvailable)
VALUES ('104', 'Double', 'AC', 1500, 'Wi-Fi, TV, AC', 1);
```

### Add Gallery Image
```sql
INSERT INTO gallery (title, imageUrl, category)
VALUES ('Hotel Lobby', 'https://example.com/image.jpg', 'Hotel');
```

## 🐛 Troubleshooting

See `QUICK-START.md` for common issues and solutions.

## 📄 License

This project is private and proprietary.

## 👨‍💻 Author

Hotel Maa Annapurna Team

---

**Enjoy running your hotel website! 🏨**
