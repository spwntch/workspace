'use client';
import { ImageContentBlock } from '@spwntch/blocks';
import { UnderConstruction as SpwnUnderConstruction } from '@spwntch/shell';
import { H1 } from '@spwntch/typography';

import { usePathname } from 'next/navigation';
import { PropsWithChildren } from 'react';

export const UnderConstruction = ({
  children,
  ...props
}: PropsWithChildren) => {
  const pathname = usePathname();
  return (
    <SpwnUnderConstruction {...props}>
      <div className="text-center">
        <H1>{pathname}</H1>
        <div className="m-8">{children}</div>
        <ImageContentBlock
          image={{
            src: 'images/ux-is-like-venus-dev-is-like-mars.webp',
            darken: true,
          }}
          innerContent={{ title: 'ux-is-like-venus-dev-is-like-mars' }}
          className="text-white"
          hAlign="left"
          vAlign="bottom"
        />
      </div>
    </SpwnUnderConstruction>
  );
};
