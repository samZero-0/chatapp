import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const HowItWorks = () => {
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
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-3 px-4 py-1 text-sm font-medium">Simple Process</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get started with our chat app in minutes using these simple steps
          </p>
        </div>

        {/* Desktop timeline view */}
        <div className="hidden lg:block relative mb-20">
          {/* Connection line */}
          <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 top-24 z-0"></div>
          
          <div className="grid grid-cols-4 gap-6 relative z-10">
            {steps.map((step, index) => (
              <div key={step.id} className={`flex flex-col items-center ${index % 2 === 0 ? 'pt-0 pb-20' : 'pt-48 pb-0'}`}>
                <div className="bg-white dark:bg-gray-700 rounded-full p-4 shadow-lg border-4 border-blue-100 dark:border-blue-900 mb-4">
                  {step.icon}
                </div>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg text-center h-full w-full">
                  <span className="inline-block text-xs font-bold text-blue-500 mb-1">{step.number}</span>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile & tablet vertical timeline view */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <Card key={step.id} className="border-0 shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="flex items-start">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 flex items-center justify-center">
                    <div className="bg-white dark:bg-gray-700 rounded-full p-3 shadow-md">
                      {step.icon}
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="inline-block text-xs font-bold text-blue-500 mb-1">{step.number}</span>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-300 dark:text-blue-700 my-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Ready to experience seamless communication with friends and family?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-colors">
              Get Started Now
            </button>
            <button className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-semibold py-3 px-8 rounded-full transition-colors">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;