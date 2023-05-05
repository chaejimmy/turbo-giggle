import React from 'react';
import Head from 'next/head';
import {
  IdentityVerified,
  Description,
  Amenities,
} from '@/components/booking-flow-partner';

const BookingFlowPartner = () => {
  return (
    <>
      <Head>
        <title>Booking Flow Partner</title>
      </Head>
      <div className="flex flex-col w-full  border-t-2  px-20 my-4">
        <IdentityVerified />
        <Description />
        <Amenities />
      </div>
    </>
  );
};

export default BookingFlowPartner;
