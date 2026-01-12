'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  className?: string;
}

export default function AnimatedSection({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = '' 
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const directionClasses = {
    up: isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8',
    down: isVisible ? 'animate-fadeInDown' : 'opacity-0 -translate-y-8',
    left: isVisible ? 'animate-fadeInLeft' : 'opacity-0 translate-x-8',
    right: isVisible ? 'animate-fadeInRight' : 'opacity-0 -translate-x-8',
    fade: isVisible ? 'animate-fadeIn' : 'opacity-0',
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${directionClasses[direction]} ${className}`}
    >
      {children}
    </div>
  );
}
