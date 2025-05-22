import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config-global';

import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`${CONFIG.site.basePath}/assets/icons/navbar/${name}.svg`} />;

const ICONS = {
  tractor: icon('ic-tractor'),
  eqipments: icon('ic-equipments'),
  compare: icon('ic-compare'),
  price: icon('ic-price'),
  showroom: icon('ic-showroom'),
  loan: icon('ic-loans'),
  news: icon('ic-news'),
  more: icon('ic-more'),
};

// ----------------------------------------------------------------------

export const navData = [
  {
    items: [
      { title: 'Tractor', path: paths.dashboard.root, icon: ICONS.tractor },
      { title: 'Equipments', path: paths.dashboard.two, icon: ICONS.eqipments },
      { title: 'Compare', path: paths.dashboard.three, icon: ICONS.compare },
      { title: 'Price', path: paths.dashboard.three, icon: ICONS.price },
      { title: 'Showroom', path: paths.dashboard.three, icon: ICONS.showroom },
      { title: 'Loans', path: paths.dashboard.three, icon: ICONS.loan },
      { title: 'News & Update', path: paths.dashboard.three, icon: ICONS.news },
    ],
  },

  {
    items: [
      {
        title: 'More',
        path: paths.dashboard.group.root,
        icon: ICONS.more,
        children: [
          { title: 'Four', path: paths.dashboard.group.root },
          { title: 'Five', path: paths.dashboard.group.five },
          { title: 'Six', path: paths.dashboard.group.six },
        ],
      },
    ],
  },
];
