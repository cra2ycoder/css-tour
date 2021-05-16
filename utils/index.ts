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
      cssString += `${key}: ${obj[key]};\n`;
    });
    return cssString;
  };

  return className
    .map((x) => `.${x} { ${getStylesheet(stylesheet[x])} }`)
    .join(" ");
};
