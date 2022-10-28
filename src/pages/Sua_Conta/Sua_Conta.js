import React from 'react'
import styled from 'styled-components'
import { GlobalStyle } from "../../Components/GlobalStyle";
import Cabecalho from '../../Components/Cabecalho/index'
import Container_Conta from '../../Components/Container_Conta/Container_Conta';
const Tela = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #DDDDDD;
`
const Sua_Conta = () => {
  return (
    <>  
        <Cabecalho/>
        <Tela>   
            <GlobalStyle />
            <Container_Conta/>
        </Tela>
    </>
  )
}

export default Sua_Conta