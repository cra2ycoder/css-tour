import { useState, useMemo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCode } from "../../redux/livecoder";
import { getCSSString } from "../../utils";
import CSSOptions from "./CSSOptions";

interface ICSSBuilderProps {
  stylesheet?: any;
}

function CSSBuilder(props: ICSSBuilderProps) {
  const { stylesheet = {}, name = "" } = props;

  const [className, setClassName] = useState([]);
  const actionDispatch = useDispatch();

  const handleChange = (formikValues: any) => {
    const classList: string[] = Object.keys(formikValues).filter(
      (x) => formikValues[x] === true
    );
    setClassName([...classList]);
  };

  const RESULT = useMemo(() => {
    return getCSSString(className, stylesheet);
  }, [className, stylesheet]);

  useEffect(() => {
    const html = document.querySelectorAll(`#${name} #html`)[0]?.innerHTML;
    const css = document.querySelectorAll(`#${name} #css`)[0]?.innerHTML;
    actionDispatch(setCode({ html, css }));
  }, [className]);

  return (
    <>
      <div id={name}>
        <style
          id="css"
          dangerouslySetInnerHTML={{
            __html: RESULT.css.join(" ").trim()
          }}
        />
        <div id="html">
          <div className={RESULT.classList.join(" ")}>{name}</div>
        </div>
      </div>
      <CSSOptions options={stylesheet} onChange={handleChange} />
    </>
  );
}

export { CSSBuilder };
export default CSSBuilder;
