import './App.css';
import Rotas from "./rotas/Rotas";

function App() {
  return (
    <>
      <div className="App">
        <div style={{backgroundImage: `url("https://www.perftracker.com.br/wp-content/uploads/2019/11/saude-mental.jpeg")`}}>
      </div>
      <header className="App-header">
        <h1>Saúde Mental em dia</h1>
        <button type="submit" onClick={"Login"}>Login</button>
        <button type="submit" onClick={"Cadastrar"}>Cadastrar</button>
      </header>
      </div>
      <Rotas/>      
    </>
    
  );
}

export default App;
