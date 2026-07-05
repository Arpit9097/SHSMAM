import React from 'react';

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background/80 dark:bg-on-surface/80 backdrop-blur-md z-[9999]">
      <div className="flex flex-col items-center gap-md">
        <div className="relative w-16 h-16">
          {/* Inner circle */}
          <div className="absolute inset-0 rounded-full border-4 border-primary/20"></div>
          {/* Animated spinner ring */}
          <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
        </div>
        <p className="font-display-lg text-headline-md font-bold tracking-tight text-primary dark:text-primary-fixed-dim animate-pulse">
          SHSMAM Innovations
        </p>
        <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest text-xs">
          Loading Architectures
        </span>
      </div>
    </div>
  );
}
