import Routes from '../router';

// eslint-disable-next-line func-names
const getNavBar = function () {
  const navBar = Array.from([]);
  Routes.forEach(item => {
    let newItem = {};
    if (item.show) {
      newItem = {
        name: item.name,
        text: item.text,
        path: item.path,
        icon: item.icon,
        devices: item.devices,
        activeMode: item.activeMode,
        roles: item.roles,
        helpComponent: item.helpComponent,
      };
      if (item.children && item.children.length > 0) {
        const vChildren = Array.from([]);
        item.children.forEach(children => {
          if (children.show) {
            // eslint-disable-next-line no-param-reassign
            children.path = `${item.path}/${children.path}`;
            vChildren.push(children);
          }
        });
        if (vChildren.length > 0) {
          newItem.children = Array.from(vChildren);
        }
      }
      navBar.push(newItem);
    }
  });

  return navBar;
};

// eslint-disable-next-line import/prefer-default-export
export const navList = getNavBar();
