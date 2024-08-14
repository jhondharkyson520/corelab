
import iconSearch from '../../assets/icons/search.svg';
import iconClose from '../../assets/icons/close.svg';
import imgLogo from '../../assets/logo/logo.svg';
import { 
    HeaderContainer, 
    Container, 
    Title, 
    SearchContainer, 
    SearchInput, 
    SearchIcon, 
    IconClose 
} from './styles';

interface HeaderProps {
    searchTerm: string;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

function Header({searchTerm, setSearchTerm }: HeaderProps){
    
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