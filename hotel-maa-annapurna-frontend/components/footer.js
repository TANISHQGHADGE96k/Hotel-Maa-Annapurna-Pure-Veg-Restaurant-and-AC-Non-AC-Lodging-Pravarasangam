// Footer Component
const Footer = {
    render() {
        const currentYear = new Date().getFullYear();

        return `
            <footer class="bg-brown-600 text-white">
                <div class="container-custom py-12">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <!-- About Section -->
                        <div>
                            <h3 class="text-2xl font-heading font-bold text-gold-300 mb-4">
                                ${HOTEL_INFO.name}
                            </h3>
                            <p class="text-beige-100 mb-4">
                                ${HOTEL_INFO.tagline}
                            </p>
                            <div class="flex gap-4 mt-4">
                                <a href="#" class="text-gold-300 hover:text-gold-500 transition text-xl">
                                    <i class="fab fa-facebook"></i>
                                </a>
                                <a href="#" class="text-gold-300 hover:text-gold-500 transition text-xl">
                                    <i class="fab fa-instagram"></i>
                                </a>
                                <a href="#" class="text-gold-300 hover:text-gold-500 transition text-xl">
                                    <i class="fab fa-twitter"></i>
                                </a>
                            </div>
                        </div>

                        <!-- Quick Links -->
                        <div>
                            <h4 class="text-xl font-heading font-semibold text-gold-300 mb-4">Quick Links</h4>
                            <ul class="space-y-2">
                                <li><a href="#/rooms" class="text-beige-100 hover:text-gold-300 transition">Rooms</a></li>
                                <li><a href="#/restaurant" class="text-beige-100 hover:text-gold-300 transition">Restaurant</a></li>
                                <li><a href="#/services" class="text-beige-100 hover:text-gold-300 transition">Services</a></li>
                                <li><a href="#/gallery" class="text-beige-100 hover:text-gold-300 transition">Gallery</a></li>
                                <li><a href="#/reviews" class="text-beige-100 hover:text-gold-300 transition">Reviews</a></li>
                                <li><a href="#/contact" class="text-beige-100 hover:text-gold-300 transition">Contact Us</a></li>
                            </ul>
                        </div>

                        <!-- Contact Info -->
                        <div>
                            <h4 class="text-xl font-heading font-semibold text-gold-300 mb-4">Contact Us</h4>
                            <ul class="space-y-3">
                                <li class="flex items-start gap-3">
                                    <i class="fas fa-map-marker-alt text-gold-300 mt-1"></i>
                                    <span class="text-beige-100">${HOTEL_INFO.address}</span>
                                </li>
                                <li class="flex items-center gap-3">
                                    <i class="fas fa-phone text-gold-300"></i>
                                    <a href="tel:${HOTEL_INFO.phone}" class="text-beige-100 hover:text-gold-300 transition">
                                        ${HOTEL_INFO.phone}
                                    </a>
                                </li>
                                <li class="flex items-center gap-3">
                                    <i class="fas fa-envelope text-gold-300"></i>
                                    <a href="mailto:${HOTEL_INFO.email}" class="text-beige-100 hover:text-gold-300 transition">
                                        ${HOTEL_INFO.email}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="border-t border-brown-500 mt-8 pt-6 text-center text-beige-200 text-sm">
                        <p>© ${currentYear} ${HOTEL_INFO.name}. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        `;
    },

    mount() {
        document.getElementById('footer-container').innerHTML = this.render();
    }
};
