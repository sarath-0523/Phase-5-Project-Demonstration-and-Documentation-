// Select all filter buttons and product cards
const filterButtons = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');

// Loop through each filter button
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));

    // Add active class to clicked button
    button.classList.add('active');

    // Get category from data-category
    const category = button.getAttribute('data-category');

    // Loop through each product card
    productCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');

      // Show or hide based on category
      if (category === 'all' || cardCategory === category) {
        card.classList.remove('hidden');
        card.classList.add('visible');
      } else {
        card.classList.add('hidden');
        card.classList.remove('visible');
      }
    });
  });
});
function filterProducts(category) {
  const products = document.querySelectorAll(".product-card");
  products.forEach(product => {
    if (category === 'all' || product.classList.contains(category)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}