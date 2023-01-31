import { CandidateProps } from '@features/candidates/candidates-slice';
import React from 'react';

import { Container } from './styles';

const Candidate: React.FC<CandidateProps> = props => {
  return (
    <Container>
      <div>
        <h3>{props.name}</h3>
        <p>{props.city}</p>
      </div>
      <div>
        <p>{props.age}</p>
      </div>
      <div>
        <div>
          <div></div>
        </div>
        <p>
          <span>{props.projects}</span> projetos
        </p>
      </div>
      <div style={{gridArea: "buttons"}}>
        <button className='item-toggle'>Completar</button>
        <button className='item-edit'>Editar</button>
        <button className='item-delete'>Deletar</button>
      </div>
    </Container>
  );
};

export default Candidate;
