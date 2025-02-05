type Props = {
    dishes: {id: number, title:string}[]
}

export const Categories = ({dishes}: Props) => {

    //quando uso props ele manda só o value certo, nao preciso filtrar

    //funcao de filter envia valor pra funçao 
    //const filteredCategory = dishes.filter(value => value.title.includes('Dessert'))

    return(
        <>
            <ul>
                { dishes.map((value, key) => (
                    <li key={key}>
                        { value.title }
                    </li>
                ))}
            </ul>
        </>
    )
}