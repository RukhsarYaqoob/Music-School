import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import TestimonialsCards from "@/components/TestimonialsCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
   <main className="min-h-screen bg-black/[0.96] antialised bg-grid-white/[0.2]">
    <HeroSection />
    <FeaturedCourses /> 
    <TestimonialsCards />
    <UpcomingWebinars />
    <WhyChooseUs />
    <Instructors />
    <Footer />
   </main>
  );
}
