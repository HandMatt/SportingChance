/**
 * Lightweight hero parallax (ALP-style depth).
 * Moves the background layer slower than scroll; disabled when reduced-motion is preferred.
 */
function initParallaxHero() {
  const roots = document.querySelectorAll('[data-parallax-hero]')
  if (!roots.length) return

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
  if (reduce.matches) return

  const layers = []
  roots.forEach((root) => {
    const layer = root.querySelector('[data-parallax-layer]')
    if (layer) layers.push({ root, layer })
  })
  if (!layers.length) return

  let ticking = false

  const update = () => {
    const scrollY = window.scrollY || window.pageYOffset
    layers.forEach(({ root, layer }) => {
      const rect = root.getBoundingClientRect()
      const rootTop = scrollY + rect.top
      const offset = (scrollY - rootTop) * 0.35
      layer.style.transform = `translate3d(0, ${offset}px, 0)`
    })
    ticking = false
  }

  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(update)
      ticking = true
    }
  }

  update()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll, { passive: true })
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initParallaxHero)
} else {
  initParallaxHero()
}
