import { Provider } from "react-redux";
import ReduxStore from "../redux/store";
import LiveCoder from "../components/LiveCoder";
import "./styles.css";

export default function App() {
  return (
    <Provider store={ReduxStore}>
      <div className="App">
        <h3>Shapes with CSS</h3>
        <LiveCoder />
      </div>
    </Provider>
  );
}
