'use client';

import { BackgroundImageHeader, BasicHeader, StackedImageHeader } from '@spwntch/site-content';

export const SiteHeaders = () => {
  const image = { src: '/images/ux-is-like-venus-dev-is-like-mars.webp' };

  const header = {
    heading: 'Our Team',
    subHeading: 'Meet the people who make it all happen',
    body: [
      `We are a group of passionate individuals committed to delivering the best results.`,
    ],
    tags: ['Innovation', 'Teamwork', 'Excellence'],
  };

  return (
    <div className="flex flex-col items-center gap-4 p-3 border-2 w-full rounded-xl">
      <BasicHeader header={header} />
      <StackedImageHeader header={header} image={image} />
      <BackgroundImageHeader header={header} image={image} />
    </div>
  );
};
