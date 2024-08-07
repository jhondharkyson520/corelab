import styled from 'styled-components';
import imgEditNote from '../../assets/icons/editNote.svg';
import imgEditColor from '../../assets/icons/editColor.svg';
import imgDeleteNote from '../../assets/icons/close.svg';
import imgStarTransparent from '../../assets/icons/starTransparent.svg';

import { useState } from 'react';

const SectionContainer = styled.section`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ContainerMain = styled.div`
    
    width: 350px;
    height: 437.59px;
    border: none;
    box-shadow: 2px 1px 5px #D9D9D9;
    background-color: #FFFFFF;
    margin-bottom: 3rem;
    
    
   
    border-radius: 28px;

    hr{
        height: 1px;
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

const Note = styled.p`
  
    color: #4F4F4D;
    margin-left: 2rem;
    margin-right: 2rem;
    margin-top: 1rem;
    
`;

const Title = styled.h1`
   
    font-size: 14.2px;
    color: #4F4F4D;;
    font-weight: bold;    
`;

const ContainerNote = styled.div`
    width: 100%;
    height: 87%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const ContainerFavorites = styled.div`
    width: 350px;
    padding-left: 2rem;
    margin-bottom: 0.5rem;

    p{
      color: #464646;
      font-size: 12px;
    }
`;

const ContainerOptions = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 2rem 0 2rem;
`;

const ContainerEdit = styled.div`
    display: flex;
    gap: 1rem;
`;

function OthersNotes() {

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
      { !favorite ?
          <>
            <ContainerFavorites>
              <p>Outras</p>
            </ContainerFavorites>

            
              <ContainerMain>
                  <ContainerTitle>
                      <Title>
                        Título
                      </Title>
                      
                        
                          <button onClick={FavoriteControl}>
                              <img  src={imgStarTransparent} alt="" />
                          </button>
                    
                  </ContainerTitle>

                  <hr />

                  <ContainerNote>
                      <Note>
                        Clique ou arraste o arquivo para esta área para fazer upload
                      </Note>

                      <ContainerOptions>
                        <ContainerEdit>
                          <button>
                            <img src={imgEditNote} alt="Edit note icon" />
                          </button>
                          <button>
                            <img src={imgEditColor} alt="Edit color icon" />
                          </button>
                        </ContainerEdit>
                          <button>
                            <img src={imgDeleteNote} alt="Delete note icon" />
                          </button>
                    </ContainerOptions>

                  </ContainerNote>

                  
                  
              </ContainerMain>
            </>

            : <></>

          }
        
    </SectionContainer>
  )
}

export default OthersNotes;
