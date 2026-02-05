// Home Page
const HomePage = {
    render() {
        const highlights = [
            { icon: '❄️', title: 'AC & Non-AC Rooms', desc: 'Comfortable rooms for every budget' },
            { icon: '🥗', title: 'Pure Veg Restaurant', desc: 'Authentic vegetarian cuisine' },
            { icon: '🅿️', title: 'Free Parking', desc: 'Ample parking space' },
            { icon: '📶', title: 'Free Wi-Fi', desc: 'High-speed internet' },
        ];

        return `
            <!-- Hero Section -->
            <section class="relative bg-gradient-to-r from-brown-600 via-brown-500 to-gold-600 text-white section-padding bg-pattern">
                <div class="container-custom">
                    <div class="max-w-3xl">
                        <h1 class="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
                            ${HOTEL_INFO.name}
                        </h1>
                        <p class="text-xl md:text-2xl text-beige-100 mb-8">
                            ${HOTEL_INFO.tagline}
                        </p>
                        <div class="flex flex-wrap gap-4">
                            <a href="#/rooms" class="btn-primary">Book Room</a>
                            <a href="tel:${HOTEL_INFO.phone}" class="btn-outline bg-white bg-opacity-20 border-white text-white hover:bg-white hover:text-brown-600">
                                <i class="fas fa-phone mr-2"></i> Call Now
                            </a>
                            <a href="https://wa.me/${HOTEL_INFO.whatsapp}?text=${HOTEL_INFO.whatsappMessage}" target="_blank" class="btn-secondary">
                                <i class="fab fa-whatsapp mr-2"></i> WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Highlights -->
            <section class="section-padding bg-white">
                <div class="container-custom">
                    <h2 class="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-brown-600">
                        Why Choose Us
                    </h2>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        ${highlights.map(item => `
                            <div class="card p-6 text-center hover:scale-105 transition-transform duration-300">
                                <div class="text-5xl mb-4">${item.icon}</div>
                                <h3 class="text-xl font-semibold text-brown-600 mb-2">${item.title}</h3>
                                <p class="text-gray-600">${item.desc}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>

            <!-- Services Preview -->
            <section class="section-padding bg-beige-50">
                <div class="container-custom">
                    <h2 class="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-brown-600">
                        Our Services & Facilities
                    </h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        ${SERVICES.map(service => `
                            <div class="card p-6">
                                <div class="text-4xl mb-3">${service.icon}</div>
                                <h3 class="text-xl font-semibold text-brown-600 mb-2">${service.title}</h3>
                                <p class="text-gray-600">${service.description}</p>
                            </div>
                        `).join('')}
                    </div>
                    <div class="text-center mt-10">
                        <a href="#/services" class="btn-outline">View All Services</a>
                    </div>
                </div>
            </section>

            <!-- CTA Section -->
            <section class="section-padding bg-gradient-to-r from-gold-500 to-brown-500 text-white text-center">
                <div class="container-custom">
                    <h2 class="text-3xl md:text-4xl font-heading font-bold mb-4">
                        Ready to Book Your Stay?
                    </h2>
                    <p class="text-xl text-beige-100 mb-8">
                        Experience comfort, hospitality, and delicious pure vegetarian food
                    </p>
                    <a href="#/rooms" class="btn-primary bg-white text-brown-600 hover:bg-beige-100">
                        View Rooms & Pricing
                    </a>
                </div>
            </section>
        `;
    }
};
