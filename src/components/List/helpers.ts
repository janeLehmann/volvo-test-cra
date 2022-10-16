export const isNavVisible = (listLength: number, width: number): boolean => {
  return (
    (listLength > 1 && width > 0 && width < 800) ||
    (listLength > 2 && width >= 800 && width < 1024) ||
    (listLength > 3 && width >= 1024 && width < 1230) ||
    (listLength > 4 && width >= 1230)
  );
};
