-- Hotel Maa Annapurna Database Schema
-- MySQL 8.0+

DROP DATABASE IF EXISTS hotel_maa_annapurna;
CREATE DATABASE hotel_maa_annapurna CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE hotel_maa_annapurna;

-- Table: rooms
CREATE TABLE rooms (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    type ENUM('Single', 'Double', 'Family') NOT NULL,
    ac_type ENUM('AC', 'Non-AC') NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    description TEXT,
    facilities JSON,
    image_url VARCHAR(255),
    available BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_type (type),
    INDEX idx_ac_type (ac_type),
    INDEX idx_available (available)
) ENGINE=InnoDB;

-- Table: reviews
CREATE TABLE reviews (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    location VARCHAR(100) NOT NULL,
    rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
    review_text TEXT NOT NULL,
    approved BOOLEAN DEFAULT FALSE,
    ip_address VARCHAR(45),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_approved (approved),
    INDEX idx_rating (rating),
    INDEX idx_created_at (created_at)
) ENGINE=InnoDB;

-- Table: gallery
CREATE TABLE gallery (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category ENUM('Hotel', 'Rooms', 'Food') NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    caption VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_category (category)
) ENGINE=InnoDB;

-- Table: admin_users
CREATE TABLE admin_users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- Table: contact_submissions
CREATE TABLE contact_submissions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_created_at (created_at)
) ENGINE=InnoDB;

-- Insert sample rooms
INSERT INTO rooms (name, type, ac_type, price, description, facilities, image_url, available) VALUES
('Deluxe Single AC Room', 'Single', 'AC', 1200.00, 'Comfortable single room with air conditioning, perfect for solo travelers.', 
 '["Free Wi-Fi", "Hot & Cold Water", "TV", "Attached Bathroom", "24/7 Room Service"]', 
 '/images/rooms/single-ac.jpg', TRUE),
('Standard Single Non-AC Room', 'Single', 'Non-AC', 800.00, 'Budget-friendly single room with all basic amenities.', 
 '["Free Wi-Fi", "Hot & Cold Water", "Attached Bathroom", "Fan"]', 
 '/images/rooms/single-non-ac.jpg', TRUE),
('Deluxe Double AC Room', 'Double', 'AC', 1800.00, 'Spacious double room with modern amenities and air conditioning.', 
 '["Free Wi-Fi", "Hot & Cold Water", "TV", "Attached Bathroom", "24/7 Room Service", "Mini Fridge"]', 
 '/images/rooms/double-ac.jpg', TRUE),
('Standard Double Non-AC Room', 'Double', 'Non-AC', 1200.00, 'Affordable double room suitable for couples.', 
 '["Free Wi-Fi", "Hot & Cold Water", "Attached Bathroom", "Fan", "TV"]', 
 '/images/rooms/double-non-ac.jpg', TRUE),
('Family Suite AC', 'Family', 'AC', 2500.00, 'Large family suite with multiple beds and premium facilities.', 
 '["Free Wi-Fi", "Hot & Cold Water", "TV", "Attached Bathroom", "24/7 Room Service", "Mini Fridge", "Seating Area", "Multiple Beds"]', 
 '/images/rooms/family-suite.jpg', TRUE);

-- Insert sample gallery images
INSERT INTO gallery (category, image_url, caption) VALUES
('Hotel', '/images/gallery/hotel-exterior.jpg', 'Hotel Maa Annapurna - Front View'),
('Hotel', '/images/gallery/hotel-lobby.jpg', 'Our Welcoming Lobby'),
('Hotel', '/images/gallery/hotel-parking.jpg', 'Free Parking Facility'),
('Rooms', '/images/gallery/room-1.jpg', 'Deluxe AC Room'),
('Rooms', '/images/gallery/room-2.jpg', 'Family Suite'),
('Rooms', '/images/gallery/room-3.jpg', 'Standard Room'),
('Food', '/images/gallery/food-thali.jpg', 'Traditional Veg Thali'),
('Food', '/images/gallery/food-dosa.jpg', 'South Indian Delicacies'),
('Food', '/images/gallery/food-paneer.jpg', 'Special Paneer Dishes'),
('Food', '/images/gallery/food-sweets.jpg', 'Fresh Sweets');

-- Insert sample approved reviews
INSERT INTO reviews (name, location, rating, review_text, approved, ip_address) VALUES
('Rajesh Kumar', 'Pune, Maharashtra', 5, 'Excellent service and pure vegetarian food. The rooms are very clean and comfortable. Staff is very helpful and courteous.', TRUE, '192.168.1.1'),
('Priya Sharma', 'Mumbai, Maharashtra', 5, 'Best hotel in Pravarasangam! The food quality is outstanding and the hospitality is wonderful. Will definitely visit again.', TRUE, '192.168.1.2'),
('Amit Patel', 'Nashik, Maharashtra', 4, 'Very good experience. Clean rooms, tasty food, and reasonable prices. Only suggestion would be to add more variety in breakfast menu.', TRUE, '192.168.1.3'),
('Sunita Desai', 'Ahmednagar, Maharashtra', 5, 'Perfect place for families! Pure veg food is delicious and the staff takes good care of all needs. Highly recommended.', TRUE, '192.168.1.4'),
('Vikram Singh', 'Delhi', 4, 'Good hotel with decent amenities. The restaurant serves authentic vegetarian cuisine. Room service is prompt.', TRUE, '192.168.1.5');

-- Note: Admin user will be created programmatically on first run with hashed password
