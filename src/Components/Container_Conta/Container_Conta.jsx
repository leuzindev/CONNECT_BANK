import React from 'react'
import styled from 'styled-components'

import user from '../../assets/images/user.png'
const Card_Esquerda = styled.div`
    background-color: #36D4BE;
    height: 800px;
    width: 40%;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
`
const Card_Direita = styled.div`
    background-color: #FFFFFF;
    height: 800px;
    width: 40%;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
`

const Blocos = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 300px;
`
const Bloco_direito = styled.div`
    

`
const Bloco_esquerdo = styled.div`
    

`

const User_img = styled.img`
    

`

const Area_apagar = styled.div`
   
    display: flex;
    align-items: flex-end;
    height: 500px;
`

const Btn_apagar = styled.button`
    margin: 35px;
    background-color: #FF0000;
    color: white;
    cursor: pointer;
    font-family: 'Jockey One', sans-serif;
    border: none;
    outline: none;
    height: 55px;
    width: 220px;
    font-size: 18pt;
`
const Container_Conta = () => {


  return (
  <>
    <Card_Esquerda> 
        
    </Card_Esquerda>
    <Card_Direita> 
        <Blocos>
            <Bloco_esquerdo>
                <p>Total de saldo na conta</p>
                <p>R$ 0,00</p>
                <br />
                <br />
                <p>Total fatura da conta</p>
                <p>R$ 0,00</p>
            </Bloco_esquerdo>
            <Bloco_direito>
                <User_img src={user}/>
            </Bloco_direito>
        </Blocos>
        <Area_apagar>
            <Btn_apagar>Apagar Conta</Btn_apagar>
        </Area_apagar>
    </Card_Direita>
  </>
  )
}

export default Container_Conta