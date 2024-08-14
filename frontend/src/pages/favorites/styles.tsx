import styled from 'styled-components';

export const SectionContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const ContainerMain = styled.div<{color: string}>`    
    width: 350px;
    height: 437.59px;
    border: none;
    box-shadow: 2px 1px 5px #D9D9D9;
    background-color: ${({ color }) => color ? color : '#FFFFFF'};
    margin-bottom: 3rem;      
    border-radius: 28px;

    hr{
        height: 1px;
        border: none;
        background-color: ${({ color }) => color ? '#FFFFFF' : color} ;        
    }
    
    @media screen and (min-width: 568px) {
        width: 100%;
        max-width: 530px;
    }
`;

export const ContainerTitle =  styled.div`
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

export const Note = styled.textarea`  
    color: #4F4F4D;
    padding-left: 2rem;
    padding-right: 2rem;
    margin-top: 1rem;
    outline: none;
    border: none;
    font-size: 13px;
    font-family:'Inter', sans-serif ;
    background-color: transparent;    
    max-width: 350px;
    height: 80%;
    resize: none; 
    overflow: hidden;  
`;

export const Title = styled.input`   
    font-size: 14.2px;
    color: #4F4F4D;;
    font-weight: bold;
    outline: none;
    border: none;
    background-color: transparent;    
`;

export const ContainerNote = styled.div`
    width: 100%;
    height: 87%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (min-width: 568px) {
       max-width: 390px;
    }
   
`;

export const ContainerFavorites = styled.div`    
    width: 100%;
    padding-left: 2rem;
    margin-bottom: 0.5rem;

    p{
      color: #464646;
      font-size: 12px;
    }

    @media screen and (min-width: 568px) {
      width: 100%;
      display: flex;
      padding-left: 6rem;
      margin-bottom: 0.5rem;
    }   
`;

export const ContainerOptions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem 0 2rem;

    button{
      border-radius: 100%;
      width: 35px;
      padding: 7px;
      border: none;
      background-color: transparent;

      &:hover{
        cursor: pointer;
        background-color: #FFE3B3;
      }
    }    
`;

export const ContainerEdit = styled.div`
    display: flex;
    gap: 1rem;
`;

export const ContainerItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-left: 4rem;
    padding-right: 4rem;

    @media screen and (min-width: 1008px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem; 
        justify-items: center;

        ${({ children }) => {

          let isSingleChildren = false;

          if (Array.isArray(children)) {            
            if (children.length === 1) {
              isSingleChildren = true;
            }
          } else if (children) {          
            isSingleChildren = true;            
          }

          if (isSingleChildren) {
            return `
              grid-template-columns: 1fr;
              justify-content: center;
              align-content: center;
            `;
          }

          return '';
          }}        
      }

    @media screen and (min-width: 1268px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem; 
        justify-items: center;
        
        ${({ children }) => {

          let isSingleChildren = false;

          if (Array.isArray(children)) {            
            if (children.length === 1) {
              isSingleChildren = true;
            }
          } else if (children) {          
            isSingleChildren = true;            
          }

          if (isSingleChildren) {
            return `
              grid-template-columns: 1fr;
              justify-content: center;
              align-content: center;
            `;
          }
          
          return '';
        }}
      }
`;

export const ContainerColors = styled.div`
    position: absolute;
    background-color: #FFFFFF;
    border-radius: 20px;
    width: 287px;
    height: 97px;
    box-shadow: 2px 1px 5px #D9D9D9;
    margin-left: 4rem;
    gap: 0.5rem;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    padding: 0.4rem;
`;

export const ColorButton = styled.button<{ color: string }>`
  background-color: ${({ color }) => color};
  width: 37px;
  height: 37px;
  border: none;
  border-radius: 100%;

  &:hover{
    cursor: pointer;
  }
`;