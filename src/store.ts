import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { candidateReducer } from "./features/candidates/candidates-slice";

export const store = configureStore({
    reducer: {
        candidates: candidateReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector