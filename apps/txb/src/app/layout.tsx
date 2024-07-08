import { ShellProvider, WebsiteShell, getBaseUrl } from '@/shell';
import { brand, primaryNav } from '../config';
import './global.css';

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
        <ShellProvider brand={brand} navItems={primaryNav}>
          <WebsiteShell>{children}</WebsiteShell>
        </ShellProvider>
      </body>
    </html>
  );
}
