import HeroCanvas from './components/HeroCanvas';
import FeatureGrid from './components/FeatureGrid';
import SpecTable from './components/SpecTable';
import VideoSection from './components/VideoSection';
import CtaSection from './components/CtaSection';
import BentoFeatures from './components/BentoFeatures';
import Testimonials from './components/Testimonials';
import ActionReveal from './components/ActionReveal';
import LampShowcase from './components/LampShowcase';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-primary selection:bg-accent selection:text-white">
      <HeroCanvas />
      <FeatureGrid />
      <BentoFeatures />
      <SpecTable />
      <VideoSection />
      <Testimonials />
      <ActionReveal />
      <LampShowcase />
      <CtaSection />
      <Footer />
    </main>
  );
}
