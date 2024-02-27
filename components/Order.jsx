import Link from 'next/link';
import { Input } from './ui/input';
import {
  RiFacebookFill,
  RiInstagramFill,
  RiTwitterFill,
} from 'react-icons/ri';

const Footer = () => {

  const backgroundImageUrl = '/images/Banner.webp'
  return (
    <footer className='pt-12 xl:pt-24 bg-primary text-white text-center'>
      <section
        className='container mx-auto pt-10 rounded-3xl'
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className='flex flex-col gap-8'>
          <div>
            <h2 className='bg-clip-text text-transparent bg-gradient-to-r from-accent to-senior capitalize leading-tight mb-2'>
              Order Via Whatsapp
            </h2>
            <p className='text-extra/90'>
            Prepare your dates for the upcoming Ramadan 🌙
            </p>
          </div>
          {/* form */}
          <form className='flex flex-col xl:flex-row justify-center w-full max-w-[720px] mx-auto gap-5'>
            <div className='justify-center xl:justify-center items-center gap-4 mx-auto xl:mx-0'>
              <Link href='https://wa.me/+601165351511' className='btn btn-accent hover:text-white'>
                Order
              </Link>
            </div>
          </form>
          {/* socials */}
          <div className='flex gap-8 mx-auto text-[20px] text-white/60 mb-20'>
            <Link href=''>
              <RiTwitterFill />
            </Link>
            <Link href=''>
              <RiFacebookFill />
            </Link>
            <Link href='https://www.instagram.com/iqlas.co/'>
              <RiInstagramFill />
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
