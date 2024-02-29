"use client";
import React, { useState, useEffect } from 'react';
import { client } from '@/app/lib/sanity';
import Link from 'next/link';
import PopularProductCarousel from './PopularProductCarousel';
import { motion } from "framer-motion";
import { fadeIn } from "../lib/variants";

const PopularProducts = () => {
  // State to store your products
  const [products, setProducts] = useState([]);

  // Effect to fetch data on component mount
  useEffect(() => {
    const getData = async () => {
      const query = `*[_type == 'product' && references(*[_type == 'category' && name == 'Popular']._id, categories)] {
        _id,
        name,
        description,
        images,
        price,
        price_id,
        "slug": slug.current,
        "categories": categories[]-> { name }
      }`;
      const data = await client.fetch(query);
      setProducts(data); // Update state with fetched data
    };

    getData(); // Call the async function
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
    >
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
    </motion.div>
  );
};

export default PopularProducts;
