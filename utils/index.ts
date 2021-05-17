/**
 *
 * @param className
 * @param stylesheet
 *
 * @todo typings
 */
export const getCSSString = (className: string[], stylesheet: any) => {
  const getStylesheet = (obj: any) => {
    let cssString = ``;
    Object.keys(obj).forEach((key) => {
      cssString += `\n\t${key}: ${obj[key]};`;
    });
    return cssString;
  };

  return className
    .map((x) => `\n\n.${x} { ${getStylesheet(stylesheet[x])}\n}`)
    .join(" ")
    .trim();
};
