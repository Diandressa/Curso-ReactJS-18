import { UserInfo } from "./components/UserInfo";

const App = () => {
  const isLogged = true;

  return(
    <div>
      <h1>Componente de um usuário</h1>
      {isLogged && <UserInfo/>}
    </div>
  )
  
}

export default App;