import { IArticle } from '@/mdx';
import { IPageSectionContent } from '@spwntch/components';

export const articles: IArticle[] = [
  {
    meta: {
      slug: 'the-real-reason-you-need-an-icp',
      categories: ['Product', 'UX'],
      keywords: [],
      author: {
        avatarUrl: '/dave.png',
        name: 'Dave Benjamin',
      },
    },
    coverImage: { src: '/blog/images/the-real-reason-you-need-an-icp.webp' },
    title: 'The Real Reason You Need an ICP',
    subtitle: `You've heard the term, but here's the real reason that not having one is holding you back. `,
    abstract: [
      'The term ICP is thrown around a lot, but what does it really mean?',
      'Here’s the real reason you need an ICP and how to get one.',
      'You might be surprised at how bad the advice you have been getting is.',
    ],
  },
];

export const pageHeader: IPageSectionContent = {
  heading: 'Blog',
  subHeading: 'The latest from our team',
  body: `We're always learning and growing. Here's what we've been up to lately.`,
};
