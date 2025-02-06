'use client'

import { TypeAnimation } from 'react-type-animation';

export default function AnimatedTitle() {
  return (
    <TypeAnimation
      sequence={[
        'Rico',
        1000,
        'Ruikang',
        1000,
      ]}
      wrapper="span"
      speed={50}
      className="text-blue-500"
      repeat={Infinity}
    />
  );
} 