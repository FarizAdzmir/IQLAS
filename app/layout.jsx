import { Epilogue } from 'next/font/google';
import './globals.css';

import Header from '@/components/Header';
import Footer from '@/components/Footer';import Featured from '@/components/Featured';
import CartProvider from '@/components/CartProvider';
import { Toaster } from '@/components/ui/toaster';

const epilogue = Epilogue({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-epilogue',
});

export const metadata = {
  title: 'IQLAS',
  description: 'Muslim Essential Store',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={epilogue.variable}>
        <CartProvider>
          <Header />
          {children}
          <Toaster />
          <Footer />
        </CartProvider>
        {/* <div className='h-[2000px]'></div> */}
      </body>
    </html>
  );
}
