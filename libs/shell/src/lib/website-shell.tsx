'use client';
import {
  RegularFooter,
  DesktopTopNavbar,
  UnderConstructionFooter,
} from '@spwntch/shell';
import { PropsWithChildren } from 'react';
import { useRouter } from 'next/navigation';

/**
 * Props for the SiteShell component.
 */
export interface SiteShellProps {
  underContruction?: boolean;
  /**
   * Configuration options for the navbar.
   */
  navbar?: {
    /**
     * Additional CSS classes for the navbar.
     */
    classNames?: string;
    /**
     * Alignment of the navbar.
     */
    logoHeight?: number;
    alignment?: 'start' | 'center' | 'end';
  };
  githubUrl?: string;
  /**
   * Determines whether to display shell information.
   */
  displayShellInfo?: boolean;
}

export const WebsiteShell = ({
  underContruction,
  navbar,
  githubUrl,
  // displayShellInfo,
  children,
}: SiteShellProps & PropsWithChildren) => {
  const router = useRouter();

  const handleLinkTo = (url: string) => {
    router.push(url);
  };

  return (
    <div className="h-full flex flex-col mx-auto md:container">
      <DesktopTopNavbar
        classNames={`${navbar?.classNames} bg-background`}
        navAlignment={navbar?.alignment}
        logoHeight={navbar?.logoHeight}
        githubUrl={githubUrl}
        onLinkTo={handleLinkTo}
      />
      <main className="h-full flex flex-col overflow-y">
        {children}
        {/* {displayShellInfo && <ShellInfo />} */}
        {underContruction ? <UnderConstructionFooter /> : <RegularFooter />}
      </main>
    </div>
  );
};
