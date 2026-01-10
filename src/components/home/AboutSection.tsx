import { Sparkles, Award, Users, Calendar } from "lucide-react";

const stats = [
  { icon: Calendar, value: "500+", label: "Events Delivered" },
  { icon: Users, value: "10K+", label: "Happy Clients" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Sparkles, value: "50+", label: "Expert Team" },
];

const AboutSection = () => {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase">
                About Phoenix Events
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight">
                Crafting Dreams into{" "}
                <span className="text-gradient-gold">Reality</span>
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground font-sans leading-relaxed">
              <p>
                Phoenix Events & Productions is a premier event management company 
                dedicated to creating extraordinary celebrations that leave lasting impressions. 
                With over 15 years of experience, we've mastered the art of transforming 
                ordinary moments into grand memories.
              </p>
              <p>
                From intimate gatherings to lavish weddings and corporate galas, our team 
                of creative professionals brings passion, precision, and an unwavering 
                commitment to excellence to every event we touch.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center p-4 rounded-lg border border-border/50 bg-background/50 hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <stat.icon className="w-6 h-6 mx-auto text-primary mb-2" />
                  <p className="text-2xl md:text-3xl font-serif font-bold text-gradient-gold">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="overflow-hidden rounded-lg hover-lift">
                  <img
                    src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80"
                    alt="Elegant wedding setup"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-lg hover-lift">
                  <img
                    src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80"
                    alt="Wedding ceremony"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="overflow-hidden rounded-lg hover-lift">
                  <img
                    src="https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?w=600&q=80"
                    alt="Event decoration"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-lg hover-lift">
                  <img
                    src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80"
                    alt="Birthday celebration"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>
            {/* Decorative Border */}
            <div className="absolute -inset-4 border border-primary/20 rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
