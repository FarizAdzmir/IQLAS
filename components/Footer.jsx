"use client";
import Image from "next/image";
import { FaPhone, FaEnvelope } from "react-icons/fa6";
import Copyright from "./Copyright";
import { motion } from "framer-motion";
import { fadeIn } from "../lib/variants";
import { Link } from "react-scroll";

export default function Footer() {
  return (
    <footer className="pt-20 bg-primary z-20" id="footer">
      <div className="container mx-auto mb-24">
        {/* grid */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="flex flex-col lg:flex-row lg:justify-between gap-x-5 gap-y-14"
        >
          <div className="flex flex-col flex-1 gap-y-8">
            {/* logo */}
            <Link
              to={"home"}
              smooth={true}
              spy={true}
              className="cursor-pointer"
            >
              <Image src={"/images/IQLAS-Logo.png"} width={100} height={50} alt="" />
            </Link>
            {/* phone & email */}
            <div className="flex flex-col gap-y-4 font-semibold">
              {/* phone */}
              <div className="flex items-center gap-x-[10px]">
                <FaPhone className="text-accent"/>
                <div className="font-medium text-extra">(123)456-7890</div>
              </div>
              {/* email */}
              <div className="flex items-center gap-x-[10px]">
                <FaEnvelope className="text-accent"/>
                <div className="font-medium text-extra">support@iqlas.com</div>
              </div>
            </div>
          </div>
          {/* links */}
          <div className="flex-1 flex flex-col xl:items-center">
            <div>
              <h3 className="h3 font-bold mb-8 text-accent">
                Company
              </h3>
              <ul className="flex flex-col gap-y-4 font-semibold">
                <li>
                  <a href="" className="text-extra">Kuala Lumpur</a>
                </li>
                <li>
                  <a href="" className="text-extra">Ramadhan</a>
                </li>
                <li>
                  <a href="https://iqlas.vercel.app/our-products" className="text-extra">Product</a>
                </li>
                <li>
                  <a href="" className="text-extra">Blog</a>
                </li>
              </ul>
            </div>
          </div>
          {/* program */}
          <div className="flex-1">
            <h3 className="h3 font-bold text-accent">
              Working Hours
            </h3>
            <br />
            <div className="flex flex-col gap-y-4">
              <div className="flex gap-x-2">
                <div className="text-extra">Mon-Fri:</div>
                <div className="font-semibold text-extra">09:00AM - 09:00PM</div>
              </div>
              <div className="flex gap-x-2">
                <div className="text-extra">Sat:</div>
                <div className="font-semibold text-extra">09:00AM - 07:00PM</div>
              </div>
              <div className="flex gap-x-2">
                <div className="text-extra">Sun:</div>
                <div className="font-semibold text-extra">Closed</div>
              </div>
            </div>
          </div>
          {/* newsletter */}
          <div className="flex-1">
            <h3 className="h3 font-bold mb-8 text-accent">
              Update
            </h3>
            <div className="mb-9 text-extra">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
        </motion.div>
      </div>
      <Copyright />
    </footer>
  );
}
