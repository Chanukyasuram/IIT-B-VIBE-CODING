import React from 'react';

interface LoaderProps {
  isLoading: boolean;
}

export const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 transition-all duration-300">
      <div className="text-center">
        {/* Main loader animation */}
        <div className="relative mb-8">
          {/* Outer rotating ring */}
          <div className="w-24 h-24 mx-auto relative">
            <div className="absolute inset-0 border-4 border-blue-200/30 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-transparent border-t-blue-400 border-r-cyan-400 rounded-full animate-spin"></div>
            
            {/* Inner pulsing circle */}
            <div className="absolute inset-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center animate-pulse">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
          
          {/* Floating dots around the loader */}
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          </div>
          <div className="absolute top-1/2 -right-2 transform -translate-y-1/2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
          <div className="absolute top-1/2 -left-2 transform -translate-y-1/2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0.6s' }}></div>
          </div>
        </div>

        {/* Loading bars */}
        <div className="flex items-end justify-center space-x-1 mb-6">
          {[1, 2, 3, 4, 5].map((bar) => (
            <div
              key={bar}
              className="w-2 bg-gradient-to-t from-blue-600 to-cyan-400 rounded-full animate-pulse"
              style={{
                height: `${20 + bar * 8}px`,
                animationDelay: `${bar * 0.1}s`,
                animationDuration: '1s'
              }}
            ></div>
          ))}
        </div>

        {/* Loading text with typewriter effect */}
        <div className="space-y-2">
          <div className="text-white font-medium text-lg animate-pulse">
            Initializing FinanceFlow
          </div>
          <div className="flex items-center justify-center space-x-1">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="mt-8 w-64 mx-auto">
          <div className="h-1 bg-blue-200/30 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse" style={{ width: '75%' }}></div>
          </div>
          <div className="text-blue-200 text-sm mt-2 animate-pulse">Setting up your workspace...</div>
        </div>
      </div>
    </div>
  );
};