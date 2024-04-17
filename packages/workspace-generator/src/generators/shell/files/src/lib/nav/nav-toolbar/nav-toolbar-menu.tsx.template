import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from '@spwntch/components';
import { INavLink, INavMenu } from '@spwntch/shell';
import { NavToolbarMenuLink } from './nav-toolbar-menu-link';

type ITopNavMenuProps = INavMenu;

export const NavToolbarMenu = ({ label, children }: ITopNavMenuProps) => {
  const pickMenuItem = (item: INavMenu) => {
    // ONLY IF WE HAVE SUBMENU...
    // FOR NOW, WE DON'T...
    // if ((item as INavMenu).children) {
    //  ...
    // }

    return (
      <NavToolbarMenuLink
        key={(item as INavLink).href}
        {...(item as INavLink)}
      />
    );
  };

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>{label} </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
          {children?.map((item) => pickMenuItem(item))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};
