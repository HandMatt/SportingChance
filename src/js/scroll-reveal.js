/**
 * Scroll-triggered reveals (inspired by SW ALP / Divi waypoint animations).
 * Marks [data-reveal] elements visible when they enter the viewport.
 * Content already on the first screen reveals immediately so short pages
 * (e.g. Contact) are not held back by the later-scroll threshold.
 */
function initScrollReveal() {
  const nodes = document.querySelectorAll('[data-reveal]')
  const groups = document.querySelectorAll('[data-reveal-group]')

  if (!nodes.length && !groups.length) return

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
  if (reduce.matches) {
    nodes.forEach((el) => el.classList.add('is-revealed'))
    groups.forEach((group) => {
      group.classList.add('is-revealed')
      group.querySelectorAll('[data-reveal-step], .sc-reveal-step').forEach((step) => {
        step.classList.add('is-revealed')
      })
    })
    return
  }

  if (!('IntersectionObserver' in window)) {
    nodes.forEach((el) => el.classList.add('is-revealed'))
    groups.forEach((group) => {
      group.classList.add('is-revealed')
      group.querySelectorAll('.sc-reveal-step').forEach((step) => step.classList.add('is-revealed'))
    })
    return
  }

  const reveal = (el) => {
    const extraDelay = Number(el.dataset.revealDelayMs || 0)
    window.setTimeout(() => {
      el.classList.add('is-revealed')
    }, extraDelay)
  }

  const revealGroup = (group) => {
    const steps = group.querySelectorAll('.sc-reveal-step')
    const staggerMs = 70

    steps.forEach((step, index) => {
      window.setTimeout(() => {
        step.classList.add('is-revealed')
      }, index * staggerMs)
    })

    group.classList.add('is-revealed')
  }

  const firstScreenBottom = window.innerHeight * 0.92
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -8% 0px',
    threshold: 0.06,
  }

  const groupedSteps = new Set()
  groups.forEach((group) => {
    group.querySelectorAll('.sc-reveal-step').forEach((step) => groupedSteps.add(step))
  })

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return

        if (entry.target.hasAttribute('data-reveal-group')) {
          revealGroup(entry.target)
        } else {
          reveal(entry.target)
        }

        observer.unobserve(entry.target)
      })
    },
    observerOptions
  )

  groups.forEach((group) => {
    const rect = group.getBoundingClientRect()
    const onFirstScreen = rect.top < firstScreenBottom && rect.bottom > 0
    if (onFirstScreen) {
      revealGroup(group)
      return
    }
    observer.observe(group)
  })

  nodes.forEach((el) => {
    if (groupedSteps.has(el)) return

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
