import { UserInfo } from "./components/UserInfo";

const App = () => {
  const isLogged = true;

  if(isLogged){
    return(
      <div>
        <h1>Componente de um usuário</h1>
        <UserInfo/>
      </div>
    )
  } 

  return(
    <h1>Não esta logado</h1>
  )
}

export default App;