export const getCSSString = (className: string[], stylesheet: object) => {
  const getStylesheet = (obj) => {
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
