import { setAppContext } from "@features/app-context"
import { CandidateProps, removeCandidate, toggleCandidate } from "@features/candidates"
import { useAppSelector } from "@root/store"
import React from "react"
import { useDispatch } from "react-redux"

import { Container } from "./styles"

const Candidate: React.FC<CandidateProps> = props => {
  const { appContext } = useAppSelector(state => state)
  const dispatch = useDispatch()

  function handleDeleteClick(candidateID: number) {
    dispatch(
      setAppContext({
        context: null,
        id: null,
        stage: null,
      })
    )
    dispatch(removeCandidate(candidateID))
  }

  function handleEditClick(candidateID: number) {
    dispatch(
      setAppContext({
        ...appContext,
        context: "editing",
        stage: 0,
        id: candidateID,
      })
    )
  }

  function handleToggleClick(candidateID: number) {
    dispatch(toggleCandidate(candidateID))
  }

  return (
    <Container className={props.done ? "done" : ""}>
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
          {props.done ? "Descompletar" : "Completar"}
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
