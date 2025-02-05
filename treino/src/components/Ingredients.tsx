type Props = {
    ingredients: {quantify: number, ingredient: string}[]
}

export const Ingredients = ({ingredients}: Props) => {
    return(
        <ul>
            {ingredients.map((value, key) => (
                <li key={key}>
                    {value.quantify} { value.ingredient }
                </li>
            ))}
        </ul>
    )
}