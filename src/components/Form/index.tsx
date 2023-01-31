import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

import { addNewCandidate, CandidateProps, editCandidate } from "@features/candidates"
import { useAppSelector } from "@root/store"
import { createNewCandidateObject, createUpdatedCandidateObject, getCandidate, getLastID } from "@utils/index"

import { setAppContext } from "@features/app-context"
import { Container, Fieldset } from "./styles"

export type fieldsProps = {
  name: string
  age: string
  city: string
  projects: string
}

export type formattedFieldsProps = {
  name: string
  age: number
  city: string
  projects: number
}

const Form: React.FC = () => {
  const { candidates, appContext } = useAppSelector(state => state)
  const dispatch = useDispatch()

  const [name, setName] = useState<string>("")
  const [age, setAge] = useState<string>("")
  const [city, setCity] = useState<string>("")
  const [projects, setProjects] = useState<string>("")

  function handleSubmitForm(e: any) {
    e.preventDefault()

    const lastID = getLastID(candidates)
    const fieldsObject = getFormattedFieldsObject()
    const newCandidateObject = createNewCandidateObject(fieldsObject, lastID)

    switch (appContext.context) {
      case "editing":
        const candidate = getCandidate(candidates, appContext.id as number)
        const fieldsObject = getFormattedFieldsObject()
        const updatedCandidate = createUpdatedCandidateObject(fieldsObject, candidate)
        dispatch(editCandidate(updatedCandidate))

        break
      default:
        dispatch(addNewCandidate(newCandidateObject))
        break
    }

    resetAppContext()
  }

  function setFields(candidate: CandidateProps) {
    setName(candidate.name)
    setAge(candidate.age === 0 ? "" : String(candidate.age))
    setCity(candidate.city)
    setProjects(candidate.projects === 0 ? "" : String(candidate.projects))
  }

  function getFieldsObject(): fieldsProps {
    return {
      name,
      age,
      city,
      projects,
    }
  }

  function getFormattedFieldsObject(): formattedFieldsProps {
    return {
      name,
      age: Number(age),
      city,
      projects: Number(projects),
    }
  }

  function resetAppContext() {
    dispatch(
      setAppContext({
        context: null,
        id: null,
        stage: null,
      })
    )
  }

  function resetFields() {
    setName("")
    setAge("")
    setCity("")
    setProjects("")
  }

  useEffect(() => {
    if (typeof appContext.id === "number") {
      const candidate = getCandidate(candidates, appContext.id as number)
      setFields(candidate)
    }
    if ( appContext.context === null ) resetFields()
  }, [appContext.id, candidates])

  return (
    <Container>
      <Fieldset>
        <legend>Registro de candidatos</legend>

        <label>Nome</label>
        <input onChange={e => setName(e.target.value)} value={name} type="text" placeholder="Insira seu nome..." />
        <label>Idade</label>
        <input onChange={e => setAge(e.target.value)} value={age} type="text" placeholder="Insira sua idade..." />
        <label>Cidade</label>
        <input onChange={e => setCity(e.target.value)} value={city} type="text" placeholder="Insira sua cidade..." />
        <label>Projetos</label>
        <input
          onChange={e => setProjects(e.target.value)}
          value={projects}
          type="text"
          placeholder="Insira a quantidade de projetos..."
        />

        <button className="form-add" type="submit" onClick={handleSubmitForm}>
          {appContext.context === "editing" ? "Atualizar" : "Adicionar"}
        </button>

        <button className="form-cancell" type="submit" onClick={e => e.preventDefault()}>
          Cancelar
        </button>
      </Fieldset>
    </Container>
  )
}

export default Form
