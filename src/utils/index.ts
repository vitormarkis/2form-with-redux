import { formattedFieldsProps } from "@components/Form"
import { CandidateProps } from "@features/candidates"

export function getFilteredCandidate(candidates: CandidateProps[], candidateID: number): CandidateProps[] {
  const filteredCandidates = candidates.filter(candidate => candidate.id !== candidateID)
  return filteredCandidates
}

export function getCandidate(candidates: CandidateProps[], candidateID: number): CandidateProps {
  const candidate = candidates.find(candidate => candidate.id === candidateID) as CandidateProps
  return candidate
}

export function getCandidateIndex(candidates: CandidateProps[], candidateID: number): number {
  const candidate = getCandidate(candidates, candidateID)
  const candidateIndex = candidates.indexOf(candidate)
  return candidateIndex
}

export function toggleCandidateActive(originalCandidates: CandidateProps[], candidateID: number) {
  const candidates = [...originalCandidates]
  const candidatesWithToggledOne = candidates.map(candidate =>
    candidate.id === candidateID ? { ...candidate, done: !candidate.done } : candidate
  )
  return candidatesWithToggledOne
}

export function toggleClassName(HTMLElement: HTMLElement | null, className: string): void {
  if (HTMLElement === null) return
  HTMLElement.classList.toggle(className)
}

export function getLastID(candidates: CandidateProps[]): number {
  if (candidates.length === 0) return 0
  const IDs = candidates.map(item => {
    const candidate = { ...item }
    return candidate.id
  })
  const getMajorID = Math.max(...IDs)
  return getMajorID
}

export function createNewCandidateObject(fieldsObject: formattedFieldsProps, lastID: number): CandidateProps {
  return {
    id: 1 + lastID,
    done: false,
    ...fieldsObject,
  }
}

export function createUpdatedCandidateObject(
  fieldsObject: formattedFieldsProps,
  candidate: CandidateProps
): CandidateProps {
  return {
    ...candidate,
    ...fieldsObject,
  }
}

export function patchCandidates(originalCandidates: CandidateProps[], updatedCandidate: CandidateProps) {
  const candidates = [...originalCandidates]
  const candidatesWithUpdatedOne = candidates.map(candidate =>
    candidate.id === updatedCandidate.id ? updatedCandidate : candidate
  )
  return candidatesWithUpdatedOne
}
