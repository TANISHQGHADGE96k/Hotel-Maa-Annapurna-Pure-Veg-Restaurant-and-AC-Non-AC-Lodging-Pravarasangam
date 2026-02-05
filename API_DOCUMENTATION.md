# Hotel Maa Annapurna - API Documentation

Base URL: `http://localhost:5000/api` (Development) | `https://your-domain.com/api` (Production)

## Authentication

Admin endpoints require JWT token in Authorization header:
```
Authorization: Bearer <token>
```

---

## Public Endpoints

### Rooms

#### Get All Rooms
```http
GET /api/rooms
```

**Query Parameters:**
- `type` (optional): Filter by room type (`Single`, `Double`, `Family`)
- `ac_type` (optional): Filter by AC type (`AC`, `Non-AC`)
- `available` (optional): Filter by availability (`true`, `false`)

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Deluxe Single AC Room",
      "type": "Single",
      "ac_type": "AC",
      "price": 1200.00,
      "description": "Comfortable single room...",
      "facilities": ["Free Wi-Fi", "Hot & Cold Water", "TV"],
      "image_url": "/images/rooms/single-ac.jpg",
      "available": true,
      "created_at": "2024-01-01T00:00:00.000Z"
    }
  ]
}
```

#### Get Room by ID
```http
GET /api/rooms/:id
```

**Response:** Same as single room object above

---

### Reviews

#### Get Approved Reviews
```http
GET /api/reviews
```

**Query Parameters:**
- `page` (optional, default: 1): Page number
- `limit` (optional, default: 10): Items per page
- `sort` (optional, default: 'recent'): Sort by (`recent`, `highest`, `lowest`)

**Response:**
```json
{
  "success": true,
  "data": {
    "reviews": [
      {
        "id": 1,
        "name": "Rajesh Kumar",
        "location": "Pune, Maharashtra",
        "rating": 5,
        "review_text": "Excellent service...",
        "created_at": "2024-01-01T00:00:00.000Z"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 25,
      "totalPages": 3
    },
    "avgRating": 4.5
  }
}
```

#### Submit Review (QR-Accessible)
```http
POST /api/reviews
```

**Request Body:**
```json
{
  "name": "John Doe",
  "location": "Mumbai, Maharashtra",
  "rating": 5,
  "review_text": "Amazing experience!"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you for your review! It will be visible after admin approval.",
  "data": {
    "id": 26
  }
}
```

**Rate Limiting:** 3 submissions per hour per IP

---

### Gallery

#### Get Gallery Images
```http
GET /api/gallery
```

**Query Parameters:**
- `category` (optional): Filter by category (`Hotel`, `Rooms`, `Food`)

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "category": "Hotel",
      "image_url": "/images/gallery/hotel-exterior.jpg",
      "caption": "Hotel Front View",
      "created_at": "2024-01-01T00:00:00.000Z"
    }
  ]
}
```

---

### Contact

#### Submit Contact Form
```http
POST /api/contact
```

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 9876543210",
  "message": "I would like to inquire about..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you for contacting us! We will get back to you soon.",
  "data": {
    "id": 10
  }
}
```

**Rate Limiting:** 5 submissions per hour per IP

---

## Admin Endpoints (Protected)

### Admin Authentication

#### Login
```http
POST /api/admin/login
```

**Request Body:**
```json
{
  "username": "admin",
  "password": "Admin@123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": 1,
      "username": "admin",
      "email": "admin@hotelmaaannapurna.com"
    }
  }
}
```

**Rate Limiting:** 5 attempts per 15 minutes per IP

---

### Dashboard

#### Get Dashboard Analytics
```http
GET /api/admin/dashboard
```

**Headers:** `Authorization: Bearer <token>`

**Response:**
```json
{
  "success": true,
  "data": {
    "rooms": {
      "total": 5,
      "available": 4
    },
    "reviews": {
      "total": 25,
      "pending": 3,
      "approved": 22,
      "avgRating": 4.5
    },
    "gallery": {
      "total": 10
    },
    "contacts": {
      "total": 15
    },
    "recentReviews": [...]
  }
}
```

---

### Room Management

#### Create Room
```http
POST /api/rooms
```

**Headers:** `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "name": "Premium Suite",
  "type": "Family",
  "ac_type": "AC",
  "price": 3000,
  "description": "Luxurious family suite",
  "facilities": ["Free Wi-Fi", "TV", "Mini Fridge"],
  "image_url": "/images/rooms/premium-suite.jpg",
  "available": true
}
```

#### Update Room
```http
PUT /api/rooms/:id
```

**Headers:** `Authorization: Bearer <token>`

**Request Body:** Same as Create Room

#### Delete Room
```http
DELETE /api/rooms/:id
```

**Headers:** `Authorization: Bearer <token>`

---

### Review Management

#### Get All Reviews (Including Pending)
```http
GET /api/reviews/admin/all
```

**Headers:** `Authorization: Bearer <token>`

**Query Parameters:**
- `status` (optional): Filter by status (`approved`, `pending`)

#### Approve Review
```http
PUT /api/reviews/:id/approve
```

**Headers:** `Authorization: Bearer <token>`

#### Delete Review
```http
DELETE /api/reviews/:id
```

**Headers:** `Authorization: Bearer <token>`

---

### Gallery Management

#### Upload Gallery Image
```http
POST /api/gallery
```

**Headers:** `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "category": "Food",
  "image_url": "/images/gallery/special-thali.jpg",
  "caption": "Special Maharashtrian Thali"
}
```

#### Delete Gallery Image
```http
DELETE /api/gallery/:id
```

**Headers:** `Authorization: Bearer <token>`

---

### Contact Management

#### Get All Contact Submissions
```http
GET /api/contact/all
```

**Headers:** `Authorization: Bearer <token>`

---

## Error Responses

All endpoints return errors in this format:

```json
{
  "success": false,
  "message": "Error description here"
}
```

### Common HTTP Status Codes

- `200` - Success
- `201` - Created
- `400` - Bad Request (validation error)
- `401` - Unauthorized (invalid token or missing authentication)
- `404` - Not Found
- `409` - Conflict (duplicate entry)
- `429` - Too Many Requests (rate limit exceeded)
- `500` - Internal Server Error

---

## Rate Limiting

| Endpoint | Limit |
|----------|-------|
| General API | 100 requests per 15 minutes |
| Review Submission | 3 requests per hour |
| Contact Form | 5 requests per hour |
| Admin Login | 5 attempts per 15 minutes |

---

## Security Features

1. **SQL Injection Protection**: All queries use parameterized statements
2. **XSS Protection**: Input sanitization with express-validator
3. **CORS**: Configured for frontend domain only
4. **Helmet.js**: Security HTTP headers
5. **JWT Authentication**: Secure admin access with token expiry (24 hours)
6. **Rate Limiting**: Prevents spam and brute force attacks

---

## Testing the API

### Using cURL

```bash
# Get all rooms
curl http://localhost:5000/api/rooms

# Submit a review
curl -X POST http://localhost:5000/api/reviews \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","location":"Test City","rating":5,"review_text":"Great hotel!"}'

# Admin login
curl -X POST http://localhost:5000/api/admin/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"Admin@123"}'

# Get dashboard (with token)
curl http://localhost:5000/api/admin/dashboard \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

### Using Postman

1. Import the API endpoints
2. Set base URL: `http://localhost:5000/api`
3. For admin endpoints:
   - Add header: `Authorization: Bearer <your-token>`
   - Get token from login endpoint first

---

## Notes

- All timestamps are in ISO 8601 format (UTC)
- Maximum review text length: 1000 characters
- Maximum image URL length: 255 characters
- Review ratings must be between 1-5
- Phone numbers stored as strings to support international formats
