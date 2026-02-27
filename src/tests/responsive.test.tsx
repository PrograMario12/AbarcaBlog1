import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Projects } from '@/components/projects';
import { Footer } from '@/components/footer';

// Mock Lucide icons to avoid rendering issues
vi.mock('lucide-react', () => ({
  ArrowRight: () => <svg data-testid="ArrowRight" />,
  Github: () => <svg data-testid="Github" />,
  Linkedin: () => <svg data-testid="Linkedin" />,
  Twitter: () => <svg data-testid="Twitter" />,
  Menu: () => <svg data-testid="Menu" />,
  X: () => <svg data-testid="X" />,
  Globe: () => <svg data-testid="Globe" />,
  Stethoscope: () => <svg data-testid="Stethoscope" />,
  Bird: () => <svg data-testid="Bird" />,
}));

// Mock Framer Motion to avoid animation issues in tests
vi.mock('framer-motion', () => ({
  motion: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    div: ({ children, className, ...props }: any) => <div className={className} {...props}>{children}</div>,
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  AnimatePresence: ({ children }: any) => <>{children}</>,
}));

describe('Responsive Components', () => {
  it('Navbar renders correctly', () => {
    render(<Navbar />);
    expect(screen.getByText('Mario Adair')).toBeDefined();
    expect(screen.getByLabelText('Toggle menu')).toBeDefined(); // Mobile menu button
  });

  it('Hero renders correctly', () => {
    render(<Hero />);
    expect(screen.getByText(/Software Engineer/i)).toBeDefined();
    expect(screen.getByText(/Ver Proyectos/i)).toBeDefined();
  });

  it('Projects renders correctly', () => {
    render(<Projects />);
    expect(screen.getByText(/Proyectos Destacados/i)).toBeDefined();
    expect(screen.getByText(/Autonomous Agent Swarm/i)).toBeDefined();
  });

  it('Footer renders correctly', () => {
    render(<Footer />);
    expect(screen.getByText(/Built by/i)).toBeDefined();
    expect(screen.getByText(/Mario Adair/i)).toBeDefined();
  });
});
