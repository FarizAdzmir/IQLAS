'use client';

import { CartProvider as CProvider } from 'use-shopping-cart';

const CartProvider = ({ children }) => {
  return (
    <CProvider
      mode='payment'
      cartMode='client-only'
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY}
      successUrl='http://iqlas.vercel.app/stripe/success'
      cancelUrl='http://iqlas.vercel.app/stripe/error'
      language='en-US'
      currency='MYR'
      billingAddressCollection={true}
      shouldPersist={false}
    >
      {children}
    </CProvider>
  );
};

export default CartProvider;
