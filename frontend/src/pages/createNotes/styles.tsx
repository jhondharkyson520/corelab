import styled from 'styled-components';

export const SectionContainer = styled.section`    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ContainerMain = styled.div`    
    width: 350px;
    height: 103.36px;
    border: 2px solid #D9D9D9;
    border-radius: 28px;
    box-shadow: 2px 1px 5px #D9D9D9;
    background-color: #FFFFFF;  
    margin-bottom: 3rem;      

    hr {
        height: 2px;
        border: none;
        background-color: #D9D9D9;
    }
    
    @media screen and (min-width: 568px) {        
        width: 530px;
        border-radius: 8px;
    }
`;

export const ContainerTitle =  styled.div`
    padding: 0.5rem 2rem 0.5rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;    

    button {
        padding: 0;
        border: none;        
        background: transparent;
        margin: 0;        
        cursor: pointer;
    }

    img {
        width: 19.35px;
        height: 18.38px;
    }

`;

export const TextNote = styled.textarea`
    outline: none;
    border: none;
    color: #50656E;
    margin: 1rem 2rem 0.5rem 2rem;
    outline: none;
    border: none;
    font-size: 13px;
    font-family:'Inter', sans-serif ;
    background-color: transparent;
    resize: none; 
    overflow: hidden;

    &::placeholder {
        color: #50656E;
    }

`;

export const InputTitle = styled.input`
    outline: none;
    border: none;
    font-size: 14.2px;
    font-weight: bolder;
    color: #000000;    

    &::placeholder {
        color: #000000;
    }

`;

export const ContainerNote = styled.div`
    height: 55%;    
    display: flex;    
    align-items: center;
`;