import { UserInfo } from "./components/UserInfo";

const App = () => {
  //repetir o mesmo componente igual, porem queremos passar cada info para cada componente
  return(
    <div>
      <h1>Perfil</h1>
      <UserInfo/>
      <UserInfo/>
      <UserInfo/>
    </div>
  )
  
}

export default App;