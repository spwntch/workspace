import {
  Muted,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@spwntch/components';
import Link from 'next/link';
import { INavLink } from '@spwntch/shell';

type INavToolbarMenuLinkProps = INavLink;

export const NavSubMenuLink = ({
  label,
  description,
  href,
  onSelect,
}: INavToolbarMenuLinkProps) => {
  return (
    <li className="ml-2">
      <NavigationMenuItem>
        <Link href={href}>
          <NavigationMenuLink
            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foregrouns"
            onSelect={onSelect}
          >
            <h4 className="text-sm font-medium leading-none">{label}</h4>
            <Muted className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {description}
            </Muted>
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    </li>
  );
};
