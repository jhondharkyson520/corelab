import styled from 'styled-components';
import imgStarTransparent from '../../assets/icons/starTransparent.svg';
import imgStarYellow from '../../assets/icons/starYellow.svg';
import { useState } from 'react';

const SectionContainer = styled.section`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`;

const ContainerMain = styled.div`
    
    width: 350px;
    height: 103.36px;
    border: 2px solid #D9D9D9;
    box-shadow: 2px 1px 5px #D9D9D9;
    margin-bottom: 3rem;
    background-color: #FFFFFF;
    
    
   
    border-radius: 28px;

    hr{
        height: 2px;
        border: none;
        background-color: #D9D9D9;        
    }
    
    @media screen and (min-width: 568px) {
        border-radius: 8px;
        width: 530px;       

    }
`;

const ContainerTitle =  styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 2rem 0.5rem 2rem;

    button{
        padding: 0;
        margin: 0;
        background: transparent;
        border: none;
        cursor: pointer;
    }

    img{
        width: 19.35px;
        height: 18.38px;
    }
`;

const InputNote = styled.input`
    outline: none;
    border: none;
    color: #50656E;
    margin-left: 2rem;
    

    &::placeholder {
        color: #50656E;       
    }
`;

const InputTitle = styled.input`
    outline: none;
    border: none;
    font-size: 14.2px;
    color: #000000;
    font-weight: bolder;

    &::placeholder {
        color: #000000;       
    }
`;

const ContainerNote = styled.div`
    display: flex;
    height: 55%;
    align-items: center;
`;


function CreateNotes() {

    const [ favorite, setFavorite ] = useState(false);

    const FavoriteControl = () => {

        if( favorite == false){
            setFavorite(true);
        } else{
            setFavorite(false);
        }
    };

  return (
    <SectionContainer>
        <ContainerMain>
            <ContainerTitle>
                <InputTitle type="text" placeholder="Título" required />
                { !favorite 
                    ?
                    <button onClick={FavoriteControl}>
                        <img src={imgStarTransparent} alt="" />
                    </button>
                    :
                    <button onClick={FavoriteControl}>
                        <img  src={imgStarYellow} alt="" />
                    </button>
                }
            </ContainerTitle>

            <hr />

            <ContainerNote>
                <InputNote type="text" placeholder="Criar nota..." required />
            </ContainerNote>
            
        </ContainerMain>
    </SectionContainer>
  )
}

export default CreateNotes;
