import { margin, padding, dimension, bgColor, radius } from "./base";

export default [
  {
    name: "Shapes",
    parentId: "shapes",
    stylesheet: {
      ...margin,
      ...padding,
      ...dimension,
      ...bgColor,
      ...radius
    }
  }
];
