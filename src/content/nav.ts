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
    name: "Portfolio",
    href: "/portfolio",
    type: "route",
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

// Translation keys mapping
export const NAV_TRANSLATION_KEYS: Record<string, string> = {
  "Home": "home",
  "About Us": "about",
  "Portfolio": "portfolio",
  "Contact Us": "contact",
  "Services": "services",
};
