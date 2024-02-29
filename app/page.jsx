import Hero from '@/components/Hero';
import PopularProducts from '@/components/PopularProducts';
// import Featured from '@/components/Featured';
import About from '@/components/About';
import Order from '@/components/Order';

export default function Home() {
  return (
    <main className='bg-primary'>
      <Hero />
      {/*<Featured /> */}
      <PopularProducts />
      <About />
      <Order />
    </main>
  );
}
