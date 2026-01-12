// Suppress hydration warnings caused by browser extensions
if (typeof window !== 'undefined') {
  const originalError = console.error;
  const originalWarn = console.warn;
  
  console.error = (...args) => {
    const errorMessage = String(args[0] || '');
    
    // Suppress all hydration-related errors and browser extension interference
    if (
      errorMessage.includes('Hydration') ||
      errorMessage.includes('hydration') ||
      errorMessage.includes('Minified React error') ||
      errorMessage.includes('server rendered HTML') ||
      errorMessage.includes('client properties') ||
      errorMessage.includes('tree hydrated') ||
      errorMessage.includes('jf-ext') ||
      errorMessage.includes('browser extension') ||
      args.some(arg => String(arg).includes('jf-ext'))
    ) {
      return;
    }
    
    originalError.apply(console, args);
  };
  
  console.warn = (...args) => {
    const warnMessage = String(args[0] || '');
    
    // Suppress hydration warnings
    if (
      warnMessage.includes('Hydration') ||
      warnMessage.includes('hydration') ||
      warnMessage.includes('server rendered HTML') ||
      warnMessage.includes('jf-ext') ||
      args.some(arg => String(arg).includes('jf-ext'))
    ) {
      return;
    }
    
    originalWarn.apply(console, args);
  };
}

export {};