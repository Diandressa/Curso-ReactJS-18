/* passar um valor como propriedade da função, no typescript tipamos o valor, aqui é uma string
export const UserName = ({name}: {name: string}) => {

    return(
        <h4>Meu nome é: { name.toUpperCase() }</h4>
    )
}
*/

//Podemos trocar a tipagem com type Props
/*
type Props = {
    name: string;
}

export const UserName = ({name}: Props) => {

    return(
        <h4>Meu nome é: { name.toUpperCase() }</h4>
    )
}
*/

//difinimos como parametro o valor name do tipo props, que é um objeto, e acessamos o name do obj que é uma string
type Props = {
    name: string;
}

export const UserName = ({name}: Props) => {
    
    //varivel obtem o name e atribuie a Props
    //const {name} = props 
    return(
        <h4>Meu nome é: { name }</h4>
    )
}

