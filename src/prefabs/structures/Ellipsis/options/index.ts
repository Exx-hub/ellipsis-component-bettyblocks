import {
  ThemeColor,
  color,
  option,
  sizes,
  toggle,
} from '@betty-blocks/component-sdk';
import { advanced } from '../../advanced';

export const categories = [
  {
    label: 'Advanced Options',
    expanded: false,
    members: ['dataComponentAttribute'],
  },
];

export const ellipsisOptions = {
  isDropdownVisible: toggle('Toggle menu', {
    value: true,
    configuration: { as: 'VISIBILITY' },
  }),

  outerSpacing: sizes('Table Actions Button Outer space', {
    value: ['0rem', '0rem', '0rem', '0rem'],
  }),

  size: option('CUSTOM', {
    value: 'medium',
    label: 'Icon Size',
    configuration: {
      as: 'BUTTONGROUP',
      dataType: 'string',
      allowedInput: [
        { name: 'Large', value: 'large' },
        { name: 'Medium', value: 'medium' },
        { name: 'Small', value: 'small' },
      ],
    },
  }),

  menuColor: color('Menu color', { value: ThemeColor.WHITE }),
  iconColor: color('Icon color', { value: ThemeColor.BLACK }),

  disabled: toggle('Disabled', { value: false }),

  ...advanced('Ellipsis'),
};
