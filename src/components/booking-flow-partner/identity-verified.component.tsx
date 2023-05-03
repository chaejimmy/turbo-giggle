import React from 'react';
import Image from 'next/image';
import {TbShare3} from 'react-icons/tb';
const IdentityVerified = () => {
  return (
    <>
      <div className="flex flex-row w-full justify-between my-4">
        <div className="flex">
          <Image
            src="https://picsum.photos/60/60"
            width="50"
            height="50"
            style={{borderRadius: 25}}
            alt="avatar"
          />
          <div className="ml-4">
            <h6 className="text-sm">Identity verified</h6>
            <h6 className="text-xl font-bold">John Ghazal</h6>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <button className="rounded-md border h-fit p-1 border-x-gray-50">
            Follow
          </button>
          <button className="rounded-md border h-fit p-1 border-x-gray-50">
            <TbShare3 />
          </button>
        </div>
      </div>
      <div className="flex-row my-4  grid grid-cols-2 h-56">
        <div className="flex mx-2 h-56">
          <Image
            src="https://picsum.photos/300/300"
            width={500}
            height={500}
            style={{height: '100%', width: '100%', borderRadius: 10}}
            alt="avatar"
          />
        </div>
        <div className="flex flex-col h-28 gap-2">
          <div className="flex flex-row h-full gap-2">
            <Image
              src="https://picsum.photos/601/587"
              width={500}
              height={500}
              style={{height: '100%', width: '100%', borderRadius: 10}}
              alt="avatar"
            />
            <Image
              src="https://picsum.photos/876/876"
              width={500}
              height={500}
              style={{height: '100%', width: '100%', borderRadius: 10}}
              alt="avatar"
            />
          </div>
          <div className="flex h-28">
            <Image
              src="https://picsum.photos/978/987"
              width={500}
              height={500}
              style={{height: '94%', width: '100%', borderRadius: 10}}
              alt="avatar"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default IdentityVerified;
