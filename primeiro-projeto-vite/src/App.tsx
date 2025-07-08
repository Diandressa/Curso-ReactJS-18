import UserAge, {UserName, UserEmail} from "./UserName";

const App = () => {
  return(
    <div>
      <h1>Componente de um usuário</h1>
      <UserName/>
      <UserEmail/>
      <UserAge/>
    </div>
  )
}

export default App;