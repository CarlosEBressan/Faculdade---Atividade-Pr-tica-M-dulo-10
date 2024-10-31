import './App.css'; // Para aplicar o CSS estilizado
import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="App-main">
        <ListarTarefa />
      </main>
    </div>
  );
}

export default App;
