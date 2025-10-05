import { useEffect, useState } from "react";

const Customers = () => {
  const [currentSet, setCurrentSet] = useState(0);

  const customerSets = [
    [
      { name: "TechCorp", logo: "TC" },
      { name: "InnovateLabs", logo: "IL" },
      { name: "FutureWorks", logo: "FW" },
      { name: "DataFlow", logo: "DF" },
    ],
    [
      { name: "CloudScale", logo: "CS" },
      { name: "QuantumLeap", logo: "QL" },
      { name: "NexusAI", logo: "NA" },
      { name: "Synergy+", logo: "S+" },
    ],
    [
      { name: "VelocityCore", logo: "VC" },
      { name: "Zenith Digital", logo: "ZD" },
      { name: "Apex Systems", logo: "AS" },
      { name: "Horizon Tech", logo: "HT" },
    ],
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSet((prev) => (prev + 1) % customerSets.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p className="text-muted-foreground">
            Join thousands of companies transforming their digital presence
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto h-32 overflow-hidden">
          {customerSets.map((set, setIndex) => (
            <div
              key={setIndex}
              className={`absolute inset-0 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 ${
                setIndex === currentSet
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {set.map((customer, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center glass rounded-2xl p-6 hover-lift group"
                >
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                      {customer.logo}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {customer.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {customerSets.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSet(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSet
                  ? "w-8 bg-gradient-to-r from-primary to-secondary"
                  : "bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Customers;
