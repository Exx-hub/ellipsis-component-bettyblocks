import { prefab, Icon } from '@betty-blocks/component-sdk';

import { Ellipsis } from './structures/Ellipsis';

const attributes = {
  category: 'BUTTON',
  icon: Icon.SubViewItemIcon,
  keywords: ['menu', 'item', 'menuitem', 'dropdown item'],
};

export default prefab('Ellipsis', attributes, undefined, [Ellipsis({})]);
