import React from 'react'
import styled from "styled-components";

import Conta_pix from '../../Components/Conta_pix/index'


const Conteudo = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${({ theme }) => theme.text};

`

const Saldo_Quadrado = () => {
  return (
    <Conteudo>
        
        <Conta_pix/>
       
    </Conteudo>
  )
}

export default Saldo_Quadrado