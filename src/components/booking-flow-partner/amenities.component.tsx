import React from 'react';
import {RoundButton, Icon} from '@/core-components/csr';
const Amenities = () => {
  const arrAmenities = [
    {title: 'Garden View', icon: 'GiTreeBranch'},
    {title: 'Free Wifi', icon: 'AiOutlineWifi'},
    {title: 'Free Washer', icon: 'TbWashDry1'},
    {title: 'Air Conditioning', icon: 'TbAirConditioning'},
    {title: 'Garden View', icon: 'GiTreeBranch'},
    {title: 'Free Wifi', icon: 'AiOutlineWifi'},
    {title: 'Refrigerator', icon: 'CgSmartHomeRefrigerator'},
    {title: 'Dryer', icon: 'MdDryCleaning'},
  ];
  return (
    <div className="my-6">
      <span className="text-2xl font-bold">Amenities Looking for</span>
      <div className="w-1/2 grid grid-cols-2 grid-rows-5 py-4 gap-2">
        {arrAmenities?.map(({title, icon}) => (
          <div className="flex " key={title}>
            <span className="flex items-center gap-2">
              <Icon nameIcon={icon} propsIcon={{size: 22}} />
              {title}
            </span>
          </div>
        ))}
      </div>
      <div>
        <RoundButton title="Show more amenities" className="text-black" />
      </div>
    </div>
  );
};

export default Amenities;
