import '@/styles/globals.css';
import type {AppProps} from 'next/app';
import Navbar from '@/core-components/csr/molecules/navbar/Navbar';
import Footer from '@/core-components/csr/molecules/footer/footer';

export default function App({Component, pageProps}: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
