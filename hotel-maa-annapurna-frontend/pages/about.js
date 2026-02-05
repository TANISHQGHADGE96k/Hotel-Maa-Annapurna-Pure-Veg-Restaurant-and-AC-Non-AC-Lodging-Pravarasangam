// About Page
const AboutPage = {
    render() {
        return `
            <section class="section-padding bg-white">
                <div class="container-custom">
                    <h1 class="text-4xl md:text-5xl font-heading font-bold text-brown-600 mb-8">About Us</h1>
                    <div class="prose max-w-none">
                        <p class="text-lg text-gray-700 mb-4">
                            Welcome to ${HOTEL_INFO.name}, your home away from home in ${HOTEL_INFO.address}.
                        </p>
                        <p class="text-lg text-gray-700 mb-4">
                            We offer comfortable AC and Non-AC rooms along with a pure vegetarian restaurant serving delicious home-style meals.
                        </p>
                        <h2 class="text-2xl font-heading font-bold text-brown-600 mt-8 mb-4">Our Mission</h2>
                        <p class="text-lg text-gray-700">
                            To provide comfortable lodging and authentic vegetarian food with warmth and hospitality.
                        </p>
                    </div>
                </div>
            </section>
        `;
    }
};

// Services Page
const ServicesPage = {
    render() {
        return `
            <section class="section-padding bg-white">
                <div class="container-custom">
                    <h1 class="text-4xl md:text-5xl font-heading font-bold text-brown-600 mb-12 text-center">Our Services & Facilities</h1>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        ${SERVICES.map(service => `
                            <div class="card p-8">
                                <div class="text-5xl mb-4">${service.icon}</div>
                                <h3 class="text-2xl font-semibold text-brown-600 mb-3">${service.title}</h3>
                                <p class="text-gray-600 text-lg">${service.description}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>
        `;
    }
};

// Restaurant Page
const RestaurantPage = {
    render() {
        return `
            <section class="section-padding bg-white">
                <div class="container-custom">
                    <h1 class="text-4xl md:text-5xl font-heading font-bold text-brown-600 mb-4 text-center">Pure Veg Restaurant</h1>
                    <p class="text-xl text-center text-gray-600 mb-12">Delicious home-style vegetarian meals</p>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        ${MENU_CATEGORIES.map(category => `
                            <div class="card p-6">
                                <h3 class="text-2xl font-heading font-bold text-brown-600 mb-2">${category.name}</h3>
                                <p class="text-gold-600 mb-4"><i class="far fa-clock mr-2"></i>${category.timing}</p>
                                <ul class="space-y-2">
                                    ${category.items.map(item => `
                                        <li class="flex items-center text-gray-700">
                                            <i class="fas fa-check text-gold-500 mr-2"></i> ${item}
                                        </li>
                                    `).join('')}
                                </ul>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>
        `;
    }
};
