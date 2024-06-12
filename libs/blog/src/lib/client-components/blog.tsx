'use client';
import { ContentBlock } from '@spwntch/blocks';
import { IContent } from '@spwntch/components';
import { ArticleGrid, IMdxDoc } from '@spwntch/mdx';
import { useRouter } from 'next/navigation';

interface Props {
  header: IContent;
  posts: IMdxDoc[];
}

export const Blog = ({ header, posts: articles }: Props) => {
  const router = useRouter();
  const handleOnClickArticle = (slug: string) => {
    router.push(`/blog/${slug}`);
  };
  return (
    <>
      <ContentBlock
        innerContent={header}
        // className="text-white"
        hAlign="center"
        vAlign="middle"
        height={300}
      />
      <ArticleGrid articles={articles} onClickArticle={handleOnClickArticle} />
    </>
  );
};
