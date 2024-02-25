"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import { runFireworks } from '../../lib/utils'; 

const SuccessPage = () => {

  useEffect(() => {
    runFireworks();
  }, []);

  return (
    <section className='py-72 bg-primary'>
      <div className='container mx-auto p-10 bg-extra/10 rounded-3xl'>
        <h2 className='text-center mb-4 text-accent'>
          Thank You For Your Order!
        </h2>
        <h3 className="text-center text-extra mb-4">Check your email inbox for the receipt.</h3>
        <p className="text-center text-extra mb-10">
          If you have any questions, please email <br />
          <a className="text-center text-accent" href="mailto:support@iqlas.com">
            support@iqlas.com
          </a>
        </p>
        <Link href='/'>
          <button className='btn btn-accent mx-auto'>
            Back to the Home Page
          </button>
        </Link>
      </div>
    </section>
  );
};

export default SuccessPage;
