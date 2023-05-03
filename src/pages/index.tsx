import React from 'react';
import Navbar from '@/core-components/csr/molecules/navbar/Navbar';
import RoomStays from '@/core-components/csr/molecules/room-stays';
import Footer1 from '@/core-components/csr/molecules/footer/Footer1';
import MyCarousel from '@/core-components/csr/molecules/carousel';
export default function index() {
  return (
    <div className="grid grid-cols-1 mx-auto">
      <Navbar />
      <RoomStays />
      <MyCarousel />
      <Footer1 />
    </div>
  );
}
