import React from 'react'
import  styled from 'styled-components'

import Circulo_pix from '../Circulo_pix/Circulo_pix'

const Bloco_fundo = styled.div`
    background-color: white;
    margin-top: 20px;
    width: 48%;
    min-height: 90px;
    display: flex;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
    
    @media (max-width: 800px){
      max-width: 100% !important;
      padding: 20px;
      
    }
    @media (max-width: 1100px){
      min-width: 100%;
      
    }

    
`

const Acoes = styled.div`
    
    display: flex;
    flex-wrap: wrap;
`

const Quadrado_Pix = () => {
  return (
   
    <Bloco_fundo>
        <Circulo_pix />
    </Bloco_fundo>
   
  )
}

export default Quadrado_Pix;
