import { Card, Title } from './styles';

export default () => {
    return(
        //$color, o cifrao faz nao aparecer no DOM, podemos ver no navegador.
        //Entende que é um estilo css
        <Card>
            <Title $color='black' $background='hotpink'>Meu texto qualquer!</Title>
        </Card>
    )
}