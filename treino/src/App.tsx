import { Recipe } from "./components/Recipe";

const App = () => {
  const isLogged = true;

  return(
    <div>
        { isLogged && 

        <Recipe 
          src="./img/img-cake.jpg"
          name="Chocolate cake"
          dishes={ [{id: 1, title: 'Dissert'}] }
          pieces={4}
          ingredient={ [{quantify: 2, ingredient: 'ovos'}, {quantify: 1/2, ingredient: 'copo de leite'}] }
        /> 

        }

        { isLogged && 

        <Recipe 
          src="./img/french-fries.jpg"
          name="Frinch fries"
          dishes={ [{id: 1, title: 'Appetizers'}] }
          pieces={1}
          ingredient={ [{quantify: 1, ingredient: 'batata'}, {quantify: 1, ingredient: 'pitada de sal'}] }
        /> 

        }
    </div>
  )
}

export default App