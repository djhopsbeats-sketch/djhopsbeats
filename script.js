document.querySelectorAll('.video-card').forEach((card) => {
  const thumb = card.querySelector('.thumb');
  const videoId = card.dataset.id;

  thumb.addEventListener('click', () => {
    // Apaga cualquier otro video que esté sonando antes de abrir este
    document.querySelectorAll('.thumb iframe').forEach((iframe) => {
      const otherThumb = iframe.closest('.thumb');
      iframe.remove();
      const img = otherThumb.querySelector('img');
      const icon = otherThumb.querySelector('.play-icon');
      if (img) img.style.display = 'block';
      if (icon) icon.style.display = 'block';
    });

    // Ya está sonando este mismo video: el clic solo lo apaga
    if (thumb.querySelector('iframe')) return;

    const img = thumb.querySelector('img');
    const icon = thumb.querySelector('.play-icon');
    img.style.display = 'none';
    icon.style.display = 'none';

    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    iframe.allow = 'autoplay; encrypted-media';
    iframe.setAttribute('title', card.querySelector('h3')?.textContent || 'DJ Hops Beats');
    thumb.appendChild(iframe);
  });
});
