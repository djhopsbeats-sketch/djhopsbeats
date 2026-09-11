document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.video-card');

  cards.forEach(card => {
    const thumb = card.querySelector('.thumb');
    const videoId = card.getAttribute('data-id');

    if (thumb && videoId) {
      thumb.addEventListener('click', () => {
        // Reemplaza la miniatura por el reproductor ejecutable de YouTube al hacer clic
        thumb.innerHTML = `
          <iframe 
            src="https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1" 
            title="Reproductor de YouTube" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
        `;
      });
    }
  });
});