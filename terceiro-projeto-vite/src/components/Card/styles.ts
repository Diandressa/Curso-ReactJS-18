import { FunctionComponent, ReactNode } from 'react'
import styled from 'styled-components'
/*
export const Card = styled.div`
  background-color: white;
  width: 400px;
  height: 400px;
  padding: 30px;
  color: blue;
`
*/

//export const Card = styled.div(()=>{
//  return()
//})

export const Card = styled.div(()=>({
  backgroundColor: 'white',
  width: 300,
  height: 400,
  padding: 30
}))


//usando interrogação dizemos que não é opcional informar esse valor no componente
/*
export const Title = styled.span<{ $color:string, $background?:string }>`
  font-size: 19px;
  font-weight: 800;
  color: ${props => props.$color};
  background: ${props => props.$background};
`
*/

interface TitleProps {
  $color: string, 
  $background: string, 
  children: ReactNode
}

//usar props em objetos de estilo, posso revover os parentese pq tenho só um parametro
export const Title: FunctionComponent<TitleProps> = styled.span(props=>({
  fontSize:19,
  fontWeight:800,
  color: props.$color,
  background: props.$background,
}))