import React from 'react';
import { FileText, BarChart, PieChart, TrendingUp, Database, Cog } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: FileText,
      title: 'Financial Reporting',
      description: 'Automated financial statements, P&L reports, and regulatory compliance documents.',
      features: ['Real-time reporting', 'Custom templates', 'Multi-currency support'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: TrendingUp,
      title: 'Forecasting & Planning',
      description: 'AI-powered financial forecasting with scenario modeling and budget planning.',
      features: ['Predictive analytics', 'Scenario planning', 'Budget tracking'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: BarChart,
      title: 'Interactive Dashboards',
      description: 'Customizable dashboards with real-time KPIs and performance metrics.',
      features: ['Drag & drop builder', 'Real-time updates', 'Mobile responsive'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Database,
      title: 'Data Consolidation',
      description: 'Seamlessly consolidate data from multiple sources and systems.',
      features: ['API integrations', 'Data validation', 'Automated workflows'],
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: PieChart,
      title: 'Advanced Analytics',
      description: 'Deep dive into your financial data with advanced statistical analysis.',
      features: ['Trend analysis', 'Variance reporting', 'Drill-down capabilities'],
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: Cog,
      title: 'Custom Solutions',
      description: 'Tailored financial solutions designed specifically for your business needs.',
      features: ['Custom workflows', 'API development', 'Integration support'],
      color: 'from-gray-500 to-slate-500',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Complete Financial Suite
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Everything you need to manage, analyze, and optimize your financial operations 
            in one comprehensive platform designed for modern businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 animate-slide-up border border-gray-200/50 dark:border-gray-700/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon with gradient background */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon size={28} className="text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features list */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex}
                    className="text-sm text-gray-500 dark:text-gray-400 flex items-center"
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3`}></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover effect overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};