import Hero from '@/components/Hero';
import PopularBikes from '@/components/PopularBikes';
import Featured from '@/components/Featured';

export default function Home() {
  return (
    <main>
      <Hero />
      <Featured />
      <PopularBikes />
    </main>
  );
}
