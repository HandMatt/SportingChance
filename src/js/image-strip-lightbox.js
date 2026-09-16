/**
 * Image-strip lightbox: click a strip photo to view larger with
 * dulled backdrop and prev/next controls within that strip.
 */
function initImageStripLightbox() {
  const galleries = document.querySelectorAll('[data-image-strip-gallery]')
  if (!galleries.length) return

  const dialog = document.createElement('div')
  dialog.className = 'image-strip-lightbox'
  dialog.hidden = true
  dialog.setAttribute('role', 'dialog')
  dialog.setAttribute('aria-modal', 'true')
  dialog.setAttribute('aria-label', 'Photo viewer')
  dialog.innerHTML = `
    <div class="image-strip-lightbox__backdrop" data-lightbox-close tabindex="-1"></div>
    <div class="image-strip-lightbox__panel">
      <button type="button" class="image-strip-lightbox__close" data-lightbox-close aria-label="Close photo viewer">&times;</button>
      <button type="button" class="image-strip-lightbox__nav image-strip-lightbox__nav--prev" data-lightbox-prev aria-label="Previous photo">
        <span aria-hidden="true">&#10094;</span>
      </button>
      <figure class="image-strip-lightbox__figure">
        <img class="image-strip-lightbox__img" alt="" />
        <figcaption class="image-strip-lightbox__caption"></figcaption>
      </figure>
      <button type="button" class="image-strip-lightbox__nav image-strip-lightbox__nav--next" data-lightbox-next aria-label="Next photo">
        <span aria-hidden="true">&#10095;</span>
      </button>
    </div>
  `
  document.body.appendChild(dialog)

  const imgEl = dialog.querySelector('.image-strip-lightbox__img')
  const captionEl = dialog.querySelector('.image-strip-lightbox__caption')
  const prevBtn = dialog.querySelector('[data-lightbox-prev]')
  const nextBtn = dialog.querySelector('[data-lightbox-next]')

  let slides = []
  let index = 0
  let lastFocus = null

  const render = () => {
    const slide = slides[index]
    if (!slide) return
    imgEl.src = slide.src
    imgEl.alt = slide.alt
    captionEl.textContent = slide.alt
    captionEl.hidden = !slide.alt
    const multi = slides.length > 1
    prevBtn.hidden = !multi
    nextBtn.hidden = !multi
  }

  const open = (gallerySlides, startIndex) => {
    slides = gallerySlides
    index = startIndex
    lastFocus = document.activeElement
    render()
    dialog.hidden = false
    document.body.classList.add('image-strip-lightbox-open')
    dialog.querySelector('.image-strip-lightbox__close').focus()
  }

  const close = () => {
    dialog.hidden = true
    document.body.classList.remove('image-strip-lightbox-open')
    imgEl.removeAttribute('src')
    slides = []
    if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus()
  }

  const step = (delta) => {
    if (slides.length < 2) return
    index = (index + delta + slides.length) % slides.length
    render()
  }

  galleries.forEach((gallery) => {
    gallery.addEventListener('click', (event) => {
      const trigger = event.target.closest('.image-strip__open')
      if (!trigger || !gallery.contains(trigger)) return

      const triggers = Array.from(gallery.querySelectorAll('.image-strip__open'))
      const gallerySlides = triggers.map((btn) => ({
        src: btn.dataset.stripSrc,
        alt: btn.dataset.stripAlt || '',
      }))
      const startIndex = triggers.indexOf(trigger)
      if (startIndex < 0) return
      open(gallerySlides, startIndex)
    })
  })

  dialog.addEventListener('click', (event) => {
    if (event.target.closest('[data-lightbox-close]')) close()
    if (event.target.closest('[data-lightbox-prev]')) step(-1)
    if (event.target.closest('[data-lightbox-next]')) step(1)
  })

  document.addEventListener('keydown', (event) => {
    if (dialog.hidden) return
    if (event.key === 'Escape') {
      event.preventDefault()
      close()
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault()
      step(-1)
    } else if (event.key === 'ArrowRight') {
      event.preventDefault()
      step(1)
    }
  })
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initImageStripLightbox)
} else {
  initImageStripLightbox()
}
