import styled from 'styled-components';
import imgStar from '../../assets/icons/starTransparent.svg';

const SectionContainer = styled.section`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`;

const ContainerMain = styled.div`
    
    width: 350px;
    border: 2px solid;
   
    border-radius: 28px;

   
`;

const ContainerTitle =  styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 2rem;
    padding-right: 2rem;
`;

function CreateNotes() {

  return (
    <SectionContainer>
        <ContainerMain>
            <ContainerTitle>
                <h1>Título</h1>
                <img src={imgStar} alt="" />
            </ContainerTitle>

            <hr />
            <input type="text" placeholder="Criar nota" />
        </ContainerMain>
    </SectionContainer>
  )
}

export default CreateNotes;
