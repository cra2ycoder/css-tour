import { memo, useEffect } from "react";
import { useFormik } from "formik";
import { Box, Checkbox, FormControlLabel, Typography } from "@material-ui/core";

function CSSOptions(props: any) {
  const { options = {}, onChange = () => {} } = props;

  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {
      console.log({ values });
    }
  });

  useEffect(() => {
    onChange(formik?.values);
  }, [formik?.values]);

  return (
    <Box flexWrap="wrap">
      <Typography variant="overline">CSS Properties:</Typography>
      <Box>
        {Object.keys(options).map((group: string, idx: number) => {
          return (
            <Box flexWrap="wrap" width="100%">
              <Typography variant="overline">{group}:</Typography>
              <Box>
                {Object.keys(options[group]).map((key: string, idx: number) => {
                  return (
                    <FormControlLabel
                      key={`form-control-${idx}`}
                      label={key}
                      control={
                        <Checkbox
                          key={`button-${idx}`}
                          id={key}
                          name={`${group}#${key}`}
                          onChange={formik.handleChange}
                          title={key}
                        />
                      }
                    />
                  );
                })}
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default memo(CSSOptions);
