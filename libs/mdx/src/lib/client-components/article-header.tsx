'use client';
import { Button } from '@spwntch/components';
// import {
//   BackgroundImageHeader,
//   StackedImageHeader,
// } from '@/next-shared-content';
// import {
//   Button,
//   IAttributableImage,
//   IPageSectionContent,
// } from '@/next-shared-ui';
// import { ArrowBigLeft } from 'lucide-react';
import Link from 'next/link';

type Props = {
  backTo?: { label?: string; path: string };
  // image: IAttributableImage;
  // content: IPageSectionContent;
  tags?: string[];
};

export const ArticleHeader = ({ backTo,
  //  image, content 
  }: Props) => {
  return (
    <div className="pt-4 sm:pt-16 pb-4">
      {backTo && (
        <Link href={backTo.path} className="flex pb-4">
          <Button variant="ghost" className="flex gap-2 ">
            {/* <ArrowBigLeft className="h-5 w-5" aria-hidden="true" /> */}
            <span>{backTo.label || 'Back'}</span>
          </Button>
        </Link>
      )}
      {/* <BackgroundImageHeader
        content={content}
        image={image}
      /> */}
    </div>
  );
};
