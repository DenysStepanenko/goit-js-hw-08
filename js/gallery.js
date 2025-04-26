const images = [
    {
        preview: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
        original: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
        description: 'Hokkaido Flower',
    },
    // інші об’єкти масиву...
];

const galleryMarkup = images
    .map(({ preview, original, description }) => `
    <li class="gallery-item">
      <a class="gallery-link" href="${original}">
        <img
          class="gallery-image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
  `)
    .join('');

const gallery = document.querySelector('.gallery');
gallery.innerHTML = galleryMarkup;

gallery.addEventListener('click', (event) => {
    event.preventDefault();
    const target = event.target.closest('.gallery-image');
    if (target) {
        const largeImage = target.dataset.source;
        const instance = basicLightbox.create(`
      <img src="${largeImage}" alt="${target.alt}" />
    `);
        instance.show();
    }
});