# 🚀 Quick Start Guide - Hotel Maa Annapurna Website

## ✅ What You Have Now

Your website has been **converted from React to vanilla JavaScript**! It now works with Live Server without needing Node.js for the frontend.

---

## 📋 Complete Setup Instructions

### **Part 1: Backend Setup (One-time)**

#### **Step 1: Install Backend Dependencies**

Open a terminal and run:

```bash
cd c:\Users\TANISHQ\OneDrive\Desktop\website\hotel-maa-annapurna-backend
npm install
```

This installs all required packages.

#### **Step 2: Set Up MySQL Database**

1. **Start MySQL** (XAMPP or MySQL Workbench)

2. **Create the database:**
   ```sql
   CREATE DATABASE hotel_maa_annapurna;
   ```

3. **Import the schema:**
   ```bash
   mysql -u root -p hotel_maa_annapurna < schema.sql
   ```
   
   Or manually run the SQL in `schema.sql` file.

4. **Add sample room data:**
   ```bash
   mysql -u root -p hotel_maa_annapurna < seed-rooms.sql
   ```

#### **Step 3: Configure Backend**

Your `.env` file is already configured:
- Database: `hotel_maa_annapurna`
- Port: `5000`
- CORS: Allows Live Server access ✅

#### **Step 4: Start Backend Server**

```bash
cd c:\Users\TANISHQ\OneDrive\Desktop\website\hotel-maa-annapurna-backend
npm start
```

You should see:
```
🏨 Hotel Maa Annapurna API Server
Server running on: http://localhost:5000
```

**Keep this terminal open!** The backend needs to run while you use the website.

---

### **Part 2: Frontend Setup**

#### **Method 1: Live Server (Recommended)**

1. **Open VS Code**
2. **Right-click** on `hotel-maa-annapurna-frontend/index.html`
3. Select **"Open with Live Server"**
4. Website opens at `http://127.0.0.1:5500` ✨

#### **Method 2: Direct File Opening**

1. Navigate to `hotel-maa-annapurna-frontend`
2. **Double-click** `index.html`
3. Opens in your default browser

---

## 🧪 Testing Your Setup

### **Test 1: API Connection**

1. Open `test-api.html` in your browser
2. Click **"Test Backend Connection"**
3. Should show: ✅ Backend is running!

### **Test 2: Main Website**

1. Open `index.html` with Live Server
2. Navigate to **Rooms** page
3. You should see:
   - **AC Rooms** section with 3 rooms
   - **Non-AC Rooms** section with 3 rooms

---

## 📁 File Structure

```
website/
├── hotel-maa-annapurna-frontend/  (Vanilla JS - No Node.js needed!)
│   ├── index.html                  ← Open this with Live Server
│   ├── test-api.html              ← Use this to test backend
│   ├── app.js                     ← Router
│   ├── config.js                  ← API URL configuration
│   ├── styles.css                 ← Custom styles
│   ├── components/                ← Header, Footer, Loader
│   ├── pages/                     ← All page modules
│   ├── services/                  ← API service
│   └── utils/                     ← Constants
│
└── hotel-maa-annapurna-backend/   (Node.js - Needs to be running)
    ├── server.js                  ← Main server file
    ├── schema.sql                 ← Database structure
    ├── seed-rooms.sql             ← Sample room data
    ├── .env                       ← Configuration (CORS fixed!)
    └── package.json               ← Dependencies
```

---

## 🔧 Troubleshooting

### **Problem: "Loading rooms... If this persists, please contact us"**

**Cause:** Backend not running or database empty

**Fix:**
1. Make sure backend is running (Step 4 above)
2. Check if rooms exist in database:
   ```sql
   USE hotel_maa_annapurna;
   SELECT * FROM rooms;
   ```
3. If empty, run: `mysql -u root -p hotel_maa_annapurna < seed-rooms.sql`

### **Problem: CORS Errors in Console**

**Cause:** Backend not allowing Live Server URL

**Fix:** Already done! ✅ Backend now accepts:
- `http://localhost:5173`
- `http://127.0.0.1:5500`
- `http://localhost:5500`
- `file://` protocol

### **Problem: "Cannot connect to database"**

**Fix:**
1. Start MySQL (XAMPP Control Panel → Start MySQL)
2. Check `.env` file has correct credentials:
   ```
   DB_USER=root
   DB_PASSWORD=        (leave empty if no password)
   DB_NAME=hotel_maa_annapurna
   ```

### **Problem: Backend crashes on start**

**Fix:**
```bash
# Delete node_modules and reinstall
cd hotel-maa-annapurna-backend
rmdir /s node_modules
npm install
npm start
```

---

## 📞 Contact Information Updated

Your website now shows:
- **Phone:** +91 92604 37972 ✅
- **WhatsApp:** +91 92604 37972 ✅
- **Location:** Hotel Pet Pooja, Pravarasangam ✅

---

## ✨ Quick Command Reference

### **Start Backend:**
```bash
cd c:\Users\TANISHQ\OneDrive\Desktop\website\hotel-maa-annapurna-backend
npm start
```

### **Open Frontend:**
- Right-click `index.html` → Open with Live Server

### **Test API:**
- Open `test-api.html` in browser

### **Add Sample Data:**
```bash
mysql -u root -p hotel_maa_annapurna < seed-rooms.sql
```

---

## 🎉 Success Checklist

- [ ] Node.js installed
- [ ] MySQL running
- [ ] Database created (`hotel_maa_annapurna`)
- [ ] Schema imported (`schema.sql`)
- [ ] Sample rooms added (`seed-rooms.sql`)
- [ ] Backend dependencies installed (`npm install`)
- [ ] Backend running (`npm start`)
- [ ] Frontend opens with Live Server
- [ ] Rooms page shows AC and Non-AC sections
- [ ] Contact info shows correct phone number

---

## 🚀 You're Ready!

1. **Start backend** (one terminal, keep open)
2. **Open index.html** with Live Server
3. **Enjoy your website!** 🎊

**Note:** You only need Node.js for the **backend server**. The frontend runs directly in the browser! 🌐
