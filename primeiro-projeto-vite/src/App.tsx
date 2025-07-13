import { UserInfo } from "./components/UserInfo";

const App = () => {
  const isLogged = false;

  //se nao esta logado o return interrompe o resto do código
  if(!isLogged) {
    return;
  }

  return(
    <div>
      <h1>
        {isLogged ? "Logado" : "Não está logado"}
      </h1>
      {isLogged && <UserInfo/>}
    </div>
  )
  
}

export default App;