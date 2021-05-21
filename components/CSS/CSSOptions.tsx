import { memo, useEffect } from "react";
import { useFormik } from "formik";
import { Box, Checkbox, FormControlLabel, Typography } from "@material-ui/core";

function CSSOptions(props: any) {
  const { name = "", options = {}, onChange = () => {} } = props;

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
    <Box
      flexWrap="wrap"
      style={{
        position: "fixed",
        zIndex: 99,
        padding: "1rem",
        right: 0,
        top: 0,
        width: "300px",
        height: "calc(100% - 2rem)",
        backgroundColor: "white",
        overflowY: "scroll"
      }}
    >
      <Typography variant="overline">CSS Properties:</Typography>
      <Box>
        {Object.keys(options).map((group: string, idx: number) => {
          return (
            <Box flexWrap="wrap" width="100%" key={`${name}-box-${idx}`}>
              <Typography variant="overline">{group}:</Typography>
              <Box>
                {Object.keys(options[group]).map((key: string, idx: number) => {
                  return (
                    <FormControlLabel
                      key={`form-control-${idx}`}
                      label={key}
                      control={
                        <Checkbox
                          key={`${name}-button-${idx}`}
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

export { CSSOptions };
export default memo(CSSOptions);
