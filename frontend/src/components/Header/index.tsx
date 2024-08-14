import styled from "styled-components";
import iconSearch from '../../assets/icons/search.svg';
import iconClose from '../../assets/icons/close.svg';
import imgLogo from '../../assets/logo/logo.svg';
import NoteContext from "../../context/NoteContext";
import { useContext } from "react";

const HeaderContainer = styled.header`
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

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.5rem;
    padding-right: 1rem;
    padding-bottom: 0.3rem;    
`;

const Title = styled.h1`
    color: #455A64;
    padding-right: 0.5rem;
    font-weight: normal;
    font-size: 11.45px;
   

    @media screen and (min-width: 568px) {
          font-size: 14px;

    }
`;

const SearchContainer = styled.div`
    width: 220px;
    padding: 0.3rem;
   
    height: 28px;

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

const SearchInput = styled.input`
    width: 100%;
    border: none;
    color: #000000;
    outline: none;
    font-size: 10px;

    &::placeholder{
        color: #9A9A9A;
    }
`;

const SearchIcon = styled.img`
    position: relative;

    &:hover{
        cursor: pointer;
    }
`;

const IconClose = styled.img`
    padding-bottom: 0.3rem;
`;

interface HeaderProps {
    searchTerm: string;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  }

function Header({ searchTerm, setSearchTerm }: HeaderProps){

    
    return (
        <HeaderContainer>
           
                <Container>
                    <img src={imgLogo} alt="CoreNotes Logo" />

                    <Title>CoreNotes</Title>

                    <SearchContainer>
                        <SearchInput 
                        type="text" 
                        placeholder="Pesquisar notas" 
                        value={searchTerm} 
                        onChange={(e) => setSearchTerm(e.target.value)}  
                    />
                        <SearchIcon src={iconSearch} alt="Icon Search" />
                    </SearchContainer>

                </Container>

                <IconClose src={iconClose} alt="Icon Close" />
            
        </HeaderContainer>
    )
}

export default Header;


