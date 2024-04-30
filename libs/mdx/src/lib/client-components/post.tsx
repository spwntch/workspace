'use client';
import { Post as SpwnPost } from '@spwntch/blog';
import { notFound } from 'next/navigation';
import { parseMdxFileBuffer } from '../utils/parse-mdx-file-buffer';

interface IPostProps {
  backTo?: { label?: string; href: string };
  buffer: Buffer;
}

export const Post = async ({ backTo, buffer }: IPostProps) => {
  const doc = await parseMdxFileBuffer(buffer);
  if (!doc) return notFound();

  const { meta, content } = doc;

  const handleBackYo = (href: string) => {
    console.log(href);
  };

  return <SpwnPost backTo={backTo} onBackTo={handleBackYo} />;
};
