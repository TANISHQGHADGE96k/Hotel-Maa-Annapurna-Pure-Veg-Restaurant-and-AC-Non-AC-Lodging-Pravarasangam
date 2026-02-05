// Hotel contact information
export const HOTEL_INFO = {
    name: 'Hotel Maa Annapurna',
    tagline: 'Pure Veg Restaurant & Comfortable Lodging',
    address: 'Pravarasangam, Maharashtra, India',
    phone: '+91 9876543210',
    email: 'info@hotelmaaannapurna.com',
    whatsapp: '+919876543210',
    whatsappMessage: encodeURIComponent("Hello, I'd like to inquire about Hotel Maa Annapurna"),
    googleMapsUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353156814!3d-37.81720974201429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce840!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1234567890',
};

// Room types
export const ROOM_TYPES = ['Single', 'Double', 'Family'];
export const AC_TYPES = ['AC', 'Non-AC'];

// Gallery categories
export const GALLERY_CATEGORIES = ['Hotel', 'Rooms', 'Food'];

// Review sort options
export const REVIEW_SORT_OPTIONS = [
    { value: 'recent', label: 'Most Recent' },
    { value: 'highest', label: 'Highest Rated' },
    { value: 'lowest', label: 'Lowest Rated' },
];

// Menu categories for restaurant
export const MENU_CATEGORIES = [
    {
        name: 'Breakfast',
        items: ['Poha', 'Upma', 'Dosa', 'Idli', 'Paratha', 'Tea/Coffee'],
        timing: '7:00 AM - 11:00 AM',
    },
    {
        name: 'Lunch',
        items: ['Thali', 'Rice', 'Dal', 'Sabzi', 'Roti', 'Salad'],
        timing: '12:00 PM - 3:00 PM',
    },
    {
        name: 'Dinner',
        items: ['Thali', 'Rice', 'Dal', 'Sabzi', 'Roti', 'Sweet Dish'],
        timing: '7:00 PM - 10:00 PM',
    },
    {
        name: 'Snacks',
        items: ['Samosa', 'Pakora', 'Vada Pav', 'Bread Pakora', 'Tea/Coffee'],
        timing: '4:00 PM - 7:00 PM',
    },
];

// Services and facilities
export const SERVICES = [
    {
        icon: '🛎️',
        title: '24×7 Room Service',
        description: 'Round-the-clock room service for your convenience',
    },
    {
        icon: '🅿️',
        title: 'Free Parking',
        description: 'Ample parking space for cars and bikes',
    },
    {
        icon: '📶',
        title: 'Free Wi-Fi',
        description: 'High-speed internet access throughout the property',
    },
    {
        icon: '🚿',
        title: 'Hot & Cold Water',
        description: '24/7 hot and cold water supply',
    },
    {
        icon: '🧹',
        title: 'Housekeeping',
        description: 'Daily housekeeping and laundry services',
    },
    {
        icon: '📹',
        title: 'CCTV Security',
        description: 'Complete property under CCTV surveillance',
    },
];

// Navigation links
export const NAV_LINKS = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Restaurant', path: '/restaurant' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact', path: '/contact' },
];
