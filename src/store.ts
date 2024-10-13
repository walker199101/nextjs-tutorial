// src/store.ts
import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import counterReducer from './features/counter/counterSlice'

// Store 생성
const store = configureStore({
  reducer: {
    counter: counterReducer, // 슬라이스 리듀서를 Store에 추가
  },
})

// 타입스크립트 지원을 위해 RootState 및 Dispatch 타입 추출
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// 타입 지원을 위한 커스텀 `useDispatch` 및 `useSelector` 훅 생성
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store