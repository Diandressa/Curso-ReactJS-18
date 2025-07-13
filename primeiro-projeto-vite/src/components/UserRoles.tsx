export const UserRoles = () => {
    const roles = [
        {id: 1, title: 'CEO'}, 
        {id: 2, title: 'CTO'}, 
        {id: 3, title: 'admin'}
    ];

    //filtra se o valor do id é 1, se for ela percorre com o map. O value é cada iteração do objeto que de true
    const filteredRoles = roles.filter(value => value.id === 1);

    //função que filtra com include
    /*
    const filterRoles = (value: {id:number, title:string}):boolean => {
        //verifica de na interação tem o caracter C
        return value.title.includes('C');
    }
    */
   
    //filtrar chamando a função com include
    //const filteredRoles = roles.filter(value => filterRoles(value));

    //filtrar com valores que incluem C direto no filter
    //const filteredRoles = roles.filter(value => value.title.includes('C'));
    
    return(
        <ul>
            {filteredRoles.map(value => (
                <li key={value.id}>
                    {value.title}
                </li>
            ))}
        </ul>
    )
}