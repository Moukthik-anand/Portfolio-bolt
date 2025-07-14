import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <ScrollReveal>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-bounce-in">
            Hello, I'm{' '}
            <span className="bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent animate-gradient-shift animate-matrix-glow">
              Manga Moukthik Anand
            </span>
          </h1>
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <p className="text-xl sm:text-2xl md:text-3xl bg-gradient-to-r from-gray-600 to-gray-500 dark:from-gray-300 dark:to-gray-400 bg-clip-text text-transparent font-medium animate-text-reveal">
            my portfolio
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={400}>
          <button
            onClick={() => {
              const aboutSection = document.getElementById('about');
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="mt-8 px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-200 dark:to-gray-400 text-white dark:text-gray-900 rounded-lg hover:from-gray-700 hover:to-gray-500 dark:hover:from-gray-100 dark:hover:to-gray-300 font-medium btn-enhanced animate-button-pulse"
          >
            Explore My Work
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
}