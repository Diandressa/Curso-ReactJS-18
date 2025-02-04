type Props = {
    onClique: (label: string) => void //void pq retorna vazio
}

export const Button = ({onClique}: Props) => {
    const label = 'Texto do botão!'

    return (
        <button onClick={() => onClique('Texto do alert')}>
            {label}
        </button>
    )
}