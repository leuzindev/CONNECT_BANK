
import React from 'react'
import styled from 'styled-components'

import img_registro from '../../assets/images/register.svg'
import Formulario_Cad from '../../Components/Formulario_Cad/Formulario_Cad'
import { GlobalStyle } from "../../Components/GlobalStyle";
import {FundoAnimado} from '../../Components/FundoAnimado/index'

const Tela = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
const Img_registro = styled.img`
    width: 40%;
    @media(max-width: 900px){
        display: none;
    }
`
export const Register = () => {
    return (
        <Tela>
            <GlobalStyle />
            <FundoAnimado />
            <Formulario_Cad />
            <Img_registro src={img_registro}/>
        </Tela>
    )
}

