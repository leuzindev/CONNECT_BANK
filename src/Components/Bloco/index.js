import React from 'react'
import styled from 'styled-components'


const QuadradoLogin = styled.div`
    margin: 30px;
    background-color: #41d3be;
    height: 700px;
    width: 600px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;

`
const Bloco_Titulo = styled.div`
    
    
  
`
const Titulo_Login = styled.h1`
    height: 130px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 70px;
    font-family: 'Koulen', cursive;
    color: white;
`
const Bloco_inputs = styled.div`
    
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
    
`
const Inputs_login = styled.input`
    height: 62px;
    width: 450px;
    display: flex;
    font-size: 20px;
    margin: 40px;
    border-radius: 5px;
    border: none;
    outline: none;
    font-weight: bold;
    &::placeholder{
        font-size: 15px;
        padding-left: 15px;
    }
    
`

const Bloco_Btn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Button_Login = styled.button`
    background-color: #3AA0E0;
    height: 56px;
    width: 200px;
    outline: none;
    border: none;
    color: white;
    font-size: 17pt;
    margin: 10px;
    cursor: pointer;
    font-family: 'Jockey One', sans-serif;

`

const Formulario_login = styled.form`
 //test

`
export const Bloco = () => {
  return (
    <QuadradoLogin>
        <Bloco_Titulo>
        <Titulo_Login>LOGIN</Titulo_Login>
        </Bloco_Titulo>
        <Bloco_inputs>
            <Formulario_login>
                <Inputs_login placeholder='CPF'/>
                <Inputs_login placeholder='SENHA'/>
                <Bloco_Btn>
                    <Button_Login>LOGAR</Button_Login>
                    <Button_Login>REGISTRAR</Button_Login>

                </Bloco_Btn>
            </Formulario_login>
       
        </Bloco_inputs>
    </QuadradoLogin>
  )
}
