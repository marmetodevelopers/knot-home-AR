document.addEventListener('DOMContentLoaded', function () {
  const splide = new Splide('#slider-collection', {
    arrows: true,
    type: 'loop',
    snap: true,
    perPage: 3,
    autoplay: 'play',
    padding: { left: '18rem', right: '18rem' },
    breakpoints: {
      768: {
        perPage: 1,
        padding: { left: '0rem', right: '0rem' },
      },
    },
  });
  splide.mount();
});