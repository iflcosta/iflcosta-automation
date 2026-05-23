import { Nav } from '@/components/landing/Nav';
import { Hero } from '@/components/landing/Hero';
import { Pain } from '@/components/landing/Pain';
import { Solutions } from '@/components/landing/Solutions';
import { How } from '@/components/landing/How';
import { Social } from '@/components/landing/Social';
import { FinalCTA } from '@/components/landing/FinalCTA';
import { Footer } from '@/components/landing/Footer';

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Pain />
        <Solutions />
        <How />
        <Social />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
