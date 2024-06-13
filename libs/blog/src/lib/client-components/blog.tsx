'use client';
import { IContent } from '@spwntch/components';
import { IMdxDoc } from '@spwntch/mdx';
import { UnderConstruction } from '@spwntch/shell';

interface Props {
  header: IContent;
  articles: IMdxDoc[];
}

export const Blog = ({ header, articles }: Props) => {
  // const router = useRouter();
  // const handleOnClickArticle = (slug: string) => {
  //   router.push(`/blog/${slug}`);
  // };
  return <UnderConstruction />;
  // return (
  //   <>
  //     <ContentBlock
  //       innerContent={header}
  //       // className="text-white"
  //       hAlign="center"
  //       vAlign="middle"
  //       height={300}
  //     />
  //     <ArticleGrid articles={articles} onClickArticle={handleOnClickArticle} />
  //   </>
  // );
};
