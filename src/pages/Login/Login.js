import React from 'react'
import styled from 'styled-components'
import { Bloco } from '../../Components/Bloco'
import { FundoAnimado } from '../../Components/FundoAnimado/index'

const Tela = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Login = () => {
  return (
    <Tela>
        <FundoAnimado />
        <Bloco />
    </Tela>
  )
}
