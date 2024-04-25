import { Article } from '@/mdx';
import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
import { articles } from '../../../config';

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
  const article = articles.find((article) => article.meta.slug === slug);
  if (!article) {
    return { title: 'Not Found' };
  }
  const {
    title,
    abstract: description,
    meta: { keywords },
  } = article;
  const coverImage = `${process.env.NEXT_PUBLIC_SITE_URL}/images/blog/${slug}.jpg`;

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/case-studies/${slug}`,
      siteName: 'Interact RDT Global',
      images: [{ url: coverImage, width: 896, height: 596 }],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@InteractRDT',
      images: [coverImage],
    },
  };
};

const getBuffer = (slug: string) => {
  const filePath = join(docPath, `${slug}.mdx`);
  return readFileSync(filePath);
};

const ArticlePage = ({ params: { slug } }: Props) => {
  const backTo = { path: '/blog' };
  const buffer = getBuffer(slug);
  // const image = { src: `/blog/images/${slug}.webp` };

  return <Article buffer={buffer} backTo={backTo} />;
};

export default ArticlePage;
