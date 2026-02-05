// Star Rating Component
const StarRating = {
    render(rating, interactive = false, onRate = null) {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            const filled = i <= rating;
            const star = `<i class="fas fa-star star ${filled ? '' : 'empty'}" 
                ${interactive ? `onclick="if(${onRate}) ${onRate}(${i})"` : ''}></i>`;
            stars.push(star);
        }
        return `<div class="star-rating">${stars.join('')}</div>`;
    }
};
