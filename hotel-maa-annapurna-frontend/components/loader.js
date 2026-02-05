// Loader Component
const Loader = {
    show() {
        document.getElementById('loader').classList.remove('hidden');
    },

    hide() {
        document.getElementById('loader').classList.add('hidden');
    }
};
