/*
//criamos um componente já com o estilo dele
const Card = styled.div`
  background-color: white;
  width: 400px;
  height: 400px;
  padding: 30px;
  color: blue;
`
  Para organizar o codigo podemos criar um arquivo index.tsc e colocar esse componente lá

*/

import Card from "./components/Card";

const App = () => {
  //importa o Card.tsx do component e usa na aplicaçao
  return(
    <Card/>
  )
}

export default App;

//resumo: criamos um arquivo de css com o componente que exporta para Card.tsx
//Card.tsx exporta default - que vai para App.tsx
//Em App.tsx importamos o Card da pasta components 
