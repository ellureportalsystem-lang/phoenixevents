import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import EventsSection from "@/components/home/EventsSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import GalleryPreviewSection from "@/components/home/GalleryPreviewSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <EventsSection />
      <WhyChooseUsSection />
      <GalleryPreviewSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
