import { Box, Typography } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";
import { setHTML, setCSS } from "../../redux/livecoder";

function CodeEditor() {
  const { code = {} } = useSelector((state) => state.liveCoderReducer);
  const actionDispatch = useDispatch();

  return (
    <>
      <Box mb={4}>
        <Typography variant="h2">HTML</Typography>
        <CodeMirror
          value={code?.html?.trim()}
          options={{
            mode: "xml",
            theme: "material",
            lineNumbers: true
          }}
          onBeforeChange={(editor, data, value) => {
            actionDispatch(setHTML(value));
          }}
          onChange={(editor, data, value) => {}}
        />
      </Box>
      <Box>
        <Typography variant="h2">CSS</Typography>
        <CodeMirror
          value={code?.css?.replace(/        /g, " ")}
          options={{
            mode: "css",
            theme: "material",
            lineNumbers: true
          }}
          onBeforeChange={(editor, data, value) => {
            actionDispatch(setCSS(value));
          }}
          onChange={(editor, data, value) => {}}
        />
      </Box>
    </>
  );
}

export { CodeEditor };
export default CodeEditor;
