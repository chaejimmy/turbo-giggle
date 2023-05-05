import React from 'react';
import {twMerge} from 'tailwind-merge';

interface RoundButtonProps {
  title: string;
  className?: any;
}

const RoundButton = ({title, className}: RoundButtonProps) => {
  const classes =
    twMerge(`rounded-3xl w-fit p-2 shadow-xl border border-lightGrey text-white
    ${className ?? ''}
  `);
  return <button className={classes}>{title}</button>;
};

export default RoundButton;
