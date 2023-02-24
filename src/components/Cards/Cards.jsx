import React from 'react';
import Card from '../Card/Card';
import styled from 'styled-components';

const DivCards = styled.div`
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   justify-content: space-between;
   padding-left: 4rem;
   padding-right: 4rem;
   
`

export default function Cards(props) {
   const { characters, onClose } = props;

   return (
      <DivCards>
         {characters.map((character) => 
            <Card 
               name={character.name}
               gender={character.gender}
               species={character.species} 
               image={character.image}
               key={character.id}
               id={character.id}
               onClose={onClose}
            />)}
      </DivCards>
   );
}
