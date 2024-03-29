'use client';
import AddToCartBtn from './AddToCartBtn';

import { urlFor } from '@/app/lib/sanity';
import Image from 'next/image';
import Link from 'next/link';
import { CgEye, CgShoppingBag } from 'react-icons/cg';

const Product = ({ product }) => {
  const popularProductCat = product.categories.find(
    (product) => product.name === 'popular'
  );

  return (
    <div className='group'>
      <div className='border border-[#171717] h-[328px] mb-5 p-4 overflow-hidden relative rounded-3xl'>
        <div className='bg-[#171717] rounded-2xl w-full h-full group-hover:bg-extra/20 transition-all duration-300 flex justify-center items-center'>
          {/* badge */}
          {popularProductCat && (
            <div className='absolute top-8 left-8 bg-accent text-white px-3 text-sm uppercase font-medium rounded-md'>
              Popular
            </div>
          )}
          <Image
            src={urlFor(product.images[0]).url()}
            width={240}
            height={147}
            alt=''
          />
        </div>
        {/* btn group */}
        <div className='absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center gap-[10px] opacity-0 group-hover:opacity-100 transition-all duration-300'>
          <AddToCartBtn
            price_id={product.price_id}
            name={product.name}
            currency='MYR'
            description={product.description}
            images={product.images}
            price={product.price}
            btnStyles='btn-icon btn-accent'
            icon={<CgShoppingBag />}
          />
          <Link href={`/product/${product.slug}`}>
            <button className='btn-icon btn-primary'>
              <CgEye />
            </button>
          </Link>
        </div>
      </div>
      <h5 className='text-[#E4E3D6] font-semibold mb-2'>
        {/* IQLAS's */} {product.categories[0].name}
      </h5>
      <h4 className='mb-1'>{product.name}</h4>
      <div className='text-lg font-bold text-[#E4E3D6]'>RM {product.price}</div>
    </div>
  );
};

export default Product;
