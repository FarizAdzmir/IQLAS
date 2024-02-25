import Hero from '@/components/Hero';
import PopularProducts from '@/components/PopularProducts';
import Featured from '@/components/Featured';

export default function Home() {
  return (
    <main>
      <Hero />
      <Featured />
      <PopularProducts />
    </main>
  );
}
