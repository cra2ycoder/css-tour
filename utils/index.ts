/**
 *
 * @param className
 * @param stylesheet
 *
 * @todo typings
 */
export const getCSSString = (className: string[], stylesheet: any) => {
  console.log({ className, stylesheet });

  const getStylesheet = (cssProp: string, group: string) => {
    console.log({ cssProp, group });

    return `\n\t${cssProp}: ${
      stylesheet[group][cssProp] || stylesheet[cssProp]
    };`;
  };

  return className.map((x) => {
    const [group, cssProp] = x.split("#");
    return `${getStylesheet(cssProp, group)}`;
  });
};
