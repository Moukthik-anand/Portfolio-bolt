import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export function Skills() {
  const softSkills = [
    'English communication',
    'Teamwork',
    'Problem solving',
    'Time management',
    'Adaptability'
  ];

  const technicalSkills = [
    'Python',
    'SQL',
    'C Language',
    'MS Office',
    'HTML',
    'Cybersecurity Fundamentals',
    'Cloud knowledge'
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-center bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent mb-12 animate-matrix-glow">
            Skills
          </h2>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 gap-8">
          <ScrollReveal delay={200}>
            <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 shadow-lg dark:shadow-gray-900/20 backdrop-blur-sm border border-gray-200 dark:border-gray-700 card-hover-enhanced animate-card-entrance animate-card-float animate-card-shimmer animate-card-pulse-glow">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 animate-matrix-glow">Soft Skills</h3>
              <div className="space-y-4 animate-card-content-slide">
                {softSkills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-3 skill-item animate-stagger-fade" 
                    style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
                    onMouseEnter={(e) => e.currentTarget.classList.add('animate-skill-pop')}
                    onAnimationEnd={(e) => e.currentTarget.classList.remove('animate-skill-pop')}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-gray-600 to-gray-500 dark:from-gray-300 dark:to-gray-400 rounded-full animate-pulse-slow"></div>
                    <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={400}>
            <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 shadow-lg dark:shadow-gray-900/20 backdrop-blur-sm border border-gray-200 dark:border-gray-700 card-hover-enhanced animate-card-entrance animate-card-float animate-card-shimmer animate-card-pulse-glow" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 animate-matrix-glow">Technical Skills</h3>
              <div className="space-y-4 animate-card-content-slide" style={{ animationDelay: '0.1s' }}>
                {technicalSkills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-3 skill-item animate-stagger-fade" 
                    style={{ animationDelay: `${index * 0.1 + 0.7}s` }}
                    onMouseEnter={(e) => e.currentTarget.classList.add('animate-skill-pop')}
                    onAnimationEnd={(e) => e.currentTarget.classList.remove('animate-skill-pop')}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-gray-600 to-gray-500 dark:from-gray-300 dark:to-gray-400 rounded-full animate-pulse-slow"></div>
                    <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}