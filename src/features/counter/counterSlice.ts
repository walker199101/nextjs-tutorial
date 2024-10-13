
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
  value: number;
}

// 초기 상태 정의
const initialState: CounterState = {
  value: 0,
}

// 슬라이스 생성
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

// 액션과 리듀서를 export
export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer