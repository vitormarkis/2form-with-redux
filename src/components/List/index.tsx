import { useAppSelector } from '@root/store';
import React from 'react';
import Candidate from '../Candidate';

import { CandidatesContainer, Container } from './styles';

const List: React.FC = () => {
  const { candidates } = useAppSelector(state => state);
  return (
    <Container>
      <CandidatesContainer>
      {candidates &&
        candidates.map(candidate => (
          <Candidate key={candidate.id} {...candidate}></Candidate>
        ))}
      </CandidatesContainer>
    </Container>
  );
};

export default List;
