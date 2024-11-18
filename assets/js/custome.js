
document.getElementById('reviewForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const review = document.getElementById('review').value.trim();

    if (name && review) {
        const reviewsContainer = document.getElementById('reviewsContainer');

        const reviewCard = document.createElement('div');
        reviewCard.classList.add('review');

        reviewCard.innerHTML = `
            <h3>${name}</h3>
            <p>${review}</p>
        `;

        reviewsContainer.appendChild(reviewCard);

        document.getElementById('reviewForm').reset();
    } else {
        alert('Please fill in both fields!');
    }
});
