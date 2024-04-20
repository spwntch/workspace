import { NavigationMenu, NavigationMenuList } from '@spwntch/components';
import { INavItem, INavLink, INavMenu, useNav } from '@spwntch/shell';
import { NavMenuLink } from './nav-menu-link';
import { NavSubMenu } from './nav-sub-menu';
// import { NavMenuItem } from './nav-item';

export interface INavMenuProps {
  /**
   * An array of navigation items. Use this if you want to override the navigation items from the `NavProvider`
   */
  items?: INavItem[];
  omitHome?: boolean;
  onSelectLink?: (event: Event) => void;
}

export const NavMenu = ({
  items = [],
  // omitHome = false,
  onSelectLink,
}: INavMenuProps) => {
  const { navItems } = useNav();

  items = items || navItems;

  const pickNavItem = (item: INavItem) => {
    if ((item as INavMenu).children) {
      // return null;
      return (
        <NavSubMenu
          key={(item as INavMenu).label || ''}
          {...(item as INavMenu)}
          onSelect={onSelectLink}
        />
      );
    }
    return (
      <NavMenuLink
        key={(item as INavLink).href || ''}
        {...(item as INavLink)}
        onSelect={onSelectLink}
      />
    );
  };

  return (
    <NavigationMenu
      orientation="vertical"
      className="pl-1 max-w-none justify-start"
    >
      <NavigationMenuList className="flex-col max-w-none w-[210px] ">
        {items.map((item) => pickNavItem(item))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
