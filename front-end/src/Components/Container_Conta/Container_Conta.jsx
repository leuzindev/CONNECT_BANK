import React from 'react'
import styled from 'styled-components'

import user from '../../assets/images/user.png'
const Card_Esquerda = styled.div`
    background-color: #36D4BE;
    height: 800px;
    width: 40%;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media(max-width: 750px){  
        width: 100%;
        background-color: rgba(65, 211, 189, 0.541);
        border-radius: 10px;
        
  }
`
const Card_Direita = styled.div`
    background-color: #FFFFFF;
    height: 800px;
    width: 40%;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    @media(max-width: 750px){  
        display: none;
        
  }
  
`

const Blocos = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 300px;
    @media(max-width: 1200px){
    flex-direction: column;
    height: 60%;
  }
    
 
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
 
    @media(max-width: 1200px){  
        height: 300px;
        
  }
`

const Btn_apagar = styled.button`
    margin-left: 10%;
    margin-bottom: 40px;
    
    background-color: #FF0000;
    color: white;
    cursor: pointer;
    font-family: 'Jockey One', sans-serif;
    border: none;
    outline: none;
    height: 55px;
    width: 220px;
    font-size: 18pt;
    @media(max-width: 1200px){  
        margin-left: 20%;
        
  }
`

const Input_Conta = styled.div`
    background-color: #FFFFFF;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    width: 85%;
    height: 60px;
    margin: 20px;


`

const Conteudo_input = styled.p`
    margin-left: 30px;
    color: #808080;
    font-weight: 600;
`

const Bloco_title = styled.div`
   
    width: 85%;
    height: 100px;
`

const Titulos = styled.h1`
    font-size: 40px;
    color: white;
    font-family: 'Inter', sans-serif;
    font-weight: 400;

`

const Saldo = styled.p`
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    color: #808080;
    font-weight: bold;
    display: flex;
`

const Info = styled.p`
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    color: #808080;
    font-weight: bold;
`
const Verde = styled.p`
    color: #41D3BE;
    margin-right: 4px;
`

const Container_Conta = () => {


  return (
  <>
    <Card_Esquerda> 
        <Bloco_title>
            <Titulos>Conta de Fulano</Titulos>
        </Bloco_title>
        <Input_Conta>
            <Conteudo_input>Leonardo Cunha Soares</Conteudo_input>
        </Input_Conta>
        <Input_Conta>
            <Conteudo_input>Leonardo@leonardo.com</Conteudo_input>
        </Input_Conta>
        <Input_Conta>
            <Conteudo_input>(11) 9926-2123</Conteudo_input>
        </Input_Conta>
        <Input_Conta>
            <Conteudo_input>526.551.551.115-44</Conteudo_input>
        </Input_Conta>
        <Input_Conta>
            <Conteudo_input>12351-121321-5212-21</Conteudo_input>
        </Input_Conta>
    </Card_Esquerda>
    <Card_Direita> 
        <Blocos>
            <Bloco_esquerdo>
                <Info>Total de saldo na conta</Info>
                <Saldo><Verde>R$</Verde>  0,00</Saldo>
                <br />
                <br />
                <Info>Total fatura da conta</Info>
                <Saldo><Verde>R$</Verde>  0,00</Saldo>
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