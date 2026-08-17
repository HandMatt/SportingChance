/**
 * Floating back-to-top control for longer pages.
 */
function initBackToTop() {
  const button = document.getElementById('back-to-top')
  if (!button) return

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
  const showAfter = Math.max(window.innerHeight * 0.75, 320)

  const setVisible = (visible) => {
    button.hidden = !visible
    button.classList.toggle('is-visible', visible)
  }

  const onScroll = () => {
    setVisible(window.scrollY > showAfter)
  }

  button.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: reduce.matches ? 'auto' : 'smooth',
    })
  })

  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initBackToTop)
} else {
  initBackToTop()
}
