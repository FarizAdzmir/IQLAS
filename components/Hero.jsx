import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  // Correct path relative to the public directory
  const backgroundImageUrl = '/hero/Desert.jpg';

  return (
    <section
      className='py-48 md:py-0 md:h-[820px] relative overflow-hidden bg-primary'
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover', // Cover the entire section
        backgroundPosition: 'center', // Center the background image
      }}
    >
      <div className='container mx-auto'>
        <div className='flex items-center justify-between'>
          {/* text */}
          <div className='w-full xl:max-w-[580px] md:h-[820px] flex flex-col justify-center items-start'>
            <h1 className='text-center bg-clip-text text-transparent bg-gradient-to-r from-accent to-senior xl:text-left mb-6'>
              Muslim <span>Essential</span> Store
            </h1>
            <p className='mb-10 text-lg max-w-[508px] mx-auto text-center text-white xl:text-left xl:mx-0'>
              Welcome to IQLAS Online Store.
              Explore our Premium Date Hub & Muslim Essentials Product
              for the finest dates and more.
            </p>
            {/* button group */}
            <div className='flex items-center gap-4 mx-auto xl:mx-0'>
              <Link href='/our-products' className='btn btn-accent'>
                Shop now
              </Link>
              {/*<Link href='/our-products' className='btn btn-primary'>
                Our Products
              </Link>*/}
            </div>
          </div>
          {/* img */}
          <div className='hidden xl:flex'>
            <Image
              src='/hero/hero.png'
              width={612} // Adjusted width
              height={384} // Adjusted height
              alt='Hero Image'
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
