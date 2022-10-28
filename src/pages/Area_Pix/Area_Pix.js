import React from 'react'
import styled from 'styled-components'
import Saldo_Quadrado from '../../Components/Saldo_Quadrado/Saldo_Quadrado'
import Pix_area from '../../Components/Pix_area/Pix_area'
import { FundoAnimado } from '../../Components/FundoAnimado/index'
import Cabecalho from '../../Components/Cabecalho/index'
import { GlobalStyle } from "../../Components/GlobalStyle";



const Tela = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    @media(max-width: 900px){
        flex-direction: column;
    }
    @media(max-width: 600px){
      
    }
    
`
const Bloco_pix = styled.div`
    width: 550px;
    margin:5px;
    
`

const Bloco_Saldo = styled.div`
    width: 550px;
    margin:5px;
    @media(max-width: 600px){
        display: none;
    }
`



export const Area_Pix = () => {
    return (
        <>  
            <GlobalStyle />
            <Cabecalho />
           
            <Tela>
                <FundoAnimado />
                <Bloco_pix>
                    <Pix_area />
                </Bloco_pix>
                <Bloco_Saldo>
                    <Saldo_Quadrado />

                </Bloco_Saldo>


            </Tela>
        </>
    )
}

