'use client';
import React from 'react';
import { ArticlesGrid } from './articles-grid';
import { BasicPageHeader, IPageSectionContent } from '@spwntch/components';
import { IArticle } from '../types';

interface Props {
  header: IPageSectionContent;
  articles: IArticle[];
}

export const Articles = ({ header, articles }: Props) => {
  return (
    <>
      <BasicPageHeader content={header} />
      <ArticlesGrid articles={articles} />
    </>
  );
};

