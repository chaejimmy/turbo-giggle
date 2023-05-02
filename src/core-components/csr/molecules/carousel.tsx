import {Carousel as CarouselRRC} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Card from './cards/UserCard';
import Bluecard1 from '../atoms/bluecards/Bluecard1';
import React from 'react';

export default function Carousel() {
  return (
    <div>
      <div className="mt-5">
        <Bluecard1 />
      </div>
      <div className="my-6">
        <CarouselRRC autoPlay className="gap-2">
          <div className="flex justify-center gap-3 mx-6">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div className="flex justify-center gap-3 mx-6 ">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div className="flex justify-center gap-3 mx-6 ">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </CarouselRRC>
      </div>
    </div>
  );
}
