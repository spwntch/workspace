'use client';
import { RegularFooter, UnderConstructionFooter } from '@spwntch/shell';
import { PropsWithChildren } from 'react';

/**
 * Props for the LandingPage component.
 */
export interface LandingPageProps {
  underContruction?: boolean;
  /**
   * Determines whether to display shell information.
   */
  displayShellInfo?: boolean;
}

export const LandingPageShell = ({
  underContruction,
  // displayShellInfo,
  children,
}: LandingPageProps & PropsWithChildren) => {
  return (
    <div className="h-screen flex flex-col container">
      <main className="h-full flex flex-col overflow-y">
        <div className="flex-1">
          {children}
          {/* {displayShellInfo && <ShellInfo />} */}
        </div>
        {underContruction ? <UnderConstructionFooter /> : <RegularFooter />}
      </main>
    </div>
  );
};
