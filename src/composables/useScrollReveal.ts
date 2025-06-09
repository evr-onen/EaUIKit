import type { ScrollRevealOptions } from '@/directives/scrollOnReveal'

// Preset animation configurations
export const scrollRevealPresets = {
  fadeIn: 'fade-in',
  slideUp: 'slide-up',
  slideDown: 'slide-down',
  slideLeft: 'slide-left',
  slideRight: 'slide-right',
  scale: 'scale',
  bounce: 'bounce',
  rotate: 'rotate',
  flip: 'flip',
  zoom: 'zoom'
} as const

export type AnimationType = keyof typeof scrollRevealPresets

export function useScrollReveal() {

  // Simple animation helper
  const animate = (type: AnimationType, options?: Partial<ScrollRevealOptions>) => {
    return {
      animation: scrollRevealPresets[type],
      ...options
    }
  }

  // Quick preset functions
  const fadeIn = (options?: Partial<ScrollRevealOptions>) => animate('fadeIn', options)
  const slideUp = (options?: Partial<ScrollRevealOptions>) => animate('slideUp', options)
  const slideDown = (options?: Partial<ScrollRevealOptions>) => animate('slideDown', options)
  const slideLeft = (options?: Partial<ScrollRevealOptions>) => animate('slideLeft', options)
  const slideRight = (options?: Partial<ScrollRevealOptions>) => animate('slideRight', options)
  const scale = (options?: Partial<ScrollRevealOptions>) => animate('scale', options)
  const bounce = (options?: Partial<ScrollRevealOptions>) => animate('bounce', options)
  const rotate = (options?: Partial<ScrollRevealOptions>) => animate('rotate', options)
  const flip = (options?: Partial<ScrollRevealOptions>) => animate('flip', options)
  const zoom = (options?: Partial<ScrollRevealOptions>) => animate('zoom', options)

  // Sequential animation helper for lists
  const sequential = (type: AnimationType, options?: Partial<ScrollRevealOptions>) => {
    return (index: number) => ({
      animation: scrollRevealPresets[type],
      delay: index * 0.1,
      ...options
    })
  }

  // Stagger animation for card grids
  const stagger = (type: AnimationType, delayBetween = 0.1) => {
    return (index: number) => animate(type, { delay: index * delayBetween })
  }

  return {
    // Preset functions
    fadeIn,
    slideUp,
    slideDown,
    slideLeft,
    slideRight,
    scale,
    bounce,
    rotate,
    flip,
    zoom,

    // Helper functions
    animate,
    sequential,
    stagger,

    // Constants
    presets: scrollRevealPresets
  }
}
