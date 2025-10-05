import { useEffect, useRef, useState } from "react";
import { Rocket, Shield, Zap, Users, TrendingUp, Globe } from "lucide-react";

const Features = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: Rocket,
      title: "Lightning Fast",
      description: "Optimized performance that scales with your growth",
      gradient: "from-primary to-secondary",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption protecting your valuable data",
      gradient: "from-secondary to-accent",
    },
    {
      icon: Zap,
      title: "Real-time Analytics",
      description: "Instant insights to make data-driven decisions",
      gradient: "from-accent to-primary",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Seamless workflows for distributed teams",
      gradient: "from-primary to-accent",
    },
    {
      icon: TrendingUp,
      title: "Growth Focused",
      description: "Tools designed to accelerate your success",
      gradient: "from-secondary to-primary",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serve customers worldwide with ease",
      gradient: "from-accent to-secondary",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            features.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Powerful Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build, scale, and succeed in the digital world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isVisible = visibleCards.includes(index);

            return (
              <div
                key={index}
                className={`group glass rounded-2xl p-8 hover-lift transition-all duration-500 tilt-card ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                onMouseMove={(e) => {
                  const card = e.currentTarget;
                  const rect = card.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;
                  const rotateX = (y - centerY) / 10;
                  const rotateY = (centerX - x) / 10;
                  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.02)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)";
                }}
              >
                {/* Icon with gradient */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} p-4 mb-6 glow-primary group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-full h-full text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:gradient-text transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover effect line */}
                <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary to-secondary transition-all duration-500 mt-6 rounded-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
