import { render, screen } from '@testing-library/react'
import { Projects } from '@/components/projects'

// Mock framer-motion to avoid animation issues in tests
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: { children: React.ReactNode }) => <div {...props}>{children}</div>,
  },
}))

describe('Projects Component', () => {
  it('renders the projects section title', () => {
    render(<Projects />)
    expect(screen.getByText('Proyectos Destacados')).toBeInTheDocument()
  })

  it('renders the "Águila Desarrolladora" fictional project', () => {
    render(<Projects />)
    expect(screen.getByText('Águila Desarrolladora')).toBeInTheDocument()
    expect(screen.getByText(/Proyecto Homenaje/)).toBeInTheDocument()
  })

  it('renders the Dunder Mifflin Easter Egg', () => {
    render(<Projects />)
    expect(screen.getByText('Property of Dunder Mifflin Inc.')).toBeInTheDocument()
  })

  it('renders the Shaun Murphy Badge Easter Egg', () => {
    render(<Projects />)
    expect(screen.getByText('Diagnosticando bugs como Shaun Murphy')).toBeInTheDocument()
  })

  it('renders real projects correctly', () => {
    render(<Projects />)
    expect(screen.getByText('Autonomous Agent Swarm')).toBeInTheDocument()
    expect(screen.getByText('RAG Document Engine')).toBeInTheDocument()
  })
})
