import { CandidateProps } from "@features/candidates/candidates-slice"

export function getLastID(candidates: CandidateProps[]): number {
  if (candidates.length === 0) return 0
  const IDs = candidates.map(item => {
    const candidate = { ...item }
    return candidate.id
  })
  const getMajorID = Math.max(...IDs)
  return getMajorID
}

export function createNewCandidateObject(
  name: string,
  age: number | string,
  city: string,
  projects: number | string,
  lastID: number
): CandidateProps {
  age = Number(age)
  projects = Number(projects)
  return {
    id: 1 + lastID,
    name,
    age,
    city,
    projects,
  }
}
