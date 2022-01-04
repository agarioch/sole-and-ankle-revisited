export const COLORS = {
  white: 'var(--white)',
  gray: {
    100: 'var(--gray-100)',
    300: 'var(--gray-300)',
    500: 'var(--gray-500)',
    700: 'var(--gray-700)',
    900: 'var(--gray-900)',
  },
  primary: 'var(--primary)',
  secondary: 'var(--secondary)',
};

export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
};

export const QUERIES = {
  laptopOrSmaller: `(max-width: ${1300/16}rem)`,
  tabletOrSmaller: `(max-width: ${950/16}rem)`,
  phoneOrSmaller: `(max-width: ${600/16}rem)`
}