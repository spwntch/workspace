'use client';
import { IMdxDoc, Post as SpwnPost } from '@spwntch/blog';
import { IAttributableImage, IPageSectionContent } from '@spwntch/components';
import { useRouter } from 'next/navigation';
import { PropsWithChildren } from 'react';

interface IPostProps {
  backTo: { label?: string; href: string };
  image: IAttributableImage;
  doc: IMdxDoc;
}

export const Post = ({
  backTo,
  image,
  doc,
}: IPostProps & PropsWithChildren) => {
  const router = useRouter();

  const header: IPageSectionContent = {
    heading: doc.meta.title,
    subHeading: doc.meta.subtitle,
    // tags: meta.tags,
  };

  const handlBackToList = (href: string): void => {
    router.push(href);
  };

  return (
    <SpwnPost
      backTo={backTo}
      image={image}
      header={header}
      post={doc}
      onBackToList={handlBackToList}
    />
  );
};
