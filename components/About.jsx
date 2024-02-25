"use client";
import React from "react";
import Image from "next/image";
import Link from 'next/link';

const About = () => {

  return (
    <section className="bg-primary">
        <div className="container gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light sm:text-lg">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-accent to-senior">About Us</h2>
                <p className="text-extra mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p className="text-extra">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
                <img className="w-full rounded-3xl" src="/images/DSC04182.webp" />
                <img className="mt-4 w-full lg:mt-10 rounded-3xl" src="/images/DSC04185.webp" />
            </div>
        </div>
    </section>
  );
};

export default About;