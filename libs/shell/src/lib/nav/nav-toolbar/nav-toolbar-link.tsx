import { INavLink } from '@spwntch/shell';
import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@spwntch/components';
import Link from 'next/link';

type INavToolbarLinkProps = INavLink;

export const NavToolbarLink = ({ label, href }: INavToolbarLinkProps) => {
  return (
    <NavigationMenuItem>
      <Link href={href}>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          {label}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
};
