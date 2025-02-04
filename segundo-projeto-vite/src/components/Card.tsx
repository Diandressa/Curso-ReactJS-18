import { useEffect, useState } from "react"

export const Card = () => {
    //const [count, setCount] = useState(0);
    /*
    useEffect(()=>{
        //executa a função a cada segundo 
        // setInterval(() => {
        //     //o componente só atualiza o count com uma funçao
        //      setCount(count + 1)
        //      console.log('Executei e o count é', count)
        // }, 1000)
    }, [count])

    //no useEffect podemos enviar o que sera alterado para que execute a funçao, então toda vez que mudar o count o setInterval teoricamente é executado. Porém o setInterval acaba sendo executado várias vezes pq ele está na memoria, precisamos limpar ele da memoria a cada renderizacao

    */

    //usamos o cleanUp para resolver isso
    /*
    useEffect(()=>{
        //setInterval retorna um numero tipo number
        const intervalId = setInterval(()=>{
            setCount(count + 1)
            console.log('Executei e o count é', count + 1)
        }, 1000)

        //clear Interval para a funcao setInterval
        return () => clearInterval(intervalId);
    }, [count])
    */

    //outro exemplo de cleanUp que pode ser utilizado é o Listeners - monitora o DOM alguma interaçao

    useEffect(()=>{
        const handleWindowClick = () => {
            console.log("Cliquei na janela")
        }
        //quando clico no botao varias vezes ele chama a funcao varias vezes e coloca na memoria, entao ele executa o eventListener toda vez que clico e isso vai escalonando e acumulando com os outros cliques 

        //temos que limpar o evento para toda vez que clicar no botao
        window.addEventListener('click', handleWindowClick)

        //limpando com removeEventListener, ele ativa o eventLinster uma vez pra escutar o click e depois limpa esse listenter para proxima vez que clicar nao acumular
        return () => window.removeEventListener('click', handleWindowClick);
    }, [])
    
    return(
        <div>
           Card está visivel
        </div>
    )
}