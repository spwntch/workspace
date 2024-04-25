import { ShellProvider, WebsiteShell, getBaseUrl } from '@/shell';
import './global.css';
import { brand, primaryNav } from '../config';

export const metadata = {
  metadataBase: new URL(getBaseUrl()),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ShellProvider brand={brand} navItems={primaryNav} defaultTheme="dark">
          <WebsiteShell githubUrl="https://github.com/spwntch">
            {children}
          </WebsiteShell>
        </ShellProvider>
      </body>
    </html>
  );
}
