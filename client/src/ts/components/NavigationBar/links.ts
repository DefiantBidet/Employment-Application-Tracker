import * as AppTypes from 'Types/app';

export const links: AppTypes.NavLink[] = [
  {
    name: 'application-nav-link',
    href: '/',
    label: 'Applications',
    key: 'application-link',
  },
  {
    name: 'company-nav-link',
    href: '/companies',
    label: 'Companies',
    key: 'company-link',
  },
  {
    name: 'dataviz-nav-link',
    href: '/visualization',
    label: 'Data Visualization',
    key: 'dataviz-link',
  },
];
