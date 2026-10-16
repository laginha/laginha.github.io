import { useCallback, useEffect, useReducer, useRef } from 'react'

import { createBoard, puzzleReducer } from './puzzle'

const SHUFFLE_MOVES = 7
const SHUFFLE_INTERVAL_MS = 400

export function usePuzzle(tileCount: number) {
  const [board, dispatch] = useReducer(puzzleReducer, tileCount, createBoard)
  const shuffleTimer = useRef<ReturnType<typeof setInterval>>(undefined)

  const stopShuffle = useCallback(() => {
    clearInterval(shuffleTimer.current)
    shuffleTimer.current = undefined
  }, [])

  const shuffle = useCallback(() => {
    stopShuffle()

    let movesLeft = SHUFFLE_MOVES
    shuffleTimer.current = setInterval(() => {
      dispatch({ type: 'shuffleStep', random: Math.random() })
      if (--movesLeft === 0) stopShuffle()
    }, SHUFFLE_INTERVAL_MS)
  }, [stopShuffle])

  useEffect(() => {
    shuffle()
    return stopShuffle
  }, [shuffle, stopShuffle])

  const slide = useCallback(
    (homeSlot: number) => dispatch({ type: 'slide', homeSlot }),
    []
  )

  return { board, slide, shuffle }
}
