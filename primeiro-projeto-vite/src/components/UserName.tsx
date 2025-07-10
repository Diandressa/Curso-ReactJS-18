export const UserName = () => {
    //let name = 'Nome'
    //let names = {nome1: 'Andressa', nome2: 'Nicolau'}

    let name = 'andressa'
    /*
    const formatName = (value:string) => {
        return value.toUpperCase()
    }
    */

    const formatName = (value:string) => value.toUpperCase();

    return(
        <>
            <h4>Meu nome é: {formatName(name)}</h4>
            <h4>Meu nome é: {name.toUpperCase()}</h4>
        </>
    )
}

