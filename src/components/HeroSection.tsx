import React, { useState } from 'react';
import { Play, ArrowRight, Star, Sparkles, Fingerprint } from 'lucide-react';
import { DashboardElements } from './DashboardElements';

export const HeroSection: React.FC = () => {
  const [activeHover, setActiveHover] = useState<'default' | 'dashboards' | 'reports' | 'forecasts' | 'consolidations'>('default');

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Deep blue gradient background with animated glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 animate-gradient-shift"></div>
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Large fingerprint background element with subtle animation */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5 animate-pulse-very-slow">
        <Fingerprint size={500} className="text-white" />
      </div>

      {/* Trust indicators at the top */}
      <div className="absolute top-16 left-0 right-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            <div className="flex items-center space-x-2 text-white/90 animate-slide-up">
              <Star size={16} className="text-yellow-400 fill-current" />
              <span className="text-sm font-medium">4.8 rating on</span>
              <span className="text-sm font-semibold flex items-center">
                <span className="text-blue-300">🏆</span>
                <span className="ml-1">Capterra</span>
              </span>
            </div>
            
            <div className="flex items-center space-x-2 text-white/90 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <Star size={16} className="text-yellow-400 fill-current" />
              <span className="text-sm font-medium">4.8 rating on</span>
              <span className="text-sm font-semibold flex items-center">
                <span className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center text-xs">G</span>
                <span className="ml-1">G2</span>
              </span>
            </div>
            
            <div className="flex items-center space-x-2 text-white/90 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Star size={16} className="text-yellow-400 fill-current" />
              <span className="text-sm font-medium">350+ reviews on</span>
              <span className="text-sm font-semibold flex items-center">
                <span className="text-blue-400 font-bold">xero</span>
              </span>
            </div>
            
            <div className="flex items-center space-x-2 text-white/90 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <Star size={16} className="text-yellow-400 fill-current" />
              <span className="text-sm font-medium">550+ reviews on</span>
              <span className="text-sm font-semibold flex items-center">
                <span className="text-green-400">📊</span>
                <span className="ml-1 text-green-400">QuickBooks</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main content container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-screen pt-20">
        {/* Floating dashboard elements positioned right after trust indicators */}
        <div className="relative w-full max-w-6xl mx-auto mb-8 mt-16">
          <DashboardElements hoverState={activeHover} />
        </div>

        {/* Main heading section */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-text-glow">
            Create{' '}
            <span 
              className="hover:text-cyan-300 transition-colors duration-300 cursor-pointer"
              onMouseEnter={() => setActiveHover('reports')}
              onMouseLeave={() => setActiveHover('default')}
            >
              reports
            </span>
            ,{' '}
            <span 
              className="hover:text-green-300 transition-colors duration-300 cursor-pointer"
              onMouseEnter={() => setActiveHover('forecasts')}
              onMouseLeave={() => setActiveHover('default')}
            >
              forecasts
            </span>
            ,
            <br />
            <span 
              className="hover:text-blue-300 transition-colors duration-300 cursor-pointer"
              onMouseEnter={() => setActiveHover('dashboards')}
              onMouseLeave={() => setActiveHover('default')}
            >
              dashboards
            </span>
            {' & '}
            <span 
              className="hover:text-purple-300 transition-colors duration-300 cursor-pointer"
              onMouseEnter={() => setActiveHover('consolidations')}
              onMouseLeave={() => setActiveHover('default')}
            >
              consolidations
            </span>
          </h1>
          
          <div className="flex items-center justify-center mb-8 animate-sparkle-container">
            <Sparkles className="w-6 h-6 text-yellow-400 mr-3 animate-sparkle-rotate" />
            <p className="text-xl md:text-2xl text-blue-100 font-medium animate-shimmer">
              Now with AI-insights
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <button className="group bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 text-blue-900 px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/30 flex items-center space-x-2 animate-glow-button">
              <span>Start 14-day free trial</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="group flex items-center space-x-2 text-white hover:text-cyan-300 transition-colors duration-300 animate-fade-in-delayed">
              <Play size={16} className="animate-pulse-gentle" />
              <span className="font-medium underline">See what we do</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};