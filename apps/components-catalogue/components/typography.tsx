'use client';

import { H1, H2, H3, H4, Large, Lead, Muted, P, Small } from '@spwntch/typography';

export const Typography = () => {
  return (
    <div className="flex flex-col items-center gap-4 p-3 border-2 w-fit mx-auto rounded-xl">
      <H1>I am a H1 heading</H1>
      <H2>I am a H2 heading</H2>
      <H3>I am a H3 heading</H3>
      <H4>I am a H4 heading</H4>
      <Lead>I am a Lead paragraph</Lead>
      <Large>I am a Large paragraph</Large>
      <P>I am a regular (P) paragraph</P>
      <Small>I am a Small paragraph</Small>
      <Muted>I am a Muted paragraph</Muted>
    </div>
  );
};
