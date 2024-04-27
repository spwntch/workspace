import { PropsWithChildren } from 'react';

import { parseMdxFileBuffer } from '../utils/parse-mdx-file-buffer';
// import { IAttributableImage, IPageSectionContent } from '@/next-shared-ui';
import { notFound } from 'next/navigation';
import { IAttributableImage, IPageSectionContent } from '@spwntch/components';
import { ArticleHeader } from './article-header';

interface IArticleProps {
  backTo?: { label?: string; path: string };
  buffer: Buffer;
  image: IAttributableImage;
}

export const Article = async ({
  backTo,
  buffer,
  image,
  children,
}: IArticleProps & PropsWithChildren) => {
  const doc = await parseMdxFileBuffer(buffer);
  if (!doc) return notFound();

  const { content, meta } = doc;

  const header: IPageSectionContent = {
    heading: meta.title,
    subHeading: meta.subtitle,
    // tags: meta.tags,
  };

  return (
    <div className="flex flex-col mx-2 md:mx-auto max-w-6xl">
      <div>
        <ArticleHeader backTo={backTo} image={image} header={header} />
      </div>
      <div className="px-2">
        <article className="max-w-none py-8 relative isolate prose text-foreground prose-headings:text-foreground">
          {content}
        </article>
      </div>
    </div>
  );
};
