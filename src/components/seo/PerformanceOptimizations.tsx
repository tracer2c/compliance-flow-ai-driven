import { lazy, Suspense } from 'react';

// Lazy loading wrapper for heavy components
export const LazyComponent = ({ Component, fallback = <div>Loading...</div>, ...props }: any) => {
  const LazyLoadedComponent = lazy(() => import(Component));
  
  return (
    <Suspense fallback={fallback}>
      <LazyLoadedComponent {...props} />
    </Suspense>
  );
};

// Image optimization component with lazy loading
interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
}

export const OptimizedImage = ({ 
  src, 
  alt, 
  className = "", 
  width, 
  height, 
  loading = "lazy" 
}: OptimizedImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={loading}
      decoding="async"
      style={{ 
        aspectRatio: width && height ? `${width}/${height}` : undefined 
      }}
    />
  );
};

// Preload critical resources
export const PreloadCriticalResources = () => {
  return (
    <>
      {/* Preload critical fonts */}
      <link
        rel="preload"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
        as="style"
        onLoad={(e) => {
          const target = e.target as HTMLLinkElement;
          target.onload = null;
          target.rel = 'stylesheet';
        }}
      />
      <link
        rel="preload"
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
        as="style"
        onLoad={(e) => {
          const target = e.target as HTMLLinkElement;
          target.onload = null;
          target.rel = 'stylesheet';
        }}
      />
      
      {/* Preload critical CSS */}
      <link rel="preload" href="/src/index.css" as="style" />
      
      {/* DNS prefetch for external resources */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
    </>
  );
};