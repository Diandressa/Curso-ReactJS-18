import { NameRecipe } from "./NameRecipe";
import { ImgRecipe } from "./ImgRecipe";
import { Categories } from "./Categories";
import { Serve } from "./Serve"
import { Ingredients } from "./Ingredients";

type Props = {
    src: string,
    name: string,
    ingredient: {quantify: number, ingredient: string}[],
    dishes: {id: number, title: string}[],
    pieces: number
}

//exporta em line
//props pega todas os objetos definidos em Props
export const Recipe = (props: Props) => {
    return(
        <>
            <h1>Recipe: </h1>
            <ImgRecipe src={props.src} />
            <NameRecipe name={props.name} />        
            <Ingredients ingredients={props.ingredient}/>     
            <Categories dishes={props.dishes}/>     
            <Serve pieces={props.pieces}/>   
        </>
    )
}