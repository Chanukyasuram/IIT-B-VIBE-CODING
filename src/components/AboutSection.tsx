import React from 'react';
import { CheckCircle, Award, TrendingUp, Users } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const achievements = [
    'Trusted by 10,000+ businesses worldwide',
    'Processing $50B+ in financial data annually',
    'Award-winning customer support team',
    '99.9% uptime with enterprise reliability',
  ];

  const stats = [
    { icon: Users, value: '10K+', label: 'Active Users' },
    { icon: TrendingUp, value: '500M+', label: 'Reports Generated' },
    { icon: Award, value: '25+', label: 'Industry Awards' },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-in-left">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Revolutionizing Financial Reporting
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Since 2018, FinanceFlow has been at the forefront of financial technology, 
              helping businesses transform their financial data into strategic advantages. 
              Our platform combines cutting-edge AI with intuitive design to deliver 
              insights that drive growth and profitability.
            </p>

            <div className="space-y-4 mb-8">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-3 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle size={20} className="text-blue-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start mb-2">
                    <stat.icon className="text-blue-500 mr-2" size={24} />
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</span>
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-slide-in-right">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl transform rotate-3"></div>
            <img 
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
              alt="Financial analytics dashboard"
              className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
            />
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl animate-float">
              <TrendingUp size={32} className="text-blue-500" />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl p-4 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
              <div className="text-2xl font-bold">$50B+</div>
              <div className="text-sm opacity-90">Data Processed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};