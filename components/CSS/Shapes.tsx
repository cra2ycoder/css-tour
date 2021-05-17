import { useState, useMemo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCode } from "../../redux/livecoder";
import CSSOptions from "./CSSOptions";
import { getCSSString } from "../../utils";

const styleSheetObject = {
  dimension: {
    width: "100px",
    height: "100px"
  },
  bgColor: {
    "background-color": "red"
  },
  radius: {
    "border-radius": "50%"
  }
};

export const Shapes = () => {
  const [className, setClassName] = useState([]);
  const actionDispatch = useDispatch();

  const handleChange = (formikValues: any) => {
    const classList: string[] = Object.keys(formikValues).filter(
      (x) => formikValues[x] === true
    );
    setClassName([...classList]);
  };

  const css = useMemo(() => {
    return getCSSString(className, styleSheetObject);
  }, [className]);

  useEffect(() => {
    const html = document.querySelectorAll(`#shapes #html`)[0]?.innerHTML;
    const css = document.querySelectorAll(`#shapes #css`)[0]?.innerHTML;
    actionDispatch(setCode({ html, css }));
  }, [className]);

  return (
    <>
      <div id="shapes">
        <style
          id="css"
          dangerouslySetInnerHTML={{
            __html: css
          }}
        />
        <div id="html">
          <div className={className.join(" ")}></div>
        </div>
      </div>
      <CSSOptions options={styleSheetObject} onChange={handleChange} />
    </>
  );
};
