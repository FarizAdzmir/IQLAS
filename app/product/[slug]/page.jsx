import { client, urlFor } from '@/app/lib/sanity';
import Image from 'next/image';
import AddToCartBtn from '@/components/AddToCartBtn';
import Link from 'next/link';

import {
  Shield,
  Clock,
  PackageCheck,
  RefreshCw,
  ChevronLeft,
} from 'lucide-react';

const getData = async (slug) => {
  const query = `*[_type == 'product' && slug.current == '${slug}'][0] {
    _id,
    images,
    price,
    price_id,
    name,
    description,
    "slug": slug.current,
    "category": categories->{name}
  }`;
  const data = await client.fetch(query);
  return data;
};

const ProductDetails = async ({ params }) => {
  const iqlas = await getData(params.slug);
  console.log(iqlas);
  return (
    <section className='pt-24 pb-32 bg-primary'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-14'>
          {/* img */}
          <div className='xl:flex-1 h-[460px] bg-extra/10 xl:w-[700px] xl:h-[540px] flex justify-center items-center rounded-3xl'>
            <Image
              src={urlFor(iqlas.images[0]).url()}
              width={473}
              height={290}
              priority
              alt=''
            />
          </div>
          {/* text */}
          <div className='flex-1 flex flex-col justify-center items-start gap-10'>
            <Link href='/' className='flex items-center gap-2 font-semibold text-accent'>
              <ChevronLeft size={20} />
              Back to home
            </Link>
            <div className='flex flex-col gap-6 items-start'>
              <div>
                <h3 className='text-accent'>{iqlas.name}</h3>
                <p className='text-lg font-semibold text-extra'>RM {iqlas.price}</p>
              </div>
              <p className='text-extra/70'>{iqlas.description}</p>
              <AddToCartBtn
                price_id={iqlas.price_id}
                name={iqlas.name}
                currency='MYR'
                description={iqlas.description}
                images={iqlas.images}
                price={iqlas.price}
                text='Add to cart'
                btnStyles='btn btn-accent'
              />
            </div>
            {/* info */}
            <div className='flex flex-col gap-3'>
              <div className='flex gap-2'>
                <PackageCheck size={20} className='text-accent' />
                <p className='text-extra'>Free shipping on orders over RM 120</p>
              </div>
              <div className='flex gap-2'>
                <RefreshCw size={20} className='text-accent' />
                <p className='text-extra'>Free return for 30 days</p>
              </div>
              {/* <div className='flex gap-2'>
                <Shield size={20} className='text-accent' />
                <p>
                  Extra
                </p>
                  </div> */}
              <div className='flex gap-2'>
                <Clock size={20} className='text-accent' />
                <p className='text-extra'>Fast delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
