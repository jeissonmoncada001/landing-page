export const changeAnchor = (
  anchor: string,
  style: { left: string; right: string }
) => {
  switch (anchor) {
    case 'left':
      return style.left;
    case 'right':
      return style.right;
    default:
      return style.left;
  }
};
