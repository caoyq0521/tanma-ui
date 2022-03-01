export const getRootCss = (name) => {
  const  rootElement = document.documentElement;
  const  styles = getComputedStyle(rootElement);
  console.log(name, styles.getPropertyValue(name).trim())
  return styles.getPropertyValue(name).trim();
}