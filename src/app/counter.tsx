'use client'

// src/features/counter/Counter.tsx
import React from 'react'
import { useAppSelector, useAppDispatch } from '../store'
import { increment, decrement, incrementByAmount } from '../features/counter/counterSlice'

const Counter = () => {
  // 상태 읽기
  const count = useAppSelector((state) => state.counter.value)
  // 액션 디스패치
  const dispatch = useAppDispatch()

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
    </div>
  )
}

export default Counter