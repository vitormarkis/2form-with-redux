import { CandidateProps } from 'features/candidates/candidates-slice';
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
    </Container>
  );
};

export default Candidate;
