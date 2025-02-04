import { UserInfo } from "./components/UserInfo";

const App = () => {
  console.log('Fui chamado!')
  return (
    <div>
      <h1>
        Meu primeiro componente de usuário
      </h1>
      
      <UserInfo 
        name="tinki winki"
        age={28}
        email="tinki@email.com"
        roles={ [{id: 1, title: "CEO"}] }
      />

      <UserInfo 
        avatar="https://i.pinimg.com/736x/79/50/cd/7950cd8a23edec191c32de7bd7645105.jpg"
        name="gypsy"
        age={20}
        email="gypsy@email.com"
        roles={ [{id: 2, title: "CTO"}] }
      />
    </div>
  )

}

export default App;