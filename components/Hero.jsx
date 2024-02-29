"use client";
import Image from "next/image";
import Link from 'next/link';
import { motion, easeInOut } from "framer-motion";
import { fadeIn } from "../lib/variants";

export default function Hero() {
  const backgroundImageUrl = '/images/Desert.webp';
  const IQLASBox = '/images/IQLAS-Box.png';
  return (
    <section
    className='py-48 md:py-0 md:h-[820px] relative overflow-hidden bg-primary'
    style={{
      backgroundImage: `url(${backgroundImageUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
      <div className="container mx-auto h-full xl:pt-10">
        {/* text & img wrapper */}
        <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-start h-full">
          {/* text */}
          <div className="text-center xl:max-w-xl xl:text-left mt-16 xl:mt-0">
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="h1"
            >
              Muslim Essential Store{" "}
              {/* <span className="text-transparent bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text">
                IQLAS
              </span>{" "} */}
            </motion.h1>
            <motion.p
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="text-white description max-w-[550px] mx-auto xl:mx-0 mb-6 xl:mb-10"
            >
              Welcome to IQLAS Online Store. Explore our Premium Date Hub & Muslim Essentials Product for the finest dates and more.
            </motion.p>
            {/* btns */}
            <motion.div
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }}
              className="flex gap-x-3 justify-center xl:justify-start"
            >
              {/* Button */}
                <div className='flex items-center gap-4 mx-auto xl:mx-0'>
                <Link href='/our-products' className='btn btn-accent hover:text-white'>
                  Shop now
                </Link>
                {/*<Link href='/our-products' className='btn btn-primary'>
                  Our Products
                </Link>*/}
              </div>
            </motion.div>
          </div>
          {/* img car */}
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="relative w-full h-full max-h-[50vh] md:max-w-[70vw] xl:max-w-[860px] xl:max-h-[542px] xl:absolute xl:-right-[100px] min-[1680px]:right-[120px] xl:top-48"
          >
            <Image
              src={IQLASBox}
              fill
              alt=""
              style={{ objectFit: "contain" }}
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
