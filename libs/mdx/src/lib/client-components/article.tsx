'use client';
import { IMdxDoc, Post as SpwnPost } from '@spwntch/blog';
import { IAttributableImage, IPageSectionContent } from '@spwntch/components';
import { useRouter } from 'next/navigation';
import { PropsWithChildren } from 'react';

interface IArticleProps {
  backTo: string;
  image: IAttributableImage;
  doc: IMdxDoc;
}

export const Post = ({
  backTo,
  image,
  doc,
}: IArticleProps & PropsWithChildren) => {
  const router = useRouter();

  const header: IPageSectionContent = {
    heading: doc.meta.title,
    subHeading: doc.meta.subtitle,
    // tags: meta.tags,
  };

  const handlBackToList = (): void => {
    router.push(backTo);
  };

  return (
    <SpwnPost
      image={image}
      header={header}
      post={doc}
      onBackToList={handlBackToList}
    />
  );
};
