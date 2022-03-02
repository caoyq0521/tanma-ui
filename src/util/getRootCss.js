export const getRootCss = (name) => {
  const  rootElement = document.documentElement;
  const  styles = getComputedStyle(rootElement);
  return styles.getPropertyValue(name).trim();
}