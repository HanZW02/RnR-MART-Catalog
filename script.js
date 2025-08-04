const searchInput = document.getElementById('searchInput');
  const productGrid = document.querySelector('.product-grid');
  const productCards = productGrid.getElementsByClassName('product-card');

  searchInput.addEventListener('input', function() {
    const filter = searchInput.value.toLowerCase();
    Array.from(productCards).forEach(card => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(filter) ? '' : 'none';
    });
  });