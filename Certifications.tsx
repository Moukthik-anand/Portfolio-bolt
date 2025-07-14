import React from 'react';
import { ExternalLink } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export function Certifications() {
  const certifications = [
    {
      title: 'IBM SkillsBuild – Cybersecurity Fundamentals',
      link: 'https://www.credly.com/badges/1ba63afa-d538-4282-b5cb-78dc63572cc8'
    },
    {
      title: 'Microsoft SQL Certification Training (Intellipaat)',
      link: 'https://lms.intellipaat.com/certificate-link/?Yz0yODUzJnU9MzE4NjkzJmV4dD0x'
    },
    {
      title: 'AWS Certification Course (Intellipaat)',
      link: 'https://intellipaat.com/academy/certificate-link/?Yz0xNjU0JnU9MjQzNTEwJmV4dD0x'
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-center bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent mb-12 animate-matrix-glow">
            Certifications
          </h2>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <ScrollReveal key={index} delay={200 * (index + 1)}>
              <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 shadow-lg dark:shadow-gray-900/20 backdrop-blur-sm border border-gray-200 dark:border-gray-700 flex flex-col h-full card-hover-enhanced animate-card-entrance animate-card-float animate-card-shimmer animate-card-pulse-glow" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex-grow animate-text-reveal animate-matrix-glow animate-card-content-slide" style={{ animationDelay: `${index * 0.2}s` }}>
                  {cert.title}
                </h3>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-200 dark:to-gray-400 text-white dark:text-gray-900 rounded-lg hover:from-gray-700 hover:to-gray-500 dark:hover:from-gray-100 dark:hover:to-gray-300 font-medium btn-enhanced animate-button-pulse animate-card-content-slide" style={{ animationDelay: `${index * 0.3}s` }}
                >
                  View Certificate
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}