import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, BarChart3, PieChart, Settings, FileText, Calendar, AlertCircle, Building2, Globe, Users2, ArrowRight } from 'lucide-react';

interface DashboardElementsProps {
  hoverState: 'default' | 'dashboards' | 'reports' | 'forecasts' | 'consolidations';
}

export const DashboardElements: React.FC<DashboardElementsProps> = ({ hoverState }) => {
  // Default state - white/black contrast dashboards
  if (hoverState === 'default') {
    return (
      <div className="relative min-h-[200px] w-full -mt-8">
        {/* Subtle ripple effects for default state */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="absolute w-32 h-32 border border-gray-200/20 rounded-full animate-ripple-subtle-1"></div>
          <div className="absolute w-64 h-64 border border-gray-200/10 rounded-full animate-ripple-subtle-2"></div>
          <div className="absolute w-96 h-96 border border-gray-200/5 rounded-full animate-ripple-subtle-3"></div>
        </div>

        {/* Default Expenses Dashboard - Top Left */}
        <div className="absolute left-0 md:left-16 top-0 animate-slide-in-left-bounce">
          <div className="relative bg-white/90 backdrop-blur-lg rounded-3xl p-5 w-64 md:w-72 border border-gray-300 shadow-2xl transition-all duration-500 animate-float-gentle overflow-hidden">
            {/* Ripple effect on hover */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-400/20 rounded-full animate-ripple-card-1"></div>
            </div>
            
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-gray-800 font-semibold text-base">Expenses</h3>
              <Settings size={16} className="text-gray-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-3">$56.2K</div>
            
            <div className="flex items-center space-x-3">
              <div className="relative w-16 h-16">
                <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#6b7280"
                    strokeWidth="3"
                    strokeDasharray="60, 100"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#9ca3af"
                    strokeWidth="3"
                    strokeDasharray="25, 100"
                    strokeDashoffset="-60"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#d1d5db"
                    strokeWidth="3"
                    strokeDasharray="15, 100"
                    strokeDashoffset="-85"
                  />
                </svg>
              </div>
              <div className="space-y-1 text-xs">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                  <span className="text-gray-700">Insurance</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                  <span className="text-gray-700">Wages</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-gray-700">Rent</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Default Total Income Dashboard - Top Right */}
        <div className="absolute right-0 md:right-16 top-0 animate-slide-down-bounce">
          <div className="relative bg-white/90 backdrop-blur-lg rounded-3xl p-5 w-72 md:w-80 border border-gray-300 shadow-2xl transition-all duration-500 animate-float-gentle-delayed overflow-hidden">
            {/* Ripple effect on hover */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-green-400/20 rounded-full animate-ripple-card-2"></div>
            </div>
            
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="text-gray-800 font-semibold text-base">Total Income</h3>
                <div className="flex items-center space-x-2">
                  <TrendingDown size={16} className="text-gray-600" />
                  <span className="text-gray-600 text-sm font-medium">36.5%</span>
                </div>
              </div>
              <Settings size={16} className="text-gray-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">$426.8K</div>
            <div className="text-gray-600 text-xs mb-3">$672.5K total last year</div>
            
            <div className="flex items-end space-x-1 h-12">
              {[40, 60, 35, 80, 45, 70, 55, 90, 65, 75, 50, 85].map((height, index) => (
                <div
                  key={index}
                  className="bg-gray-400 rounded-sm flex-1 transition-all duration-300"
                  style={{ height: `${height}%` }}
                ></div>
              ))}
            </div>
            <div className="flex justify-between text-xs text-gray-600 mt-1">
              <span>Feb</span>
              <span>Jan</span>
            </div>
          </div>
        </div>

        {/* Default Cash Dashboard - Bottom Center */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-32 animate-slide-in-right-bounce">
          <div className="relative bg-white/90 backdrop-blur-lg rounded-3xl p-5 w-64 border border-gray-300 shadow-2xl transition-all duration-500 animate-float-gentle-delayed-2 overflow-hidden">
            {/* Ripple effect on hover */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-purple-400/20 rounded-full animate-ripple-card-3"></div>
            </div>
            
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="text-gray-800 font-semibold text-base">Cash</h3>
                <div className="flex items-center space-x-2">
                  <TrendingUp size={16} className="text-gray-600" />
                  <span className="text-gray-600 text-sm font-medium">202.8%</span>
                </div>
              </div>
              <Settings size={16} className="text-gray-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">$288,721</div>
            <div className="text-gray-600 text-xs">$95,319 last month</div>
          </div>
        </div>
      </div>
    );
  }

  // Dashboards hover state - colorful dashboards with enhanced ripples
  if (hoverState === 'dashboards') {
    return (
      <div className="relative min-h-[200px] w-full -mt-8">
        {/* Enhanced ripple effects for dashboards */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="absolute w-32 h-32 border border-blue-400/30 rounded-full animate-ripple-blue-1"></div>
          <div className="absolute w-48 h-48 border border-cyan-400/20 rounded-full animate-ripple-cyan-1"></div>
          <div className="absolute w-64 h-64 border border-purple-400/15 rounded-full animate-ripple-purple-1"></div>
          <div className="absolute w-80 h-80 border border-blue-300/10 rounded-full animate-ripple-blue-2"></div>
          <div className="absolute w-96 h-96 border border-cyan-300/8 rounded-full animate-ripple-cyan-2"></div>
        </div>

        {/* Colorful Expenses Dashboard - Top Left */}
        <div className="absolute left-0 md:left-16 top-0 animate-slide-in-left-bounce">
          <div className="relative bg-white/15 backdrop-blur-lg rounded-3xl p-5 w-64 md:w-72 border border-white/30 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 animate-float-gentle overflow-hidden">
            {/* Dynamic ripple effects */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-blue-400/30 rounded-full animate-ripple-dynamic-1"></div>
              <div className="absolute top-3/4 right-1/4 w-4 h-4 bg-cyan-400/30 rounded-full animate-ripple-dynamic-2"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-purple-400/20 rounded-full animate-ripple-dynamic-3"></div>
            </div>
            
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-white font-semibold text-base">Expenses</h3>
              <Settings size={16} className="text-white/70 animate-spin-slow" />
            </div>
            <div className="text-2xl font-bold text-white mb-3 animate-glow-pulse">$56.2K</div>
            
            <div className="flex items-center space-x-3">
              <div className="relative w-16 h-16">
                <svg className="w-16 h-16 transform -rotate-90 animate-rotate-slow" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="2"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="3"
                    strokeDasharray="60, 100"
                    className="animate-draw-circle"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="3"
                    strokeDasharray="25, 100"
                    strokeDashoffset="-60"
                    className="animate-draw-circle-delayed"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#8b5cf6"
                    strokeWidth="3"
                    strokeDasharray="15, 100"
                    strokeDashoffset="-85"
                    className="animate-draw-circle-delayed-2"
                  />
                </svg>
              </div>
              <div className="space-y-1 text-xs">
                <div className="flex items-center space-x-2 animate-slide-in-right">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse-glow"></div>
                  <span className="text-white/90">Insurance</span>
                </div>
                <div className="flex items-center space-x-2 animate-slide-in-right">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse-glow"></div>
                  <span className="text-white/90">Wages</span>
                </div>
                <div className="flex items-center space-x-2 animate-slide-in-right">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse-glow"></div>
                  <span className="text-white/90">Rent</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Colorful Total Income Dashboard - Top Right */}
        <div className="absolute right-0 md:right-16 top-0 animate-slide-down-bounce">
          <div className="relative bg-white/15 backdrop-blur-lg rounded-3xl p-5 w-72 md:w-80 border border-white/30 shadow-2xl hover:shadow-red-500/20 transition-all duration-500 animate-float-gentle-delayed overflow-hidden">
            {/* Dynamic ripple effects */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/3 left-1/3 w-5 h-5 bg-red-400/30 rounded-full animate-ripple-dynamic-4"></div>
              <div className="absolute bottom-1/4 right-1/3 w-7 h-7 bg-orange-400/25 rounded-full animate-ripple-dynamic-5"></div>
              <div className="absolute top-2/3 left-2/3 w-3 h-3 bg-yellow-400/35 rounded-full animate-ripple-dynamic-6"></div>
            </div>
            
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="text-white font-semibold text-base">Total Income</h3>
                <div className="flex items-center space-x-2">
                  <TrendingDown size={16} className="text-red-400 animate-bounce-gentle" />
                  <span className="text-red-400 text-sm font-medium animate-glow-pulse-red">36.5%</span>
                </div>
              </div>
              <Settings size={16} className="text-white/70 animate-spin-slow" />
            </div>
            <div className="text-3xl font-bold text-white mb-2 animate-glow-pulse">$426.8K</div>
            <div className="text-white/60 text-xs mb-3">$672.5K total last year</div>
            
            <div className="flex items-end space-x-1 h-12">
              {[40, 60, 35, 80, 45, 70, 55, 90, 65, 75, 50, 85].map((height, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-t from-blue-600 to-cyan-400 rounded-sm flex-1 animate-bar-grow hover:from-cyan-400 hover:to-blue-400 transition-all duration-300"
                  style={{ 
                    height: `${height}%`,
                    animationDelay: `${index * 0.1}s`
                  }}
                ></div>
              ))}
            </div>
            <div className="flex justify-between text-xs text-white/60 mt-1">
              <span>Feb</span>
              <span>Jan</span>
            </div>
          </div>
        </div>

        {/* Colorful Cash Dashboard - Bottom Center */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-32 animate-slide-in-right-bounce">
          <div className="relative bg-white/15 backdrop-blur-lg rounded-3xl p-5 w-64 border border-white/30 shadow-2xl hover:shadow-green-500/20 transition-all duration-500 animate-float-gentle-delayed-2 overflow-hidden">
            {/* Dynamic ripple effects */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-green-400/30 rounded-full animate-ripple-dynamic-7"></div>
              <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-emerald-400/35 rounded-full animate-ripple-dynamic-8"></div>
            </div>
            
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="text-white font-semibold text-base">Cash</h3>
                <div className="flex items-center space-x-2">
                  <TrendingUp size={16} className="text-green-400 animate-bounce-gentle" />
                  <span className="text-green-400 text-sm font-medium animate-glow-pulse-green">202.8%</span>
                </div>
              </div>
              <Settings size={16} className="text-white/70 animate-spin-slow" />
            </div>
            <div className="text-3xl font-bold text-white mb-1 animate-glow-pulse-green">$288,721</div>
            <div className="text-white/60 text-xs">$95,319 last month</div>
          </div>
        </div>
      </div>
    );
  }

  // Reports hover state
  if (hoverState === 'reports') {
    return (
      <div className="relative min-h-[200px] w-full -mt-8">
        {/* Report-themed ripple effects */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="absolute w-40 h-40 border border-gray-300/20 rounded-full animate-ripple-report-1"></div>
          <div className="absolute w-60 h-60 border border-blue-300/15 rounded-full animate-ripple-report-2"></div>
          <div className="absolute w-80 h-80 border border-gray-200/10 rounded-full animate-ripple-report-3"></div>
        </div>

        {/* Business Report Card - Top Left */}
        <div className="absolute left-0 md:left-16 top-0 animate-slide-in-left-bounce">
          <div className="relative bg-white/95 backdrop-blur-lg rounded-3xl p-5 w-64 md:w-72 border border-gray-200 shadow-2xl transition-all duration-500 animate-float-gentle overflow-hidden">
            {/* Document-style ripple effects */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-blue-400/25 rounded-full animate-ripple-document-1"></div>
              <div className="absolute bottom-1/3 right-1/4 w-5 h-5 bg-green-400/20 rounded-full animate-ripple-document-2"></div>
            </div>
            
            <div className="mb-3">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                alt="Business overview"
                className="w-full h-16 object-cover rounded-2xl mb-3"
              />
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-gray-600">Edge Design Studio</span>
                <FileText size={14} className="text-blue-500" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-1">Business overview report</h3>
              <p className="text-xs text-gray-600">August 2024</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 font-bold text-xs">O</span>
              </div>
              <div className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center">
                <BarChart3 size={14} className="text-green-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Share Options Panel - Top Right */}
        <div className="absolute right-0 md:right-16 top-0 animate-slide-in-right-bounce">
          <div className="relative bg-white/95 backdrop-blur-lg rounded-3xl p-5 w-64 md:w-72 border border-gray-200 shadow-2xl transition-all duration-500 animate-float-gentle-delayed overflow-hidden">
            {/* Communication-style ripple effects */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/4 right-1/3 w-4 h-4 bg-purple-400/25 rounded-full animate-ripple-communication-1"></div>
              <div className="absolute bottom-1/4 left-1/3 w-6 h-6 bg-cyan-400/20 rounded-full animate-ripple-communication-2"></div>
            </div>
            
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-2">
                <span className="text-white text-xs font-bold">M</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm">Mark Bosman</h4>
                <p className="text-xs text-gray-500">a few seconds ago</p>
              </div>
            </div>
            <p className="text-xs text-gray-700 mb-3">@Megan let's talk about a strategy to improve these metrics.</p>
            
            <div className="mb-3">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center text-sm">
                <span className="mr-1">📤</span>
                Send to
              </h4>
              <div className="grid grid-cols-2 gap-2">
                <button className="flex items-center p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-red-500 mr-1 text-xs">📄</span>
                  <span className="text-xs">PDF</span>
                </button>
                <button className="flex items-center p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-green-500 mr-1 text-xs">💬</span>
                  <span className="text-xs">WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Income vs Expenses Chart - Bottom Center */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-32 animate-slide-up">
          <div className="relative bg-white/95 backdrop-blur-lg rounded-3xl p-5 w-72 md:w-80 border border-gray-200 shadow-2xl transition-all duration-500 animate-float-gentle-delayed-2 overflow-hidden">
            {/* Chart-style ripple effects */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-cyan-400/15 rounded-full animate-ripple-chart-1"></div>
              <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-yellow-400/25 rounded-full animate-ripple-chart-2"></div>
            </div>
            
            <h3 className="text-base font-bold text-gray-900 mb-3">Income vs. Expenses</h3>
            <div className="h-16 flex items-end space-x-1">
              {[
                { height: 60, color: 'bg-cyan-500' },
                { height: 40, color: 'bg-yellow-500' },
                { height: 80, color: 'bg-cyan-500' },
                { height: 30, color: 'bg-yellow-500' },
                { height: 70, color: 'bg-cyan-500' },
                { height: 50, color: 'bg-yellow-500' },
                { height: 90, color: 'bg-cyan-500' },
                { height: 35, color: 'bg-yellow-500' },
              ].map((bar, index) => (
                <div
                  key={index}
                  className={`${bar.color} rounded-t-sm flex-1 transition-all duration-300 hover:opacity-80`}
                  style={{ height: `${bar.height}%` }}
                ></div>
              ))}
            </div>
            <div className="flex justify-between text-xs text-gray-600 mt-1">
              <span>Jan</span>
              <span>Dec</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Forecasts hover state
  if (hoverState === 'forecasts') {
    return (
      <div className="relative min-h-[200px] w-full -mt-8">
        {/* Forecast-themed ripple effects */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="absolute w-36 h-36 border border-blue-400/25 rounded-full animate-ripple-forecast-1"></div>
          <div className="absolute w-52 h-52 border border-green-400/20 rounded-full animate-ripple-forecast-2"></div>
          <div className="absolute w-68 h-68 border border-orange-400/15 rounded-full animate-ripple-forecast-3"></div>
          <div className="absolute w-84 h-84 border border-purple-400/10 rounded-full animate-ripple-forecast-4"></div>
        </div>

        {/* Forecast Cards - Top Left */}
        <div className="absolute left-0 md:left-16 top-0 animate-slide-down-bounce">
          <div className="flex flex-col space-y-3">
            <div className="relative bg-white/95 backdrop-blur-lg rounded-2xl p-4 border border-gray-200 shadow-xl transition-all duration-500 animate-float-gentle overflow-hidden">
              {/* Prediction ripple effects */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-blue-400/30 rounded-full animate-ripple-prediction-1"></div>
              </div>
              
              <div className="flex items-center mb-2">
                <Calendar size={14} className="text-blue-500 mr-2" />
                <span className="text-xs text-gray-600">Today</span>
              </div>
              <div className="text-xl font-bold text-gray-900">$3,296</div>
            </div>
            <div className="relative bg-white/95 backdrop-blur-lg rounded-2xl p-4 border border-gray-200 shadow-xl transition-all duration-500 animate-float-gentle-delayed overflow-hidden">
              {/* Future prediction ripple effects */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-orange-400/25 rounded-full animate-ripple-prediction-2"></div>
              </div>
              
              <div className="flex items-center mb-2">
                <Calendar size={14} className="text-orange-500 mr-2" />
                <span className="text-xs text-gray-600">Next 8-30 days</span>
              </div>
              <div className="text-xl font-bold text-gray-900">$100,548</div>
              <div className="text-xs text-gray-500">-$11,000</div>
            </div>
          </div>
        </div>

        {/* Invoices Table - Top Right */}
        <div className="absolute right-0 md:right-16 top-0 animate-slide-in-right-bounce">
          <div className="relative bg-white/95 backdrop-blur-lg rounded-3xl p-5 w-72 md:w-80 border border-gray-200 shadow-2xl transition-all duration-500 animate-float-gentle overflow-hidden">
            {/* Invoice tracking ripple effects */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-green-400/20 rounded-full animate-ripple-invoice-1"></div>
              <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-blue-400/25 rounded-full animate-ripple-invoice-2"></div>
            </div>
            
            <h3 className="text-base font-bold text-gray-900 mb-3">Invoices</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <div>
                    <div className="font-medium text-gray-900 text-sm">Cinderella</div>
                    <div className="text-xs text-gray-500">Due: 23 Aug 2023</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-gray-900 text-sm">$3,000</div>
                  <div className="text-xs text-blue-600">Final</div>
                </div>
              </div>
              <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <div>
                    <div className="font-medium text-gray-900 text-sm">Cinderella</div>
                    <div className="text-xs text-gray-500">Due: 24 Aug 2023</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-gray-900 text-sm">$3,296</div>
                  <div className="text-xs text-green-600">Final</div>
                </div>
              </div>
            </div>
            <div className="mt-3 text-xs text-gray-600">
              Total: 4 invoices from 2 customers - $98.6K
            </div>
          </div>
        </div>

        {/* Cash Flow Alerts - Bottom Center */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-32 animate-slide-up">
          <div className="flex space-x-3">
            <div className="relative bg-white/95 backdrop-blur-lg rounded-2xl p-4 w-40 border border-gray-200 shadow-xl transition-all duration-500 animate-float-gentle overflow-hidden">
              {/* Cash flow ripple effects */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-green-400/25 rounded-full animate-ripple-cash-1"></div>
              </div>
              
              <div className="flex items-center">
                <DollarSign size={18} className="text-green-500 mr-2" />
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Cash runway</div>
                  <div className="text-xs text-gray-600">6 months</div>
                </div>
              </div>
            </div>
            <div className="relative bg-white/95 backdrop-blur-lg rounded-2xl p-4 w-40 border border-red-200 shadow-xl transition-all duration-500 animate-float-gentle-delayed overflow-hidden">
              {/* Alert ripple effects */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-red-400/30 rounded-full animate-ripple-alert-1"></div>
              </div>
              
              <div className="flex items-center">
                <AlertCircle size={18} className="text-red-500 mr-2" />
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Overdue</div>
                  <div className="text-xs text-gray-600">$1,498</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Consolidations hover state
  if (hoverState === 'consolidations') {
    return (
      <div className="relative min-h-[200px] w-full -mt-8">
        {/* Consolidation-themed ripple effects */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="absolute w-44 h-44 border border-purple-400/25 rounded-full animate-ripple-consolidation-1"></div>
          <div className="absolute w-60 h-60 border border-blue-400/20 rounded-full animate-ripple-consolidation-2"></div>
          <div className="absolute w-76 h-76 border border-cyan-400/15 rounded-full animate-ripple-consolidation-3"></div>
          <div className="absolute w-92 h-92 border border-purple-300/10 rounded-full animate-ripple-consolidation-4"></div>
        </div>

        {/* Global Finance Card - Top Left */}
        <div className="absolute left-0 md:left-16 top-0 animate-slide-in-left-bounce">
          <div className="relative bg-white/95 backdrop-blur-lg rounded-3xl p-5 w-64 md:w-72 border border-gray-200 shadow-2xl transition-all duration-500 animate-float-gentle overflow-hidden">
            {/* Global network ripple effects */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-blue-400/25 rounded-full animate-ripple-network-1"></div>
              <div className="absolute bottom-1/3 right-1/4 w-5 h-5 bg-purple-400/20 rounded-full animate-ripple-network-2"></div>
              <div className="absolute top-2/3 left-2/3 w-3 h-3 bg-cyan-400/30 rounded-full animate-ripple-network-3"></div>
            </div>
            
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white text-xs font-bold">GF</span>
                </div>
                <div>
                  <h3 className="text-gray-800 font-semibold text-sm">Global Finance</h3>
                  <p className="text-xs text-gray-500">Parent Company</p>
                </div>
              </div>
              <Globe size={16} className="text-blue-500" />
            </div>
            
            {/* Connection lines and subsidiary boxes */}
            <div className="relative">
              <div className="flex justify-between items-center mb-2">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-2 w-20 text-center">
                  <div className="w-4 h-4 bg-blue-500 rounded-full mx-auto mb-1 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">US</span>
                  </div>
                  <span className="text-xs text-gray-700">US Branch</span>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-2 w-20 text-center">
                  <div className="w-4 h-4 bg-red-500 rounded-full mx-auto mb-1 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">AU</span>
                  </div>
                  <span className="text-xs text-gray-700">AUS Branch</span>
                </div>
              </div>
              
              {/* Sub-branches */}
              <div className="flex justify-between items-center">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-2 w-16 text-center">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mx-auto mb-1"></div>
                  <span className="text-xs text-gray-700">Texas</span>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-2 w-16 text-center">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mx-auto mb-1"></div>
                  <span className="text-xs text-gray-700">California</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Integration Platforms - Top Right */}
        <div className="absolute right-0 md:right-16 top-0 animate-slide-in-right-bounce">
          <div className="relative bg-white/95 backdrop-blur-lg rounded-3xl p-5 w-72 md:w-80 border border-gray-200 shadow-2xl transition-all duration-500 animate-float-gentle-delayed overflow-hidden">
            {/* Integration ripple effects */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/3 left-1/4 w-6 h-6 bg-green-400/20 rounded-full animate-ripple-integration-1"></div>
              <div className="absolute bottom-1/4 right-1/3 w-4 h-4 bg-blue-400/25 rounded-full animate-ripple-integration-2"></div>
              <div className="absolute top-2/3 right-1/4 w-5 h-5 bg-purple-400/20 rounded-full animate-ripple-integration-3"></div>
            </div>
            
            <h3 className="text-base font-bold text-gray-900 mb-4 flex items-center">
              <Building2 size={18} className="text-blue-500 mr-2" />
              Platform Integrations
            </h3>
            
            <div className="grid grid-cols-3 gap-3">
              {/* QuickBooks */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-3 text-center hover:shadow-md transition-all duration-300">
                <div className="w-8 h-8 bg-green-500 rounded-lg mx-auto mb-2 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">QB</span>
                </div>
                <span className="text-xs text-gray-700 font-medium">QuickBooks</span>
                <div className="w-2 h-2 bg-green-500 rounded-full mx-auto mt-1"></div>
              </div>
              
              {/* Xero */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 text-center hover:shadow-md transition-all duration-300">
                <div className="w-8 h-8 bg-blue-500 rounded-lg mx-auto mb-2 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">X</span>
                </div>
                <span className="text-xs text-gray-700 font-medium">Xero</span>
                <div className="w-2 h-2 bg-blue-500 rounded-full mx-auto mt-1"></div>
              </div>
              
              {/* Sage */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-3 text-center hover:shadow-md transition-all duration-300">
                <div className="w-8 h-8 bg-green-600 rounded-lg mx-auto mb-2 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">S</span>
                </div>
                <span className="text-xs text-gray-700 font-medium">Sage</span>
                <div className="w-2 h-2 bg-green-600 rounded-full mx-auto mt-1"></div>
              </div>
            </div>
            
            <div className="mt-4 text-center">
              <div className="text-xs text-gray-500">Connected: 3 platforms</div>
              <div className="text-xs text-green-600 font-medium">All systems synced</div>
            </div>
          </div>
        </div>

        {/* Consolidation Summary - Bottom Center */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-32 animate-slide-up">
          <div className="relative bg-white/95 backdrop-blur-lg rounded-3xl p-5 w-80 md:w-96 border border-gray-200 shadow-2xl transition-all duration-500 animate-float-gentle-delayed-2 overflow-hidden">
            {/* Summary ripple effects */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-purple-400/15 rounded-full animate-ripple-summary-1"></div>
              <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-green-400/25 rounded-full animate-ripple-summary-2"></div>
              <div className="absolute bottom-1/4 left-1/4 w-5 h-5 bg-blue-400/20 rounded-full animate-ripple-summary-3"></div>
            </div>
            
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-gray-900">Consolidated View</h3>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-green-600 font-medium">Live</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">$2.4M</div>
                <div className="text-xs text-gray-600">Total Revenue</div>
                <div className="flex items-center justify-center mt-1">
                  <TrendingUp size={12} className="text-green-500 mr-1" />
                  <span className="text-xs text-green-600">+12.5%</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">$1.8M</div>
                <div className="text-xs text-gray-600">Total Expenses</div>
                <div className="flex items-center justify-center mt-1">
                  <TrendingDown size={12} className="text-red-500 mr-1" />
                  <span className="text-xs text-red-600">-3.2%</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between text-xs text-gray-600">
              <span>5 entities consolidated</span>
              <span>Last updated: 2 min ago</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};