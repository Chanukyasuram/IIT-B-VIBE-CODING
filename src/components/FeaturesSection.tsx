import React from 'react';
import { BarChart3, Shield, Zap, Users, Brain, Globe } from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Powerful reporting tools with real-time data visualization and interactive dashboards.',
    },
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Machine learning algorithms that provide predictive analytics and smart recommendations.',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security with end-to-end encryption and compliance with industry standards.',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance that processes complex financial data in milliseconds.',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Built-in collaboration tools for seamless teamwork and real-time data sharing.',
    },
    {
      icon: Globe,
      title: 'Global Integration',
      description: 'Connect with 500+ financial institutions and accounting platforms worldwide.',
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Powerful Financial Intelligence
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transform your financial data into actionable insights with our comprehensive 
            suite of analytics and reporting tools powered by artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up border border-gray-200/50 dark:border-gray-700/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon size={28} className="text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};