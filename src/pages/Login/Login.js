import React from 'react'
import styled from 'styled-components'
import { Bloco } from '../../Components/Bloco'
import { FundoAnimado } from '../../Components/FundoAnimado/index'
import { GlobalStyle } from "../../Components/GlobalStyle";

import login_img from '../../assets/images/login.svg'

const Bloco_img = styled.img`
  width: 40%;
  @media (max-width: 850px){
    display: none;
  }
  
`

const Tela = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Login = () => {
  return (
    
    <Tela>
        <GlobalStyle />
        <FundoAnimado />
        <Bloco />
        <Bloco_img src={login_img}/>
    </Tela>
  )
}
