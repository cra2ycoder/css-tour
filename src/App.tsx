import { Provider } from "react-redux";
import { Box } from "@material-ui/core";
import ReduxStore from "../redux/store";
import LiveCoder from "../components/LiveCoder";
import "./styles.css";

export default function App() {
  return (
    <Provider store={ReduxStore}>
      <Box className="App" p={3}>
        <LiveCoder />
      </Box>
    </Provider>
  );
}
