import {
  cn,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@spwntch/components';
import Link from 'next/link';
import { INavLink } from '@spwntch/shell';

type INavToolbarLinkProps = INavLink;

export const NavMenuLink = ({
  label,
  href,
  onSelect,
}: INavToolbarLinkProps) => {
  return (
    <NavigationMenuItem className="w-full mt-2 ">
      <Link href={href}>
        <NavigationMenuLink
          className={cn(
            navigationMenuTriggerStyle(),
            'w-full justify-start ml-0'
          )}
          onSelect={onSelect}
        >
          {label}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
};
