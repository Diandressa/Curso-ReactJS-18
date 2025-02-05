type Props = {
    src: string
}

export const ImgRecipe = ({src}: Props) => {
    return(
        <img 
            src={src}
            alt="Img Cake" 
        />
    )
}
