import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@spwntch/components';
import { INavLink, INavMenu } from '@spwntch/shell';
import { NavSubMenuLink } from './nav-sub-menu-link';

type ITopNavMenuProps = INavMenu;

export const NavSubMenu = ({ label, children, onSelect }: ITopNavMenuProps) => {
  const pickMenuItem = (item: INavMenu) => {
    // ONLY IF WE HAVE SUBMENU...
    // FOR NOW, WE DON'T...
    // if ((item as INavMenu).children) {
    //  ...
    // }

    return (
      <NavSubMenuLink
        key={(item as INavLink).href}
        {...(item as INavLink)}
        onSelect={onSelect}
      />
    );
  };

  return (
    <Accordion type="single" collapsible className="mt-2 w-full">
      <AccordionItem value="item-1" className="border-none  ">
        <AccordionTrigger className="text-sm px-4 hover:no-underline py-3 rounded-md hover:bg-accent hover:text-accent-foreground focus:bg-none">
          {label}
        </AccordionTrigger>
        <AccordionContent>
          <ul className="mt-3">
            {children?.map((item) => pickMenuItem(item))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
