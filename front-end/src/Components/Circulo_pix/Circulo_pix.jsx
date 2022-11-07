import React from 'react'
import styled from 'styled-components'

import img1 from '../../assets/images/img1.png'
import img2 from '../../assets/images/img2.png'
import img3 from '../../assets/images/img3.png'
import img4 from '../../assets/images/img4.png'
import img5 from '../../assets/images/img5.png'
import img6 from '../../assets/images/img6.png'

const Bola = styled.div`
    background-color: #41D3BE;
    min-width: 100%;
    min-height:  50px;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    transition: 1s all;
    &:hover{
        transition: 1s all;
        transform: scale(.9);
    }
    @media (max-width: 550px){
        min-width: 30px;
        min-height: 30px;
        flex-wrap: wrap;
        margin: 3px;
       
    }
    
    
`
const Campo_btns = styled.div`
    display: flex;
    flex-wrap: nowrap;
    min-width: 90%;
    justify-content: space-around;
    align-items: center;
`
const Bloco_e_Lbl = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`

const Img_opcoes = styled.img`
  
  @media (max-width: 550px){
        width: 20px;
        height: 20px;
    }
`

const Descricao = styled.p`
    
    font-size: 15px;
    margin-bottom: 5px;
    font-family: 'Jockey One', sans-serif;
    @media (max-width: 550px){
        font-size: 13px;
        margin: 2px;
       
    }
`
const Circulo_pix = () => {
    return (

        <Campo_btns>
            <Bloco_e_Lbl>
                <Bola>
                    <Img_opcoes src={img1} />
                </Bola>
                <Descricao>Carteira</Descricao>
            </Bloco_e_Lbl>
            <Bloco_e_Lbl>
                <Bola>
                    <Img_opcoes src={img2} />
                </Bola>
                <Descricao>Cartão</Descricao>
            </Bloco_e_Lbl>
            <Bloco_e_Lbl>
                <Bola>
                    <Img_opcoes src={img3} />
                </Bola>
                <Descricao>Receber</Descricao>
            </Bloco_e_Lbl>
            <Bloco_e_Lbl>
                <Bola>
                    <Img_opcoes src={img4} />
                </Bola>
                <Descricao>Sacar</Descricao>
            </Bloco_e_Lbl>
            <Bloco_e_Lbl>
                <Bola>
                    <Img_opcoes src={img5} />
                </Bola>
                <Descricao>Descricao</Descricao>
            </Bloco_e_Lbl>
            <Bloco_e_Lbl>
                <Bola>
                    <Img_opcoes src={img6} />
                </Bola>
                <Descricao>Fatura</Descricao>
            </Bloco_e_Lbl>



        </Campo_btns>

    )
}

export default Circulo_pix