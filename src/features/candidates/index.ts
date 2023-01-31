import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction"
import { getCandidateIndex, getFilteredCandidate, patchCandidates, toggleCandidateActive } from "@utils/index"

export type CandidateProps = {
  id: number
  done: boolean
  name: string
  age: number
  city: string
  projects: number
}

const initialState: CandidateProps[] = [
  {
    id: 0,
    done: false,
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
    },
    editCandidate: (state, action: PayloadAction<CandidateProps>) => {
      const candidatesWithUpdatedOne = patchCandidates(state, action.payload)
      return candidatesWithUpdatedOne
    },
    toggleCandidate: (state, action: PayloadAction<number>) => {
      const candidatesWithToggledOne = toggleCandidateActive(state, action.payload)
      return candidatesWithToggledOne
    },
  },
})

export const { addNewCandidate, removeCandidate, toggleCandidate, editCandidate } =
  candidatesSlicer.actions

export const candidateReducer = candidatesSlicer.reducer
