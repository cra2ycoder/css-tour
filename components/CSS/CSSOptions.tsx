import { memo, useEffect } from "react";
import { useFormik } from "formik";
import { Checkbox, FormControlLabel, Typography } from "@material-ui/core";

function CSSOptions(props: any) {
  const { options = {}, onChange = () => {} } = props;

  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {
      console.log({ values });
    }
  });

  useEffect(() => {
    // console.log(formik.values);
    onChange(formik.values);
  }, [formik.values]);

  return (
    <>
      <Typography variant="overline">CSS Properties:</Typography>
      {Object.keys(options).map((key: string, idx: number) => {
        return (
          <FormControlLabel
            key={`form-control-${idx}`}
            label={key}
            control={
              <Checkbox
                key={`button-${idx}`}
                id={key}
                name={key}
                onChange={formik.handleChange}
                title={key}
              />
            }
          />
        );
      })}
    </>
  );
}

export default memo(CSSOptions);
