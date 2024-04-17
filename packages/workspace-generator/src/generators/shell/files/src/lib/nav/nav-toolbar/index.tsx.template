import { INavItem, INavLink, INavMenu, useNav } from '@spwntch/shell';
import { NavigationMenu, NavigationMenuList } from '@spwntch/components';
import { NavToolbarLink } from './nav-toolbar-link';
import { NavToolbarMenu } from './nav-toolbar-menu';

export interface ITopNavProps {
  /**
   * An array of navigation items. Use this if you want to override the navigation items from the `NavProvider`
   */
  items?: INavItem[];
}

export const NavToolbar = ({ items = [] }: ITopNavProps) => {
  const { navItems } = useNav();

  items = items || navItems;

  const pickNavItem = (item: INavItem) => {
    if ((item as INavMenu).children)
      return (
        <NavToolbarMenu
          key={(item as INavMenu).label || ''}
          {...(item as INavMenu)}
        />
      );
    return (
      <NavToolbarLink
        key={(item as INavLink).href || ''}
        {...(item as INavLink)}
      />
    );
  };

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {items.map((item) => pickNavItem(item))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
