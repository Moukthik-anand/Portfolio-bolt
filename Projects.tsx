import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-center bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent mb-12 animate-matrix-glow">
            Projects
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 shadow-lg dark:shadow-gray-900/20 backdrop-blur-sm border border-gray-200 dark:border-gray-700 card-hover-enhanced animate-card-entrance animate-card-float animate-card-shimmer animate-card-pulse-glow">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 animate-text-reveal animate-matrix-glow animate-card-content-slide">
              SQL Library Management System
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 animate-text-reveal animate-card-content-slide" style={{ animationDelay: '0.2s' }}>
              A database-driven mini project built using SQL Server. It manages books, members, borrowing, and returns using joins, triggers, and constraints to handle book issuing and returning. The project ensures smooth and error-free transactions.
            </p>
            <a
              href="https://github.com/Moukthik-anand/Library-Management-SQL"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-200 dark:to-gray-400 text-white dark:text-gray-900 rounded-lg hover:from-gray-700 hover:to-gray-500 dark:hover:from-gray-100 dark:hover:to-gray-300 font-medium btn-enhanced animate-button-pulse animate-text-reveal animate-card-content-slide" style={{ animationDelay: '0.4s' }}
            >
              <Github className="mr-2 h-4 w-4" />
              View Project
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}