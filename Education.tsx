import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export function Education() {
  const education = [
    {
      title: 'B.Tech – Artificial Intelligence & Data Science',
      status: 'Pursuing',
      description: "Currently pursuing B.Tech in Artificial Intelligence & Data Science, where I'm building skills in programming, SQL, Python, and data structures. My coursework and hands-on projects are helping me apply theoretical knowledge to practical, real-world problems."
    },
    {
      title: 'Sri Gayatri Junior College (MPC)',
      status: 'Scored: 86.4%',
      description: 'I pursued the MPC stream in my intermediate education, focusing on Mathematics, Physics, and Chemistry. These 2 years strengthened my time management, focus, and problem-solving skills, and played a key role in shaping a path toward my engineering studies.'
    },
    {
      title: 'Visakha Valley School (CBSE)',
      status: 'Scored: 75%',
      description: 'I studied from LKG to Class 10 under the CBSE curriculum, actively participating in academics, sports, and cultural events that helped shape my communication and teamwork skills. Exposure to basic computing and Microsoft Office during this time sparked my early interest in technology.'
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-center bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent mb-12 animate-matrix-glow">
            Education
          </h2>
        </ScrollReveal>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <ScrollReveal key={index} delay={200 * (index + 1)}>
              <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 shadow-lg dark:shadow-gray-900/20 backdrop-blur-sm border border-gray-200 dark:border-gray-700 card-hover-enhanced animate-card-entrance animate-card-float animate-card-shimmer animate-card-pulse-glow" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 animate-card-content-slide">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white animate-text-reveal animate-matrix-glow" style={{ animationDelay: `${index * 0.1}s` }}>{edu.title}</h3>
                  <span className="text-sm bg-gradient-to-r from-gray-600 to-gray-500 dark:from-gray-300 dark:to-gray-400 bg-clip-text text-transparent font-medium mt-2 sm:mt-0 animate-text-reveal" style={{ animationDelay: `${index * 0.1 + 0.2}s` }}>
                    {edu.status}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed animate-text-reveal animate-card-content-slide" style={{ animationDelay: `${index * 0.1 + 0.4}s` }}>{edu.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}