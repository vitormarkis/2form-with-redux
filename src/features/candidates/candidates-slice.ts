import { createSlice, current } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction"
import { getFilteredCandidate } from "@utils/getFiltered"

export type CandidateProps = {
  id: number
  name: string
  age: number
  city: string
  projects: number
}

const initialState: CandidateProps[] = [
  {
    id: 0,
    age: 18,
    city: "São Leopoldo",
    name: "Rodrigo Silva",
    projects: 26,
  },
]

export const candidatesSlicer = createSlice({
  name: "candidates",
  initialState,
  reducers: {
    addNewCandidate: (state, action: PayloadAction<CandidateProps>) => {
      const candidatesWithNewOne = [action.payload, ...state]
      return candidatesWithNewOne
    },
    removeCandidate: (state, action: PayloadAction<number>) => {
      const filteredCandidates = getFilteredCandidate(state, action.payload)
      return filteredCandidates
    }
  },
})

export const { addNewCandidate, removeCandidate } = candidatesSlicer.actions

export const candidateReducer = candidatesSlicer.reducer
