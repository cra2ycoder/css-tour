import { useState, useMemo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCode } from "../../redux/livecoder";
import { getCSSString } from "../../utils";
import CSSOptions from "./CSSOptions";

interface ICSSBuilderProps {
  stylesheet?: any;
}

function CSSBuilder(props: ICSSBuilderProps) {
  const { stylesheet = {} } = props;

  const [className, setClassName] = useState([]);
  const actionDispatch = useDispatch();

  const handleChange = (formikValues: any) => {
    const classList: string[] = Object.keys(formikValues).filter(
      (x) => formikValues[x] === true
    );
    setClassName([...classList]);
  };

  const css = useMemo(() => {
    return getCSSString(className, stylesheet);
  }, [className, stylesheet]);

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
      <CSSOptions options={stylesheet} onChange={handleChange} />
    </>
  );
}

export { CSSBuilder };
export default CSSBuilder;
