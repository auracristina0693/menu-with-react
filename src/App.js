import "./App.css";
import ListItem from "./components/ListItem";

function App() {
  return (
    <div>
      <ul className="nav">
        <ListItem>Hello.</ListItem>
        <ListItem>Work.</ListItem>
        <ListItem>About.</ListItem>
        <ListItem>Carrers.</ListItem>
        <ListItem>Contact.</ListItem>
      </ul>
    </div>
  );
}

export default App;
