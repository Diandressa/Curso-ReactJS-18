import { ReactElement, ReactNode } from "react"

type Props = {
    //Tipo como um elemento react
    //children: ReactElement

    // Tipo como vários tipos react, não precisa do fragment no app.tsx
    //children: ReactNode

    // para usar elemento vazio ou < Card /> no app.tsx
    children?: ReactNode

    // retorna um JSX somente, array para receber mais de um no app.tsx -> não recomendado
    //children: JSX.Element[]
}

export const Card = ({ children } : Props) => {
    return (
        <div style={{border: '1px solid red', width: '100vw', height: '100vh'}}>
            { children }
        </div>
    )
}