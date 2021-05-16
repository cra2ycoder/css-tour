import { memo } from "react";

function CSSOptions(props: any) {
  const { options = {}, onChange = () => {} } = props;

  const handleChange = (e) => {
    const { id, checked } = e.target;
    onChange({ id, checked });
  };

  return (
    <div id="css-options" style={{ fontSize: "12px" }}>
      {Object.keys(options).map((key: string, idx: number) => {
        return (
          <label key={`button-${idx}`}>
            <input type="checkbox" id={key} onChange={handleChange} />
            {key}
          </label>
        );
      })}
    </div>
  );
}

export default memo(CSSOptions);
