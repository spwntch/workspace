import { UnderConstruction } from '@/shell';
import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
import { posts } from '../../../config';
import { Post, parseMdxFileBuffer } from '@/mdx';
import { notFound } from 'next/navigation';

type Props = {
  params: { slug: string };
};

const docPath = join(process.cwd(), `public/blog`);

export async function generateStaticParams() {
  const params = readdirSync(docPath)
    .filter((path) => path !== 'images')
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ slug }));

  return params;
}

export const generateMetadata = ({ params: { slug } }: Props) => {
  const post = posts.find((post) => post.meta.slug === slug);
  if (!post) {
    return { title: 'Not Found' };
  }
  const {
    meta: { title, subtitle, tags },
  } = post;
  const coverImage = `${process.env.NEXT_PUBLIC_SITE_URL}/images/blog/${slug}.jpg`;

  return {
    title,
    description: subtitle,
    keywords: tags,
    openGraph: {
      title,
      description: subtitle,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/case-studies/${slug}`,
      siteName: 'Interact RDT Global',
      images: [{ url: coverImage, width: 896, height: 596 }],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: subtitle,
      creator: '@InteractRDT',
      images: [coverImage],
    },
  };
};

const getBuffer = (slug: string) => {
  const filePath = join(docPath, `${slug}.mdx`);
  return readFileSync(filePath);
};

const ArticlePage = async ({ params: { slug } }: Props) => {
  const backTo = { href: '/blog' };
  const buffer = getBuffer(slug);
  const doc = await parseMdxFileBuffer(buffer);
  if (!doc) return notFound();
  return <Post backTo={backTo} doc={doc} />;
};

export default ArticlePage;
