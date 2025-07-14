import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-center bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent mb-12 animate-matrix-glow">
            About Me
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 shadow-lg dark:shadow-gray-900/20 backdrop-blur-sm border border-gray-200 dark:border-gray-700 card-hover-enhanced animate-card-entrance animate-card-float animate-card-shimmer animate-card-pulse-glow">
            <div className="space-y-6 text-gray-700 dark:text-gray-300 text-lg leading-relaxed animate-card-content-slide">
              <p className="animate-stagger-fade" style={{ animationDelay: '0.1s' }}>
                I'm currently pursuing a B.Tech in Artificial Intelligence & Data Science, with a strong interest in building intelligent systems that solve real-world problems.
              </p>
              
              <p className="animate-stagger-fade" style={{ animationDelay: '0.3s' }}>
                My focus lies in AI, Data Science, Machine Learning (ML), and backend logic using SQL and Python. I enjoy working on projects that combine structured data, automation, and smart decision-making. I believe in continuous learning, and I'm always exploring technologies that blend logic and creativity — from database systems to cloud and cybersecurity fundamentals.
              </p>
              
              <p className="animate-stagger-fade" style={{ animationDelay: '0.5s' }}>
                When I'm not coding, you'll find me diving into tech content or improving my soft skills. Beyond academics and tech, I enjoy reading books, trying out new things, and working on my fitness. I believe that it builds my discipline, focus, and balanced mindset.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}