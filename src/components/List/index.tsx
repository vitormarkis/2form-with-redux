import React from 'react';
import { useAppSelector } from '../../store';
import Candidate from '../Candidate';

import { Container } from './styles';

const List: React.FC = () => {
  const { candidates } = useAppSelector(state => state);
  return (
    <Container>
      {candidates &&
        candidates.map(candidate => (
          <Candidate key={candidate.id} {...candidate}></Candidate>
        ))}
    </Container>
  );
};

export default List;
