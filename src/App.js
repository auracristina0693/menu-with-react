import "./App.css";
import ListItem from "./components/ListItem";
import { items } from "./data";

function App() {
  return (
    <div>
      <ul className="nav">
        {items.map((item) => (
          <ListItem>{`${item}.`}</ListItem>
        ))}
      </ul>
    </div>
  );
}

export default App;
