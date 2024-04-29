import matter from 'gray-matter';
import { parseMdx } from './parse-mdx';
import { IMdxDoc } from '@spwntch/blog';

export const parseMdxFileBuffer = async (
  buffer: Buffer
): Promise<IMdxDoc | undefined> => {
  const { content: rawContent, data } = matter(buffer);
  console.log(rawContent);

  if (!rawContent?.length || rawContent === '404: Not Found') return undefined;

  const parsed = await parseMdx(rawContent);

  return {
    content: parsed.content,
    toc: parsed.toc,
    meta: { ...parsed.meta, ...data },
  };
};
