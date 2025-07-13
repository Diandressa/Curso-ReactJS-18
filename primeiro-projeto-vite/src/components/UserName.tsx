type Props = {
    name:string,
}

export const UserName = ({name}: Props) => {
    //extrair os dados do objs
    //const {names} = props
    return(
        <>
            <h4>Meu nome é: {name.toUpperCase()}</h4>
        </>
    )
}

