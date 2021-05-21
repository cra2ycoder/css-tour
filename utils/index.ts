/**
 *
 * @param className
 * @param stylesheet
 *
 * @todo typings
 */
export const getCSSString = (className: string[], stylesheet: any) => {
  const getStylesheet = (cssProp: string, group: string) => {
    return `\n\t${cssProp}: ${
      stylesheet[group][cssProp] || stylesheet[cssProp]
    };`;
  };

  const value = {
    classList: [],
    css: []
  };

  className.forEach((x) => {
    const [group, cssProp] = x.split("#");
    const cssString = `\n\n.${cssProp} { ${getStylesheet(cssProp, group)}\n}`;
    value.classList.push(cssProp);
    value.css.push(cssString);
  });

  return value;
};
