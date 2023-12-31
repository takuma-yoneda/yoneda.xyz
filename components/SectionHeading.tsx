import React, { ReactNode } from 'react';

interface SectionHeadingProps {
  children: ReactNode;
};

const SectionHeading: React.FC<SectionHeadingProps> = ({ children }) => (
  <h2 className='text-3xl block border-solid border-gray-200 border-b-[1px] pb-2 mt-6 mb-6'>{children}</h2>
);

export default SectionHeading;