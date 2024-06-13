import { IContent } from '@spwntch/components';
import { IMdxDoc } from '@spwntch/mdx';

export const posts: IMdxDoc[] = [
  {
    meta: {
      slug: 'the-real-reason-you-need-an-icp',
      date: '2021-09-01',
      coverImage: '/blog/images/the-real-reason-you-need-an-icp.webp',
      title: 'The Real Reason You Need an ICP',
      subtitle: `You've heard the term, but here's the real reason that not having one is holding you back. `,
      tags: ['Product', 'UX'],
      authorName: 'Dave Benjamkn',
      authorAvatar: '/dave.png',
      // abstract: [
      //   'The term ICP is thrown around a lot, but what does it really mean?',
      //   'Here’s the real reason you need an ICP and how to get one.',
      //   'You might be surprised at how bad the advice you have been getting is.',
      // ],
    },
  },
];

export const pageHeader: IContent = {
  title: 'Blog',
  subTitle: 'The latest from our team',
  body: [
    `We're always learning and growing. Here's what we've been up to lately.`,
  ],
  tags: [`UX`, 'DX', 'Lean', 'Agile'],
};
