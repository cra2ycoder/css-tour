import { memo } from "react";
import { useFormik } from "formik";
import { Checkbox, FormControlLabel, Typography } from "@material-ui/core";

function CSSOptions(props: any) {
  const { options = {}, onChange = () => {} } = props;

  // const formik = useFormik({
  //   initialValues: {},
  //   validateOnChange: (values) => {
  //     console.log({ values });
  //   },
  //   onSubmit: (values) => {
  //     console.log({ values });
  //     // alert(JSON.stringify(values, null, 2));
  //   }
  // });

  const handleChange = (cbState) => {
    console.log({ cbState });

    // const { id, checked } = e.target;
    // onChange({ id, checked });
  };

  return (
    <>
      <Typography variant="overline">CSS Properties:</Typography>
      <form onChange={handleChange}>
        {Object.keys(options).map((key: string, idx: number) => {
          return (
            <FormControlLabel
              label={key}
              control={
                <Checkbox
                  key={`button-${idx}`}
                  id={key}
                  // onChange={formik.handleChange}
                  title={key}
                />
              }
            />
          );
        })}
      </form>
    </>
  );
}

export default memo(CSSOptions);
