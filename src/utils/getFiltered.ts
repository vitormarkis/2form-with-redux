import { CandidateProps } from "@features/candidates/candidates-slice"

export function getFilteredCandidate(
  candidates: CandidateProps[],
  candidateID: number
): CandidateProps[] {
  const filteredCandidates = candidates.filter(candidate => candidate.id !== candidateID)
  return filteredCandidates
}

export function getCandidate(candidates: CandidateProps[], candidateID: number): CandidateProps {
  const candidate = candidates.filter(candidate => candidate.id === candidateID)[0]
  return candidate
}

export function getCandidateIndex(candidates: CandidateProps[], candidateID: number): number {
  const candidate = getCandidate(candidates, candidateID)
  const candidateIndex = candidates.indexOf(candidate)
  return candidateIndex
}
