import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className='py-48 md:py-0 md:h-[820px] relative overflow-hidden bg-primary '>
      <div className='container mx-auto'>
        <div className='flex items-center justify-between'>
          {/* text */}
          <div className='w-full xl:max-w-[580px] md:h-[820px] flex flex-col justify-center items-start'>
            <h1 className='text-center xl:text-left mb-6'>
              Muslim <span>Essential</span> Store
            </h1>
            <p className='mb-10 text-lg max-w-[508px] mx-auto text-center text-[#9BA19D] xl:text-left xl:mx-0'>
              Welcome to IQLAS Online Store.
              Explore our Premium Date Hub & Muslim Essentials Product
              for the finest dates and more.
            </p>
            {/* btn group */}
            <div className='flex items-center gap-4 mx-auto xl:mx-0'>
              <Link href='/our-bikes' className='mx-auto md:mx-0'>
                <button className='btn btn-accent'>Shop now</button>
              </Link>
              <Link href='/our-bikes' className='mx-auto md:mx-0'>
                <button className='btn btn-primary'>Our Products</button>
              </Link>
            </div>
          </div>
          {/* img */}
          <div className='hidden xl:flex'>
            <Image
              src='/hero/hero.png'
              width={612}
              height={384}
              alt=''
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
