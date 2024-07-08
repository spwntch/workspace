'use client';
import { ImageContentBlock } from '@spwntch/blocks';
import { IContent, IImage } from '@spwntch/components';

type Props = {};

const home = (props: Props) => {
  const image: IImage = { src: 'images/home-hero.webp', darken: true };
  const content: IContent = {
    title: {
      content: 'Drive business value with exceptional user experiences.',
      className: 'text-white max-w-4xl mx-auto !text-6xl !m-6',
    },
    subTitle: {
      content: `Elevate your business through engaging, user-centric designs. Enhance satisfaction, boost engagement, and ensure compliance with our expert services.`,
      className: 'text-white max-w-2xl mx-auto !text-2xl mx-6',
    },
  };
  return (
    <ImageContentBlock
      hero={true}
      image={image}
      innerContent={content}
      vAlign="top"
      hAlign="left"
    />
  );
};

export default home;
