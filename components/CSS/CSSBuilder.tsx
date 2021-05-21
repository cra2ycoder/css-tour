import { useState, useMemo, memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCode } from "../../redux/livecoder";
import { getCSSString } from "../../utils";
import CSSOptions from "./CSSOptions";

interface ICSSBuilderProps {
  stylesheet?: object;
  name?: string;
}

function CSSBuilder(props: ICSSBuilderProps) {
  const { stylesheet = {}, name = "" } = props;

  const [cssProperties, setCSSProperties] = useState([]);
  const actionDispatch = useDispatch();

  const handleChange = (formikValues: any) => {
    const activeCSSProps: string[] = Object.keys(formikValues).filter(
      (x) => formikValues[x] === true
    );
    setCSSProperties(activeCSSProps);
  };

  const cssString = useMemo(() => {
    return getCSSString(cssProperties, stylesheet);
  }, [cssProperties]);

  useEffect(() => {
    cssProperties.splice(0, cssProperties.length);
    setCSSProperties([]);
  }, [stylesheet, name]);

  useEffect(() => {
    const html = document.querySelectorAll(`#${name} #html`)[0]?.innerHTML;
    const css = document.querySelectorAll(`#${name} #css`)[0]?.innerHTML;
    actionDispatch(setCode({ html, css }));
  }, [cssProperties, stylesheet]);

  console.log({ cssString });

  return (
    <>
      <div id={name}>
        <style
          id="css"
          dangerouslySetInnerHTML={{
            __html: `.${name} { \n\t${cssString.join(" ").trim()}\n}`
          }}
        />
        <div id="html">
          <div className={name}>{name}</div>
        </div>
      </div>
      <CSSOptions name={name} options={stylesheet} onChange={handleChange} />
    </>
  );
}

export { CSSBuilder };
export default memo(CSSBuilder);
