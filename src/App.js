import "./styles.css";
import Card from "./components/Card";
import { subscriptions } from "./data";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Card packs={subscriptions} />
    </div>
  );
}
