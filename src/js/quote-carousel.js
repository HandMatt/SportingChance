const MAX_VISIBLE_DOTS = 5

function getDotWindow(activeIndex, total) {
  if (total <= MAX_VISIBLE_DOTS) {
    return { start: 0, end: total - 1 }
  }

  const half = Math.floor(MAX_VISIBLE_DOTS / 2)
  let start = activeIndex - half
  start = Math.max(0, Math.min(start, total - MAX_VISIBLE_DOTS))

  return { start, end: start + MAX_VISIBLE_DOTS - 1 }
}

function initQuoteCarousels() {
  const carousels = document.querySelectorAll('[data-quote-carousel]')
  if (!carousels.length) return

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const LEAVE_MS = 380
  const ENTER_MS = 420

  carousels.forEach((carousel) => {
    const slides = Array.from(carousel.querySelectorAll('[data-quote-slide]'))
    if (slides.length < 2) return

    const prevBtn = carousel.querySelector('[data-quote-prev]')
    const nextBtn = carousel.querySelector('[data-quote-next]')
    const dots = Array.from(carousel.querySelectorAll('[data-quote-dot]'))
    let index = slides.findIndex((slide) => slide.classList.contains('is-active'))
    if (index < 0) index = 0
    let animating = false

    const clearMotionClasses = (slide) => {
      slide.classList.remove(
        'is-enter-from-right',
        'is-enter-from-left',
        'is-leave-to-left',
        'is-leave-to-right'
      )
    }

    const updateDotWindow = () => {
      if (!dots.length) return

      const { start, end } = getDotWindow(index, dots.length)
      dots.forEach((dot, i) => {
        const visible = i >= start && i <= end
        dot.hidden = !visible
      })
    }

    const syncDots = () => {
      dots.forEach((dot, i) => {
        const active = i === index
        dot.classList.toggle('is-active', active)
        if (active) {
          dot.setAttribute('aria-current', 'true')
        } else {
          dot.removeAttribute('aria-current')
        }
      })
      updateDotWindow()
    }

    const settle = (activeIndex) => {
      slides.forEach((slide, i) => {
        clearMotionClasses(slide)
        const active = i === activeIndex
        slide.classList.toggle('is-active', active)
        slide.hidden = !active
        slide.setAttribute('aria-hidden', active ? 'false' : 'true')
      })
      index = activeIndex
      syncDots()
      animating = false
    }

    const show = (rawNextIndex, direction) => {
      const nextIndex = (rawNextIndex + slides.length) % slides.length
      if (nextIndex === index || animating) return

      if (reduceMotion) {
        settle(nextIndex)
        return
      }

      animating = true
      const current = slides[index]
      const incoming = slides[nextIndex]
      const dir = direction || (nextIndex > index ? 'next' : 'prev')

      clearMotionClasses(current)
      clearMotionClasses(incoming)

      current.classList.remove('is-active')
      current.classList.add(dir === 'next' ? 'is-leave-to-left' : 'is-leave-to-right')
      current.setAttribute('aria-hidden', 'true')

      window.setTimeout(() => {
        current.hidden = true
        clearMotionClasses(current)

        incoming.hidden = false
        incoming.setAttribute('aria-hidden', 'false')
        incoming.classList.add(dir === 'next' ? 'is-enter-from-right' : 'is-enter-from-left')
        void incoming.offsetWidth

        incoming.classList.remove('is-enter-from-right', 'is-enter-from-left')
        incoming.classList.add('is-active')

        index = nextIndex
        syncDots()

        window.setTimeout(() => {
          clearMotionClasses(incoming)
          animating = false
        }, ENTER_MS)
      }, LEAVE_MS)
    }

    const directionForTarget = (target) => {
      if (target === index) return 'next'
      const forward = (target - index + slides.length) % slides.length
      const backward = (index - target + slides.length) % slides.length
      return forward <= backward ? 'next' : 'prev'
    }

    prevBtn && prevBtn.addEventListener('click', () => show(index - 1, 'prev'))
    nextBtn && nextBtn.addEventListener('click', () => show(index + 1, 'next'))
    dots.forEach((dot) => {
      dot.addEventListener('click', () => {
        const target = Number(dot.getAttribute('data-quote-dot'))
        if (Number.isNaN(target)) return
        show(target, directionForTarget(target))
      })
    })

    carousel.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        show(index - 1, 'prev')
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault()
        show(index + 1, 'next')
      }
    })

    if (!reduceMotion) {
      carousel.setAttribute('tabindex', '0')
    }

    settle(index)
  })
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initQuoteCarousels)
} else {
  initQuoteCarousels()
}
