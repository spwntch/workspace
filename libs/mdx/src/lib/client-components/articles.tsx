'use client';
import { PostsGrid } from '@spwntch/blog';
import { BasicHeader, IPageSectionContent } from '@spwntch/components';
import { IMdxDoc } from '@spwntch/mdx';

interface Props {
  header: IPageSectionContent;
  posts: IMdxDoc[];
}

export const Blog = ({ header, posts: articles }: Props) => {
  const handleOnClickPost = (slug: string) => {
    console.log(slug);
  };
  return (
    <>
      <BasicHeader header={header} />
      <PostsGrid posts={articles} onClickPost={handleOnClickPost} />
    </>
  );
};
