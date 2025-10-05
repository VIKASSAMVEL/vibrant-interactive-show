import { useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechVision",
      content: "Working with this team transformed our entire digital presence. The attention to detail and innovative solutions exceeded all expectations.",
      rating: 5,
      avatar: "SJ",
    },
    {
      name: "Michael Chen",
      role: "CTO, InnovateLabs",
      content: "Exceptional quality and lightning-fast delivery. They turned our complex requirements into an elegant, scalable solution.",
      rating: 5,
      avatar: "MC",
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, StartupHub",
      content: "The best investment we made in our company. Their expertise and dedication helped us achieve a 300% growth in just 6 months.",
      rating: 5,
      avatar: "ER",
    },
    {
      name: "David Park",
      role: "Director, FutureWorks",
      content: "Incredible team that truly understands modern technology. They delivered beyond what we thought was possible.",
      rating: 5,
      avatar: "DP",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleScroll = (e: React.WheelEvent) => {
    if (e.deltaY > 0) {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    } else {
      setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
  };

  return (
    <section
      id="testimonials"
      className="py-20 relative overflow-hidden"
      onWheel={handleScroll}
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Client Success Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Trusted by industry leaders worldwide
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Cards */}
          <div className="relative h-[400px]">
            {testimonials.map((testimonial, index) => {
              const offset = (index - activeIndex + testimonials.length) % testimonials.length;
              const isActive = offset === 0;

              return (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ${
                    isActive
                      ? "opacity-100 scale-100 z-10"
                      : offset === 1
                      ? "opacity-30 scale-90 translate-x-[60%] z-0"
                      : offset === testimonials.length - 1
                      ? "opacity-30 scale-90 -translate-x-[60%] z-0"
                      : "opacity-0 scale-75"
                  }`}
                  style={{
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                >
                  <div className="glass rounded-3xl p-8 md:p-12 h-full flex flex-col justify-between">
                    {/* Quote Icon */}
                    <Quote className="w-12 h-12 text-primary/30 mb-6" />

                    {/* Content */}
                    <div className="flex-1">
                      <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed mb-8">
                        "{testimonial.content}"
                      </p>

                      {/* Rating */}
                      <div className="flex gap-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-primary text-primary"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg glow-primary">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-bold text-lg gradient-text">
                          {testimonial.name}
                        </div>
                        <div className="text-muted-foreground">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`transition-all duration-300 ${
                  index === activeIndex
                    ? "w-8 h-2 rounded-full bg-gradient-to-r from-primary to-secondary"
                    : "w-2 h-2 rounded-full bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
