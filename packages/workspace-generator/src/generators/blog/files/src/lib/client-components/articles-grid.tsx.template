'use client';

import Link from 'next/link';
import { IArticle } from '../types';
import { ArticleCard } from './article-card';
import { usePathname } from 'next/navigation';

interface Props {
  articles: IArticle[];
}

export const ArticlesGrid = ({ articles }: Props) => {
  const pathname = usePathname();

  if (!articles?.length) return <div>no articles</div>;
  return (
    <div className="px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8 mt-8">
      {articles.map((article, index) => (
        <Link key={index} href={`${pathname}/${article.meta.slug}`}>
          <ArticleCard {...article} />
        </Link>
      ))}
    </div>
  );
};
