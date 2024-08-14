import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #FFFFFF;
    height: 57px;
    width: 100vw;
    padding-left: 1rem;
    padding-right: 1rem;
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 1rem;
    
    @media screen and (min-width: 468px) {
        padding-left: 2rem;
        padding-right: 2rem;
    }   
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding-right: 1rem;
    padding-bottom: 0.3rem;    
`;

export const Title = styled.h1`
    color: #455A64;
    padding-right: 0.5rem;
    font-weight: normal;
    font-size: 11.45px;   

    @media screen and (min-width: 568px) {
          font-size: 14px;

    }
`;

export const SearchContainer = styled.div`
    width: 220px;
    height: 28px;
    padding: 0.3rem;    
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1.5px solid #D9D9D9;   
    border-radius: 3px;
    box-shadow: 2px 1px 5px #D9D9D9;

    @media screen and (min-width: 468px) {
          width: 300px;         
    }
    
    @media screen and (min-width: 568px) {
          width: 400px;         
    }

    @media screen and (min-width: 658px) {
          width: 530px;         
    }
`;

export const SearchInput = styled.input`
    width: 100%;
    border: none;
    color: #000000;
    outline: none;
    font-size: 10px;

    &::placeholder{
        color: #9A9A9A;
    }
`;

export const SearchIcon = styled.img`
    position: relative;

    &:hover{
        cursor: pointer;
    }
`;

export const IconClose = styled.img`
    padding-bottom: 0.3rem;
`;