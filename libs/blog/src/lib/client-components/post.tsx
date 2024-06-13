'use client';
import { IMdxDoc } from '@spwntch/mdx';

interface IPostProps {
  backTo?: { label?: string; href: string };
  doc: IMdxDoc;
}

export const Post = ({ backTo, doc }: IPostProps) => {
  // const router = useRouter();

  // const handleBackYo = (href: string) => {
  //   router.push(href);
  // };

  // const handleToc = (href: string) => {
  //   router.push(href);
  // };

  return <div>Article goes here</div>;

  // return (
  //   <Article
  //     backTo={backTo}
  //     onBackTo={handleBackYo}
  //     onToc={handleToc}
  //     {...doc}
  //   />
  // );
};
