interface NavLink {
  name: string;
  href: string;
  type: 'scroll' | 'route';
}

export const NAV_LINKS: NavLink[] = [
  {
    name: "Home",
    href: "#hero",
    type: "scroll",
  },
  {
    name: "About Us",
    href: "#about",
    type: "scroll",
  },
  {
    name: "Contact Us",
    href: "#contact",
    type: "scroll",
  },
  {
    name: "Services",
    href: "/services",
    type: "route",
  },
];
