import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const KeyFeatures = () => {
  const features = [
    {
      id: 'real-time',
      title: 'Real-time messaging',
      description: 'Instant message delivery with typing indicators and read receipts',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <path d="M8 10h.01" />
          <path d="M12 10h.01" />
          <path d="M16 10h.01" />
        </svg>
      ),
      badge: 'Fast'
    },
    {
      id: 'voice-video',
      title: 'Voice & video calls',
      description: 'Crystal-clear HD voice and video calls with up to 8 participants',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
          <path d="M15 10l4.553-2.276A1 1 0 0 1 21 8.618v6.764a1 1 0 0 1-1.447.894L15 14v-4z" />
          <rect x="3" y="6" width="12" height="12" rx="2" ry="2" />
        </svg>
      ),
      badge: 'HD Quality'
    },
    {
      id: 'encryption',
      title: 'End-to-end encryption',
      description: 'Advanced encryption ensuring your conversations stay private and secure',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
      badge: 'Secure'
    },
    {
      id: 'file-sharing',
      title: 'File sharing & media support',
      description: 'Share photos, videos, documents, and links with a simple drag and drop',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500">
          <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
          <path d="M13 2v7h7" />
        </svg>
      ),
      badge: 'Any File Type'
    },
    {
      id: 'group-chats',
      title: 'Group chats & communities',
      description: 'Create groups of up to 1000 members with admin controls and custom roles',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      badge: 'Up to 1000 members'
    }
  ];

  return (
    <section className="py-16  dark:bg-gray-900 mt-10">
      <div className="px-4 mx-auto ">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 ">Key Features</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to stay connected with friends, family, and colleagues in one powerful app
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {features.map((feature) => (
            <Card key={feature.id} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="mb-4 p-3 rounded-full bg-gray-100 dark:bg-gray-800 inline-block">
                  {feature.icon}
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <Badge variant="secondary" className="ml-2">
                    {feature.badge}
                  </Badge>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                  {feature.description}
                </p>
                <button className="text-blue-600 dark:text-blue-400 font-medium inline-flex items-center group">
                  Learn more
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default KeyFeatures;