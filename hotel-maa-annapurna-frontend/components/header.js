// Header Component
const Header = {
    currentPath: '/',
    isMobileMenuOpen: false,

    render() {
        return `
            <header class="bg-white shadow-lg sticky top-0 z-50">
                <!-- Top Bar -->
                <div class="bg-brown-500 text-white py-2">
                    <div class="container-custom flex justify-between items-center text-sm">
                        <div class="flex items-center gap-4">
                            <a href="tel:${HOTEL_INFO.phone}" class="flex items-center gap-2 hover:text-gold-300 transition">
                                <i class="fas fa-phone text-xs"></i>
                                <span class="hidden sm:inline">${HOTEL_INFO.phone}</span>
                            </a>
                            <a href="https://wa.me/${HOTEL_INFO.whatsapp}?text=${HOTEL_INFO.whatsappMessage}"
                               target="_blank" rel="noopener noreferrer"
                               class="flex items-center gap-2 hover:text-gold-300 transition">
                                <i class="fab fa-whatsapp text-base"></i>
                                <span class="hidden sm:inline">WhatsApp</span>
                            </a>
                        </div>
                        <div class="text-xs sm:text-sm">${HOTEL_INFO.address}</div>
                    </div>
                </div>

                <!-- Main Navigation -->
                <nav class="container-custom py-4">
                    <div class="flex justify-between items-center">
                        <a href="#/" class="text-2xl md:text-3xl font-heading font-bold text-brown-600">
                            ${HOTEL_INFO.name}
                        </a>

                        <!-- Desktop Menu -->
                        <div class="hidden lg:flex items-center gap-6">
                            ${NAV_LINKS.map(link => `
                                <a href="#${link.path}" 
                                   class="nav-link text-gray-700 hover:text-gold-600 font-medium transition-colors duration-300 ${this.currentPath === link.path ? 'active' : ''}">
                                    ${link.name}
                                </a>
                            `).join('')}
                        </div>

                        <!-- Mobile Menu Button -->
                        <button onclick="Header.toggleMobileMenu()" class="lg:hidden p-2 text-brown-600">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                ${this.isMobileMenuOpen ?
                '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />' :
                '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />'
            }
                            </svg>
                        </button>
                    </div>

                    <!-- Mobile Menu -->
                    ${this.isMobileMenuOpen ? `
                        <div class="lg:hidden mt-4 pb-4 border-t border-beige-300">
                            <div class="flex flex-col gap-3 pt-4">
                                ${NAV_LINKS.map(link => `
                                    <a href="#${link.path}" 
                                       onclick="Header.toggleMobileMenu()"
                                       class="nav-link text-gray-700 hover:text-gold-600 font-medium transition-colors duration-300 py-2 ${this.currentPath === link.path ? 'active' : ''}">
                                        ${link.name}
                                    </a>
                                `).join('')}
                            </div>
                        </div>
                    ` : ''}
                </nav>
            </header>
        `;
    },

    toggleMobileMenu() {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
        this.mount();
    },

    updatePath(path) {
        this.currentPath = path;
        this.mount();
    },

    mount() {
        document.getElementById('header-container').innerHTML = this.render();
    }
};
