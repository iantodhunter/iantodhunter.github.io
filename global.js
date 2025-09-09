document.addEventListener("DOMContentLoaded", () => {
  const tiles = document.querySelectorAll('svg#tiles a');
  
  // Set up event listeners
  tiles.forEach((tile) => {
    // Click
    tile.addEventListener("click", (event) => {
      event.preventDefault();
      const href = tile.getAttribute("href");
      if (!href) return;

      // Add click animation
      tile.style.transform = 'scale(1.05)';
      
      // Navigate after animation
      setTimeout(() => {
        window.location.href = href;
      }, 200);
    });
  });
});