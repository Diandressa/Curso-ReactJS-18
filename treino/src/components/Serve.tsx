type Props = {
    pieces: number
}

export const Serve = ({pieces}: Props) => {
    return(
        <strong>Serves {pieces} pieces</strong>
    )
}