import React, { useState } from "react"
import { useDispatch } from "react-redux"

import { addNewCandidate } from "@features/candidates/candidates-slice"
import { useAppSelector } from "@root/store"
import { createNewCandidateObject, getLastID } from "@utils/index"

import { Container, Fieldset } from "./styles"

const Form: React.FC = () => {
  const { candidates } = useAppSelector(state => state)
  const dispatch = useDispatch()

  const [name, setName] = useState<string>("")
  const [age, setAge] = useState<number | string>("")
  const [city, setCity] = useState<string>("")
  const [projects, setProjects] = useState<number | string>("")

  function handleSubmitForm(e: any) {
    e.preventDefault()

    const lastID = getLastID(candidates)
    const newCandidateObject = createNewCandidateObject(name, age, city, projects, lastID)
    dispatch(addNewCandidate(newCandidateObject))
    resetFields()
  }

  function resetFields() {
    setName("")
    setAge("")
    setCity("")
    setProjects("")
  }

  return (
    <Container>
      <Fieldset>
        <legend>Registro de candidatos</legend>

        <label>Nome</label>
        <input
          onChange={e => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Insira seu nome..."
        />
        <label>Idade</label>
        <input
          onChange={e => setAge(e.target.value)}
          value={age}
          type="text"
          placeholder="Insira sua idade..."
        />
        <label>Cidade</label>
        <input
          onChange={e => setCity(e.target.value)}
          value={city}
          type="text"
          placeholder="Insira sua cidade..."
        />
        <label>Projetos</label>
        <input
          onChange={e => setProjects(e.target.value)}
          value={projects}
          type="text"
          placeholder="Insira a quantidade de projetos..."
        />

        <button className="form-add" type="submit" onClick={handleSubmitForm}>
          Adicionar
        </button>

        <button className="form-cancell" type="submit" onClick={e => e.preventDefault()}>
          Cancelar
        </button>
      </Fieldset>
    </Container>
  )
}

export default Form
