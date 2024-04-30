'use client';
import { Post as SpwnPost } from '@spwntch/blog';
import { IMdxDoc } from '@spwntch/mdx';
import { useRouter } from 'next/navigation';

interface IPostProps {
  backTo?: { label?: string; href: string };
  doc: IMdxDoc;
}

export const Post = ({ backTo, doc }: IPostProps) => {
  const router = useRouter();

  const handleBackYo = (href: string) => {
    router.push(href);
  };

  const handleToc = (href: string) => {
    router.push(href);
  };

  return (
    <SpwnPost
      backTo={backTo}
      onBackTo={handleBackYo}
      onToc={handleToc}
      {...doc}
    />
  );
};
