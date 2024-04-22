'use client';
import { UnderConstruction as SpwnUnderConstruction } from '@spwntch/shell';
import { H1 } from '@spwntch/components';

import { usePathname } from 'next/navigation';
import { PropsWithChildren } from 'react';

export const UnderConstruction = ({
  children,
  ...props
}: PropsWithChildren) => {
  const pathname = usePathname();
  return (
    <SpwnUnderConstruction {...props}>
      <H1>{pathname}</H1>
      <div className="m-8">{children}</div>
    </SpwnUnderConstruction>
  );
};
