'use client';
import { PostsGrid } from '@spwntch/blog';
import { BasicHeader, IPageSectionContent } from '@spwntch/components';
import { IMdxDoc } from '@spwntch/mdx';
import { useRouter } from 'next/navigation';

interface Props {
  header: IPageSectionContent;
  posts: IMdxDoc[];
}

export const Blog = ({ header, posts: articles }: Props) => {
  const router = useRouter();
  const handleOnClickPost = (slug: string) => {
    router.push(`/blog/${slug}`);
  };
  return (
    <>
      <BasicHeader header={header} />
      <PostsGrid posts={articles} onClickPost={handleOnClickPost} />
    </>
  );
};
