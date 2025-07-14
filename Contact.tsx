import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export function Contact() {
  const contacts = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/moukthikanand',
      color: 'from-blue-600 to-blue-500'
    },
    {
      icon: Github,
      label: 'GitHub',
      link: 'https://github.com/Moukthik-anand',
      color: 'from-gray-800 to-gray-600 dark:from-gray-200 dark:to-gray-400'
    },
    {
      icon: Mail,
      label: 'Email',
      link: 'mailto:anandmoukthik@gmail.com',
      color: 'from-red-600 to-red-500'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-center bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent mb-12 animate-matrix-glow">
            Contact
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            {contacts.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <a
                  key={index}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center px-8 py-4 bg-gradient-to-r ${contact.color} text-white rounded-lg font-medium btn-enhanced animate-button-pulse animate-card-entrance`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <Icon className="mr-3 h-5 w-5" />
                  {contact.label}
                </a>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}