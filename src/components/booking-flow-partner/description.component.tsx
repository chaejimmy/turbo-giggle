import React from 'react';

const Description = () => {
  return (
    <>
      <div className="grid  grid-cols-2">
        <div className="flex flex-col">
          <div className="flex gap-1">
            <img src="assets/svg/Vector.svg" className="fill-purple" />
            <span className="text-sm">
              To protect your payment, never transfer money or communicate
              outside of the Airbnb website or app.
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold my-4">Description</span>
            <span className="text-sm">Available From : 24, April 2023</span>
            <span className="text-sm my-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </span>
            <button className="bg-white rounded-3xl w-fit p-2 shadow-xl border border-lightGrey">
              Show more
            </button>
          </div>
        </div>
        <div>
          <div className="flex flex-col w-fit rounded-lg  shadow-md  p-4 px-10 border border-lightGrey ml-4">
            <span className="font-bold">
              $75-$90<span className="text-sm font-normal"> / night</span>
            </span>
            <div className="flex gap-2 my-2">
              <button className=" rounded-3xl w-fit p-2 shadow-xl border border-lightGrey">
                Send Message
              </button>
              <button className=" rounded-3xl w-fit p-2 shadow-xl border border-lightGrey bg-purple text-white">
                Send Proposal
              </button>
            </div>
            <span className="text-center text-sm">
              You won’t be charged yet
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Description;
