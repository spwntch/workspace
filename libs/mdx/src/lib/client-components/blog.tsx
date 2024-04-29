'use client';
import { IPost, Posts } from '@spwntch/blog';
import { IPageSectionContent } from '@spwntch/components';
import { useRouter } from 'next/navigation';

interface Props {
  header: IPageSectionContent;
  articles: IPost[];
}

export const Blog = ({ header, articles }: Props) => {
  const routter = useRouter();

  const handlePostClick = (post: IPost) => {
    routter.push(`/blog/${post.meta.slug}`);
  };

  return (
    <Posts header={header} posts={articles} onClickPost={handlePostClick} />
  );
};
