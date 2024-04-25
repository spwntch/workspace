'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Small,
} from '@spwntch/components';
import Image from 'next/image';
import { IArticle } from '../types';

type IArticleCardProps = IArticle;

export const ArticleCard = ({
  coverImage,
  title,
  subtitle,
  meta,
}: IArticleCardProps) => {
  const { categories } = meta;
  return (
    <Card>
      <CardContent className="m-0 p-0 h-60">
        <Image
          className="object-cover object-center rounded-t h-60 "
          alt="hero"
          src={coverImage.src}
          width={720}
          height={600}
          priority
        />
      </CardContent>
      <CardHeader>
        <ul className="flex gap-3">
          {categories.map((category, index) => (
            <li key={index}>
              <Small>{category}</Small>
            </li>
          ))}
        </ul>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
    </Card>
  );
};
