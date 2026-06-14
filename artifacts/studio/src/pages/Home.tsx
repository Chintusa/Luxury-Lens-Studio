import Navigation from "../sections/Navigation";
import Hero from "../sections/Hero";
import FeaturedStories from "../sections/FeaturedStories";
import Services from "../sections/Services";
import Films from "../sections/Films";
import Portfolio from "../sections/Portfolio";
import Destinations from "../sections/Destinations";
import About from "../sections/About";
import Testimonials from "../sections/Testimonials";
import InstagramFeed from "../sections/InstagramFeed";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Navigation />
      <Hero />
      <FeaturedStories />
      <Services />
      <Films />
      <Portfolio />
      <Destinations />
      <About />
      <Testimonials />
      <InstagramFeed />
      <Contact />
      <Footer />
    </div>
  );
}
