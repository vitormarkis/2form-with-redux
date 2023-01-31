import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction"

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
      return [action.payload, ...state]
    },
  },
})

export const { addNewCandidate } = candidatesSlicer.actions

export const candidateReducer = candidatesSlicer.reducer
