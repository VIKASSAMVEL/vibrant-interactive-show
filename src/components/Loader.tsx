import { useEffect, useState } from "react";

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="relative w-full max-w-md px-8">
        {/* Morphing gradient shape */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-30">
          <div 
            className="w-full h-full animate-morph animate-gradient"
            style={{
              background: "var(--gradient-primary)",
              filter: "blur(40px)",
            }}
          />
        </div>

        {/* Progress bar */}
        <div className="relative">
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full transition-all duration-300 ease-out animate-gradient"
              style={{
                width: `${progress}%`,
                background: "var(--gradient-primary)",
              }}
            />
          </div>
          
          {/* Percentage */}
          <div className="mt-6 text-center">
            <span className="text-4xl font-bold gradient-text">
              {progress}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
