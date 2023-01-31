import { appContextReducer } from "@features/app-context"
import { candidateReducer } from "@features/candidates"
import { configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useSelector } from "react-redux"

export const store = configureStore({
  reducer: {
    candidates: candidateReducer,
    appContext: appContextReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
