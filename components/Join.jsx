import Link from 'next/link';
import { Input } from './ui/input';
import {
  RiFacebookFill,
  RiInstagramFill,

  RiTwitterFill,
} from 'react-icons/ri';

const Footer = () => {

  const backgroundImageUrl = '/images/Desert-Night.webp'
  return (
    <footer className='pt-12 xl:pt-24 bg-primary text-white text-center'>
      <section
        className='container mx-auto pt-10 rounded-3xl'
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className='flex flex-col gap-8'>
          <div>
            <h2 className='bg-clip-text text-transparent bg-gradient-to-r from-accent to-senior capitalize leading-tight mb-2'>
              Subscribe to our newsletter
            </h2>
            <p className='text-extra/90'>
              Be the first to get the latest news about trends, promotions, and
              much more!
            </p>
          </div>
          {/* form */}
          <form className='flex flex-col xl:flex-row w-full max-w-[720px] mx-auto gap-5'>
            <Input placeholder='Your email address' />
            <button className='btn w-full xl:max-w-[150px] h-[60px] btn-accent'>
              Join
            </button>
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
