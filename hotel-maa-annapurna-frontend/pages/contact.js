// Contact Page
const ContactPage = {
    render() {
        return `
            <section class="section-padding bg-white">
                <div class="container-custom">
                    <h1 class="text-4xl md:text-5xl font-heading font-bold text-brown-600 mb-12 text-center">Contact Us</h1>
                    
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <!-- Contact Form -->
                        <div>
                            <h2 class="text-2xl font-heading font-bold text-brown-600 mb-6">Send us a Message</h2>
                            <form id="contact-form" onsubmit="ContactPage.handleSubmit(event)" class="space-y-4">
                                <div>
                                    <label class="block text-gray-700 mb-2">Name *</label>
                                    <input type="text" name="name" required class="form-input" placeholder="Your Name">
                                </div>
                                <div>
                                    <label class="block text-gray-700 mb-2">Email *</label>
                                    <input type="email" name="email" required class="form-input" placeholder="your@email.com">
                                </div>
                                <div>
                                    <label class="block text-gray-700 mb-2">Phone</label>
                                    <input type="tel" name="phone" class="form-input" placeholder="+91 1234567890">
                                </div>
                                <div>
                                    <label class="block text-gray-700 mb-2">Message *</label>
                                    <textarea name="message" required rows="5" class="form-input" placeholder="Your message..."></textarea>
                                </div>
                                <button type="submit" class="btn-primary w-full">Send Message</button>
                            </form>
                        </div>

                        <!-- Contact Info -->
                        <div>
                            <h2 class="text-2xl font-heading font-bold text-brown-600 mb-6">Get in Touch</h2>
                            <div class="space-y-6">
                                <div class="flex items-start gap-4">
                                    <i class="fas fa-map-marker-alt text-gold-500 text-2xl mt-1"></i>
                                    <div>
                                        <h3 class="font-semibold text-brown-600 mb-1">Address</h3>
                                        <p class="text-gray-600">${HOTEL_INFO.address}</p>
                                    </div>
                                </div>
                                <div class="flex items-start gap-4">
                                    <i class="fas fa-phone text-gold-500 text-2xl mt-1"></i>
                                    <div>
                                        <h3 class="font-semibold text-brown-600 mb-1">Phone</h3>
                                        <a href="tel:${HOTEL_INFO.phone}" class="text-gray-600 hover:text-gold-600">${HOTEL_INFO.phone}</a>
                                    </div>
                                </div>
                                <div class="flex items-start gap-4">
                                    <i class="fas fa-envelope text-gold-500 text-2xl mt-1"></i>
                                    <div>
                                        <h3 class="font-semibold text-brown-600 mb-1">Email</h3>
                                        <a href="mailto:${HOTEL_INFO.email}" class="text-gray-600 hover:text-gold-600">${HOTEL_INFO.email}</a>
                                    </div>
                                </div>
                            </div>

                            <!-- Map -->
                            <div class="mt-8">
                                <iframe src="${HOTEL_INFO.googleMapsUrl}" width="100%" height="300" style="border:0; border-radius: 0.5rem;" allowfullscreen="" loading="lazy"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    },

    async handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        Loader.show();
        try {
            await API.contact.submit(data);
            alert('Thank you! Your message has been sent successfully.');
            form.reset();
        } catch (error) {
            alert('Sorry, there was an error sending your message. Please try again or call us directly.');
        } finally {
            Loader.hide();
        }
    }
};

// Reviews Page
const ReviewsPage = {
    reviews: [],

    async init() {
        Loader.show();
        try {
            const data = await API.reviews.getAll();
            this.reviews = data.reviews || [];
        } catch (error) {
            console.error('Error loading reviews:', error);
            this.reviews = [];
        } finally {
            Loader.hide();
        }
    },

    render() {
        return `
            <section class="section-padding bg-white">
                <div class="container-custom">
                    <div class="flex justify-between items-center mb-12">
                        <h1 class="text-4xl md:text-5xl font-heading font-bold text-brown-600">Guest Reviews</h1>
                        <a href="#/add-review" class="btn-primary">Write a Review</a>
                    </div>

                    ${this.reviews.length ? `
                        <div class="space-y-6">
                            ${this.reviews.map(review => `
                                <div class="review-card">
                                    <div class="flex justify-between items-start mb-3">
                                        <div>
                                            <h3 class="font-semibold text-brown-600 text-lg">${review.guestName}</h3>
                                            ${StarRating.render(review.rating)}
                                        </div>
                                        <span class="text-sm text-gray-500">${new Date(review.createdAt).toLocaleDateString()}</span>
                                    </div>
                                    <p class="text-gray-700">${review.review}</p>
                                </div>
                            `).join('')}
                        </div>
                    ` : `
                        <p class="text-center text-gray-600">No reviews yet. Be the first to review!</p>
                    `}
                </div>
            </section>
        `;
    }
};

// Add Review Page
const AddReviewPage = {
    selectedRating: 5,

    render() {
        return `
            <section class="section-padding bg-white">
                <div class="container-custom max-w-2xl">
                    <h1 class="text-4xl md:text-5xl font-heading font-bold text-brown-600 mb-8 text-center">Write a Review</h1>
                    
                    <form id="review-form" onsubmit="AddReviewPage.handleSubmit(event)" class="space-y-6">
                        <div>
                            <label class="block text-gray-700 mb-2">Your Name *</label>
                            <input type="text" name="guestName" required class="form-input" placeholder="Your Name">
                        </div>
<div>
                            <label class="block text-gray-700 mb-2">Email</label>
                            <input type="email" name="email" class="form-input" placeholder="your@email.com">
                        </div>
                        <div>
                            <label class="block text-gray-700 mb-2">Rating *</label>
                            <div class="flex gap-2">
                                ${[1, 2, 3, 4, 5].map(num => `
                                    <button type="button" onclick="AddReviewPage.setRating(${num})" class="text-3xl ${num <= this.selectedRating ? 'text-gold-500' : 'text-gray-300'}">
                                        <i class="fas fa-star"></i>
                                    </button>
                                `).join('')}
                            </div>
                            <input type="hidden" name="rating" value="${this.selectedRating}">
                        </div>
                        <div>
                            <label class="block text-gray-700 mb-2">Your Review *</label>
                            <textarea name="review" required rows="6" class="form-input" placeholder="Share your experience..."></textarea>
                        </div>
                        <button type="submit" class="btn-primary w-full">Submit Review</button>
                    </form>
                </div>
            </section>
        `;
    },

    setRating(rating) {
        this.selectedRating = rating;
        document.getElementById('app').innerHTML = this.render();
    },

    async handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        Loader.show();
        try {
            await API.reviews.create(data);
            alert('Thank you for your review!');
            window.location.hash = '#/reviews';
        } catch (error) {
            alert('Sorry, there was an error submitting your review. Please try again.');
        } finally {
            Loader.hide();
        }
    }
};
