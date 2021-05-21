import { Box, Button, Divider } from "@material-ui/core";
import { useState } from "react";
import CodeEditor from "./CodeEditor";
import CSSBuilder from "../CSS/CSSBuilder";
import componentList from "../../styleguide";

function LiveCoder() {
  const [activeStyleGuide, setActiveStyleGuide] = useState(componentList[0]);

  return (
    <>
      {componentList.map((x, idx) => (
        <Button
          key={`btn-${idx}`}
          size="small"
          color="primary"
          variant="outlined"
          onClick={() => setActiveStyleGuide(x)}
        >
          {x.name}
        </Button>
      ))}
      <Box pt={2} pb={2}>
        <Divider />
        <Box pt={2} pb={2}>
          <CSSBuilder {...activeStyleGuide} />
        </Box>
        <Divider />
      </Box>
      <CodeEditor />
    </>
  );
}

export { LiveCoder };
export default LiveCoder;
