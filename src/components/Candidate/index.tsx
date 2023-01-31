import {
  CandidateProps,
  editCandidate,
  removeCandidate,
  toggleCandidate,
} from "@features/candidates/candidates-slice"
import React, { useRef } from "react"
import { useDispatch } from "react-redux"

import { Container } from "./styles"

const Candidate: React.FC<CandidateProps> = props => {
  const cardRef = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch()

  function handleDeleteClick(candidateID: number) {
    dispatch(removeCandidate(candidateID))
  }

  function handleEditClick(candidateID: number) {
    dispatch(editCandidate(candidateID))
  }

  function handleToggleClick(candidateID: number) {
    dispatch(toggleCandidate(candidateID))
  }

  return (
    <Container className={props.active ? "done" : ""}>
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
      <div style={{ gridArea: "buttons" }}>
        <button onClick={() => handleToggleClick(props.id)} className="item-toggle">
          {props.active ? 'Descompletar' : 'Completar'}
        </button>
        <button onClick={() => handleEditClick(props.id)} className="item-edit">
          Editar
        </button>
        <button onClick={() => handleDeleteClick(props.id)} className="item-delete">
          Deletar
        </button>
      </div>
    </Container>
  )
}

export default Candidate
