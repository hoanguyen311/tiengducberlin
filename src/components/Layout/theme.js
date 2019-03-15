import { base } from 'grommet/themes';

export default {
  ...base,
  icon: {
    ...base.icon,
    size: {
      ...base.icon.size,
      large: '30px'
    }
  },
  button: {
    ...base.button,
    border: {
      ...base.button.border,
      width: '1px',
      radius: '6px'
    }
  },
  global: {
    ...base.global,
    colors: {
      ...base.global.colors,
      brand: '#3762f0'
    }
  }
};