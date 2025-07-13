import { UserInfo } from "./components/UserInfo";

const App = () => {
  return(
    <div>
      <h1>Perfil</h1>
      <UserInfo 
        avatar="https://picsum.photos/seed/picsum/200/300" 
        name="Andressa" 
        age={99} 
        email="email@email.com"
        roles={[ {id:1, title:'CEO'} ]}
      />
      <UserInfo 
        avatar="https://picsum.photos/seed/picsum/200/300" 
        name="Matheus" 
        age={100} 
        email="matheus@email.com"
        roles={[ {id:2, title:'CTO'} ]}
      />
    </div>
  )
  
}

export default App;