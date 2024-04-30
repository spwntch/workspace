import { IMdxDoc, IMdxDocFrontMatter, ITocItem } from '@spwntch/mdx';
import { compileMDX } from 'next-mdx-remote/rsc';
import rehypeSlug from 'rehype-slug';
import rehypeToc, { HtmlElementNode } from 'rehype-toc';
import remarkGfm from 'remark-gfm';
import { flattenTocTree } from './flatten-toc-tree';

export const parseMdx = async (
  source: string
  // path?: string
): Promise<IMdxDoc> => {
  let toc: ITocItem[] = [];
  const { content, frontmatter } = await compileMDX<IMdxDocFrontMatter>({
    source,
    // components: { GithubImage },
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          [
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            rehypeToc as any,
            {
              nav: false,
              headings: ['h2', 'h3'],
              customizeTOC: (tocTree: HtmlElementNode) => {
                toc = flattenTocTree(tocTree);
                return false;
              },
            },
          ],
          // [rehypeAutoLinkHeadings, { behavior: 'wrap' }],
          // [
          //   rehypePrettyCode,
          //   {
          //     theme: {
          //       dark: 'one-dark-pro',
          //     },
          //   },
          // ],
        ],
      },
    },
  });
  return { toc, content, meta: { ...frontmatter } };
};
