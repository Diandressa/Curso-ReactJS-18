type Props = {
    src: string
}
export const UserAvatar = ({src}: Props) => {
    return(
        <img 
            src={src}
            alt="Imagem avatar" 
            onClick={() => alert('clicou')}
        />
    )
}