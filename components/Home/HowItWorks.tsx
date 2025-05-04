'use client'
import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      id: 'step1',
      number: '01',
      title: 'Sign Up',
      description: 'Create your account in seconds with just your email or phone number. No credit card required.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-500">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="8.5" cy="7" r="4" />
          <line x1="20" y1="8" x2="20" y2="14" />
          <line x1="23" y1="11" x2="17" y2="11" />
        </svg>
      ),
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
      iconBgColor: 'bg-indigo-100 dark:bg-indigo-800/30',
      borderColor: 'border-indigo-200 dark:border-indigo-700',
    },
    {
      id: 'step2',
      number: '02',
      title: 'Start Chatting',
      description: 'Send your first message instantly. Enjoy a clean, intuitive interface designed for effortless communication.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <line x1="9" y1="9" x2="15" y2="9" />
          <line x1="9" y1="13" x2="15" y2="13" />
        </svg>
      ),
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      iconBgColor: 'bg-blue-100 dark:bg-blue-800/30',
      borderColor: 'border-blue-200 dark:border-blue-700',
    },
    {
      id: 'step3',
      number: '03',
      title: 'Connect with Friends',
      description: 'Invite friends using their email, phone, or by sharing your unique profile link. Build your network effortlessly.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      iconBgColor: 'bg-green-100 dark:bg-green-800/30',
      borderColor: 'border-green-200 dark:border-green-700',
    },
    {
      id: 'step4',
      number: '04',
      title: 'Create Groups',
      description: 'Organize conversations by creating groups for family, work, or interests. Add up to 1000 members in each group.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      iconBgColor: 'bg-purple-100 dark:bg-purple-800/30',
      borderColor: 'border-purple-200 dark:border-purple-700',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-6 py-2 text-sm font-medium bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200 dark:border-blue-800 rounded-full">
            Simple Process
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get started with our chat app in minutes using these simple steps
          </p>
        </div>

        {/* Step indicators for desktop */}
        <div className="hidden lg:flex justify-center mb-12 space-x-4">
          {steps.map((step, index) => (
            <button
              key={`indicator-${step.id}`}
              onClick={() => setActiveStep(index)}
              className={`w-20 h-2 rounded-full transition-all duration-300 ${
                activeStep === index 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 w-32' 
                  : 'bg-gray-200 dark:bg-gray-700'
              }`}
              aria-label={`View step ${index + 1}`}
            />
          ))}
        </div>

        {/* Desktop view with horizontal steps */}
        <div className="hidden lg:block mb-20">
          <div className="relative">
            {/* Connection line */}
            <div className="absolute left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700 top-24 z-0">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 ease-out"
                style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
              ></div>
            </div>
            
            <div className="grid grid-cols-4 gap-8 relative z-10">
              {steps.map((step, index) => {
                const isActive = index <= activeStep;
                const isCurrentActive = index === activeStep;
                
                return (
                  <div 
                    key={step.id} 
                    className={`flex flex-col items-center ${index % 2 === 0 ? 'pt-0 pb-24' : 'pt-48 pb-0'}`}
                    onClick={() => setActiveStep(index)}
                  >
                    <div 
                      className={`rounded-full p-5 shadow-lg border-4 transition-all duration-300 cursor-pointer
                      ${isActive 
                        ? `${step.iconBgColor} ${step.borderColor}` 
                        : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
                      }
                      ${isCurrentActive ? 'scale-125' : 'scale-100'}`
                      }
                    >
                      {step.icon}
                    </div>
                    <div 
                      className={`mt-4 rounded-xl p-6 shadow-lg text-center h-full w-full transition-all duration-300
                      ${isActive 
                        ? `${step.bgColor} border ${step.borderColor}` 
                        : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700'
                      }
                      ${isCurrentActive ? 'transform -translate-y-2' : ''}`
                      }
                    >
                      <span className={`inline-block text-sm font-bold mb-2 px-4 py-1 rounded-full ${
                        isActive ? 'bg-white dark:bg-gray-800' : 'bg-gray-100 dark:bg-gray-700'
                      }`}>
                        {step.number}
                      </span>
                      <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile & tablet vertical timeline view */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => {
            const isActive = index <= activeStep;
            const isCurrentActive = index === activeStep;
            
            return (
              <div 
                key={step.id}
                onClick={() => setActiveStep(index)}
                className="cursor-pointer"
              >
                <Card 
                  className={`border overflow-hidden transition-all duration-300 ${
                    isActive 
                      ? `${step.borderColor} shadow-lg` 
                      : 'border-gray-200 dark:border-gray-700 shadow'
                  } ${isCurrentActive ? 'transform -translate-y-1' : ''}`
                  }
                >
                  <CardContent className="p-0">
                    <div className="flex items-start">
                      <div className={`p-6 flex items-center justify-center transition-colors ${
                        isActive ? step.bgColor : 'bg-gray-100 dark:bg-gray-800'
                      }`}>
                        <div className={`rounded-full p-3 shadow-md transition-colors ${
                          isActive ? step.iconBgColor : 'bg-white dark:bg-gray-700'
                        }`}>
                          {step.icon}
                        </div>
                      </div>
                      <div className="p-6">
                        <span className={`inline-block text-xs font-bold mb-1 px-3 py-1 rounded-full ${
                          isActive ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                        }`}>
                          {step.number}
                        </span>
                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                      </div>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="flex justify-center">
                        <div className={`h-12 w-1 ${
                          isActive ? 'bg-gradient-to-b from-blue-500 to-purple-500' : 'bg-gray-200 dark:bg-gray-700'
                        }`}></div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-20">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Ready to experience seamless communication with friends and family?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Get Started Now
            </button>
            <button className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white font-semibold py-4 px-8 rounded-full transition-all border border-gray-200 dark:border-gray-700 shadow hover:shadow-md transform hover:-translate-y-1">
              <div className="flex items-center justify-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polygon points="10 8 16 12 10 16 10 8"></polygon>
                </svg>
                <span>Watch Demo</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;