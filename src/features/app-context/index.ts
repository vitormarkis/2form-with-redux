import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type ContextType = "editing"

export type AppContextProps = {
  context: ContextType | null
  stage: number | null
  id: number | null
}

const initialState: AppContextProps = {
  context: null,
  stage: null,
  id: null,
}

export const appContextSlicer = createSlice({
  name: "appContext",
  initialState,
  reducers: {
    setAppContext: (state, action: PayloadAction<AppContextProps>) => {
      return action.payload
    },
  },
})

export const { setAppContext } = appContextSlicer.actions

export const appContextReducer = appContextSlicer.reducer
