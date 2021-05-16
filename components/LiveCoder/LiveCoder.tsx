import { Box, Button, Divider } from "@material-ui/core";
import { useState } from "react";
import CodeEditor from "./CodeEditor";
import componentList from "../CSS/ComponentList";

function LiveCoder() {
  const [activeComponent, setActiveComponent] = useState(null);

  const renderComponent = (activeComponent: any) => {
    setActiveComponent(activeComponent);
  };

  return (
    <>
      {componentList.map((x, idx) => (
        <Button
          key={`btn-${idx}`}
          size="small"
          color="primary"
          variant="outlined"
          onClick={() => renderComponent(x)}
        >
          {x.name}
        </Button>
      ))}
      <Box pt={2} pb={2}>
        <Divider />
        <Box pt={2} pb={2}>
          {activeComponent?.component || <></>}
        </Box>
        <Divider />
      </Box>
      <CodeEditor />
    </>
  );
}

export { LiveCoder };
export default LiveCoder;
