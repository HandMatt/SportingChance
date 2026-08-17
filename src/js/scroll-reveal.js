/**
 * Scroll-triggered reveals (inspired by SW ALP / Divi waypoint animations).
 * Marks [data-reveal] elements visible when they enter the viewport.
 * Content already on the first screen reveals immediately so short pages
 * (e.g. Contact) are not held back by the later-scroll threshold.
 */
function initScrollReveal() {
  const nodes = document.querySelectorAll('[data-reveal]')
  if (!nodes.length) return

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
  if (reduce.matches) {
    nodes.forEach((el) => el.classList.add('is-revealed'))
    return
  }

  if (!('IntersectionObserver' in window)) {
    nodes.forEach((el) => el.classList.add('is-revealed'))
    return
  }

  const reveal = (el) => {
    const extraDelay = Number(el.dataset.revealDelayMs || 0)
    window.setTimeout(() => {
      el.classList.add('is-revealed')
    }, extraDelay)
  }

  const firstScreenBottom = window.innerHeight * 0.92

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        reveal(entry.target)
        observer.unobserve(entry.target)
      })
    },
    {
      root: null,
      // Require content to scroll further into view before animating
      rootMargin: '0px 0px -28% 0px',
      threshold: 0.12,
    }
  )

  nodes.forEach((el) => {
    const rect = el.getBoundingClientRect()
    const onFirstScreen = rect.top < firstScreenBottom && rect.bottom > 0
    if (onFirstScreen) {
      reveal(el)
      return
    }
    observer.observe(el)
  })
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScrollReveal)
} else {
  initScrollReveal()
}
