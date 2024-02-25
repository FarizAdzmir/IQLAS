import { client } from '@/app/lib/sanity';
import ProductCategories from '@/components/ProductCategories';

const getData = async () => {
  const query = `*[_type == 'product']  {
    _id,
    images,
    price,
    price_id,
    name,
    description,
    "slug": slug.current,
    "categories": categories[]-> {name}
  }`;
  const data = await client.fetch(query);
  return data;
};

const OurProducts = async () => {
  const products = await getData();

  return (
    <div>
      <ProductCategories products={products} />
    </div>
  );
};

export default OurProducts;
