import ChickenList from "./components/ChikenList";
import ChickenForm from "./components/ChickenForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="LogoPoulet" src="src/assets/Creative-Tail-Animal-chicken.svg.png" alt="Logopoulet" />
        <h1>Mes petits poulets</h1>
        <img className="LogoPoulet2" src="src/assets/Creative-Tail-Animal-chicken.svg.png" alt="Logopoulet" />
      </header>
      <ChickenForm />
      <ChickenList />
    </div>
  );
}

export default App;
