import { client } from '@/app/lib/sanity';
import Link from 'next/link';
import PopularProductCarousel from './PopularProductCarousel';

// get data
const getData = async () => {
  const query = `*[_type == 'product' && references(*[_type == 'category' && name == 'Popular']._id, categories)] {
    _id,
      name,
      description,
      images,
      price,
      price_id,
      "slug": slug.current,
      "categories": categories[]-> {
        name }
      }`;
  const data = await client.fetch(query);
  return data;
};

const PopularProducts = async () => {
  const products = await getData();
  return (
    <section className='py-24 bg-primary'>
      <div className='container mx-auto'>
        <h2 className='text-center'>Most Popular Products</h2>
        <p className='text-center text-[#E4E3D6] mb-[30px]'>
          Authentic Feelings Of Arab Gulf.
        </p>
        <PopularProductCarousel products={products} />
        <Link href='/our-products'>
          <button className='btn btn-accent mx-auto'>More Product</button>
        </Link>
      </div>
    </section>
  );
};

export default PopularProducts;
