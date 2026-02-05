// Rooms Page
const RoomsPage = {
    rooms: [],

    async init() {
        Loader.show();
        try {
            const data = await API.rooms.getAll();
            this.rooms = data.rooms || [];
        } catch (error) {
            console.error('Error loading rooms:', error);
            this.rooms = [];
        } finally {
            Loader.hide();
        }
    },

    render() {
        if (!this.rooms.length) {
            return `
                <section class="section-padding bg-white">
                    <div class="container-custom text-center">
                        <h1 class="text-4xl font-heading font-bold text-brown-600 mb-8">Our Rooms</h1>
                        <p class="text-gray-600">Loading rooms... If this persists, please contact us.</p>
                    </div>
                </section>
            `;
        }

        // Separate rooms by AC type
        const acRooms = this.rooms.filter(room => room.acType === 'AC');
        const nonAcRooms = this.rooms.filter(room => room.acType === 'Non-AC');

        const renderRoomCard = (room) => `
            <div class="card hover:shadow-2xl transition-all duration-300">
                <div class="h-48 bg-gradient-to-br from-beige-200 to-beige-400 flex items-center justify-center relative">
                    <i class="fas fa-bed text-6xl text-brown-600"></i>
                    <span class="absolute top-4 right-4 bg-gold-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        ${room.acType}
                    </span>
                </div>
                <div class="p-6">
                    <h3 class="text-2xl font-semibold text-brown-600 mb-3">${room.roomNumber}</h3>
                    <div class="space-y-2 mb-4">
                        <p class="text-gray-600 flex items-center">
                            <i class="fas fa-users mr-2 text-gold-500"></i> ${room.roomType} Room
                        </p>
                        <p class="text-gray-600 flex items-center">
                            <i class="fas ${room.acType === 'AC' ? 'fa-snowflake' : 'fa-fan'} mr-2 text-gold-500"></i> ${room.acType}
                        </p>
                    </div>
                    <div class="flex items-center justify-between pt-4 border-t border-beige-200">
                        <span class="text-2xl font-bold text-gold-600">₹${room.price}<span class="text-sm text-gray-500">/night</span></span>
                        <a href="tel:${HOTEL_INFO.phone}" class="btn-primary">Book Now</a>
                    </div>
                </div>
            </div>
        `;

        return `
            <section class="section-padding bg-white">
                <div class="container-custom">
                    <h1 class="text-4xl md:text-5xl font-heading font-bold text-brown-600 mb-4 text-center">Our Rooms</h1>
                    <p class="text-xl text-center text-gray-600 mb-12">Choose from our comfortable AC and Non-AC accommodations</p>

                    ${acRooms.length > 0 ? `
                        <!-- AC Rooms Section -->
                        <div class="mb-16">
                            <div class="flex items-center gap-3 mb-8">
                                <i class="fas fa-snowflake text-3xl text-blue-500"></i>
                                <h2 class="text-3xl font-heading font-bold text-brown-600">AC Rooms</h2>
                                <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">${acRooms.length} Available</span>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                ${acRooms.map(room => renderRoomCard(room)).join('')}
                            </div>
                        </div>
                    ` : ''}

                    ${nonAcRooms.length > 0 ? `
                        <!-- Non-AC Rooms Section -->
                        <div>
                            <div class="flex items-center gap-3 mb-8">
                                <i class="fas fa-fan text-3xl text-green-600"></i>
                                <h2 class="text-3xl font-heading font-bold text-brown-600">Non-AC Rooms</h2>
                                <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">${nonAcRooms.length} Available</span>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                ${nonAcRooms.map(room => renderRoomCard(room)).join('')}
                            </div>
                        </div>
                    ` : ''}

                    ${acRooms.length === 0 && nonAcRooms.length === 0 ? `
                        <p class="text-center text-gray-600 py-12">No rooms available at the moment. Please contact us for availability.</p>
                    ` : ''}
                </div>
            </section>
        `;
    }
};

// Gallery Page
const GalleryPage = {
    gallery: [],
    selectedCategory: 'All',

    async init() {
        Loader.show();
        try {
            const data = await API.gallery.getAll();
            this.gallery = data.gallery || [];
        } catch (error) {
            console.error('Error loading gallery:', error);
            this.gallery = [];
        } finally {
            Loader.hide();
        }
    },

    render() {
        return `
            <section class="section-padding bg-white">
                <div class="container-custom">
                    <h1 class="text-4xl md:text-5xl font-heading font-bold text-brown-600 mb-12 text-center">Gallery</h1>
                    
                    ${this.gallery.length ? `
                        <div class="gallery-grid">
                            ${this.gallery.map(item => `
                                <div class="gallery-item">
                                    <img src="${item.imageUrl}" alt="${item.title}" loading="lazy">
                                    <div class="p-4 bg-white">
                                        <h3 class="font-semibold text-brown-600">${item.title}</h3>
                                        <p class="text-sm text-gray-600">${item.category}</p>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    ` : `
                        <p class="text-center text-gray-600">No gallery images available.</p>
                    `}
                </div>
            </section>
        `;
    }
};
