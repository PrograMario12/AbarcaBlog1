import { render, screen } from '@testing-library/react'
import { Hero } from '@/components/hero'

describe('Hero Component', () => {
  it('renders personal information correctly', () => {
    render(<Hero />)

    expect(screen.getByText('Mario Adair')).toBeInTheDocument()
    expect(screen.getByText((content, element) => {
        return element?.textContent === '🇲🇽 Guerrero → Querétaro'
    })).toBeInTheDocument()
    expect(screen.getByText('Software Engineer')).toBeInTheDocument()
    expect(screen.getByText('Ingeniero Software UAQ → Maestría IA')).toBeInTheDocument()
  })

  it('contains the call to action buttons', () => {
    render(<Hero />)

    expect(screen.getByText('Ver Proyectos')).toBeInTheDocument()
    expect(screen.getByText('GitHub')).toBeInTheDocument()
  })

  it('renders the eagle animation container', () => {
    render(<Hero />)
    // The eagle is an SVG inside a motion.div.
    // We can check if the SVG exists, though testing animation behavior is harder in JSDOM.
    // We look for the path data of the eagle silhouette
    const eaglePath = document.querySelector('path[d="M10,50 Q30,20 50,50 T90,50 L50,80 Z"]')
    expect(eaglePath).toBeInTheDocument()
  })
})
