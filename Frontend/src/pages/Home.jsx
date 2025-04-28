import Hero from '../components/Hero';
import TrustedBy from '../components/TrustedBy';
import Features from '../components/Features';
import MarketSection from '../components/MarketSection';
import CtaSection from '../components/CtaSection';

function Home() {
  return (
    <div className="font-inter text-white bg-darkBg min-h-screen">
      <main>
        <Hero />
        <MarketSection />
        <TrustedBy />
        <Features />
        <CtaSection />
      </main>
    </div>
  );
}

export default Home;
