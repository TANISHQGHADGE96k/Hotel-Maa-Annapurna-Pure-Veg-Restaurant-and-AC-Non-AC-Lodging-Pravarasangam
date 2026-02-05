-- Sample rooms data for Hotel Maa Annapurna
-- Run this in MySQL to add some test rooms

INSERT INTO rooms (roomNumber, roomType, acType, price, amenities, isAvailable, createdAt, updatedAt) VALUES
('101', 'Single', 'AC', 1200, 'Wi-Fi, TV, Attached Bathroom, Hot Water', 1, NOW(), NOW()),
('102', 'Double', 'AC', 1500, 'Wi-Fi, TV, Attached Bathroom, Hot Water, Mini Fridge', 1, NOW(), NOW()),
('103', 'Family', 'AC', 2000, 'Wi-Fi, TV, Attached Bathroom, Hot Water, Mini Fridge, Extra Bed', 1, NOW(), NOW()),
('201', 'Single', 'Non-AC', 600, 'Fan, TV, Attached Bathroom, Hot Water', 1, NOW(), NOW()),
('202', 'Double', 'Non-AC', 800, 'Fan, TV, Attached Bathroom, Hot Water', 1, NOW(), NOW()),
('203', 'Family', 'Non-AC', 1200, 'Fan, TV, Attached Bathroom, Hot Water, Extra Bed', 1, NOW(), NOW());

-- Verify rooms were added
SELECT * FROM rooms;
