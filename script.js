document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.video-card');

  cards.forEach(card => {
    const thumb = card.querySelector('.thumb');
    const videoId = card.getAttribute('data-id');

    if (thumb && videoId) {
      thumb.addEventListener('click', () => {
        // 1. Detener cualquier otro video que se esté reproduciendo
        cards.forEach(otherCard => {
          const otherThumb = otherCard.querySelector('.thumb');
          const otherId = otherCard.getAttribute('data-id');

          // Si es un video diferente y ya tiene un iframe cargado
          if (otherCard !== card && otherThumb.querySelector('iframe')) {
            otherThumb.innerHTML = `
              <img src="https://img.youtube.com/vi/${otherId}/hqdefault.jpg" alt="Beat - DJ Hops Beats">
              <span class="play-icon" aria-hidden="true"></span>
            `;
          }
        });

        // 2. Cargar y reproducir el video seleccionado
        if (!thumb.querySelector('iframe')) {
          thumb.innerHTML = `
            <iframe 
              src="https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1" 
              title="Reproductor de YouTube" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>
          `;
        }
      });
    }
  });
});