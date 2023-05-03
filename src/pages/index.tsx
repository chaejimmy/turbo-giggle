import React from 'react';
import RoomStays from '@/core-components/csr/molecules/room-stays';
import MyCarousel from '@/core-components/csr/molecules/carousel';
export default function index() {
  return (
    <div className="grid grid-cols-1 mx-auto">
      <RoomStays />
      <MyCarousel />
    </div>
  );
}
