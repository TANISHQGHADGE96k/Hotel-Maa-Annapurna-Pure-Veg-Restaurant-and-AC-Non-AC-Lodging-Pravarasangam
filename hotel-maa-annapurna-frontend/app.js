// Main Application Router
const App = {
    routes: {
        '/': HomePage,
        '/about': AboutPage,
        '/rooms': RoomsPage,
        '/restaurant': RestaurantPage,
        '/services': ServicesPage,
        '/gallery': GalleryPage,
        '/contact': ContactPage,
        '/reviews': ReviewsPage,
        '/add-review': AddReviewPage,
    },

    currentPath: '/',

    init() {
        // Initialize header and footer
        Header.mount();
        Footer.mount();

        // Set up hash change listener
        window.addEventListener('hashchange', () => this.router());

        // Initial route
        this.router();
    },

    async router() {
        // Get path from hash
        let path = window.location.hash.slice(1) || '/';

        // Remove trailing slash
        if (path.length > 1 && path.endsWith('/')) {
            path = path.slice(0, -1);
        }

        this.currentPath = path;

        // Update header active link
        Header.updatePath(path);

        // Get the page component
        const page = this.routes[path];

        if (!page) {
            // 404 Page
            document.getElementById('app').innerHTML = `
                <div class="section-padding text-center">
                    <h1 class="text-4xl font-heading font-bold text-brown-600 mb-4">404</h1>
                    <p class="text-gray-600 mb-8">Page not found</p>
                    <a href="#/" class="btn-primary">Go Home</a>
                </div>
            `;
            window.scrollTo(0, 0);
            return;
        }

        // Initialize page if it has an init method (for API calls)
        if (page.init) {
            await page.init();
        }

        // Render the page
        document.getElementById('app').innerHTML = page.render();

        // Scroll to top
        window.scrollTo(0, 0);
    }
};

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => App.init());
} else {
    App.init();
}
