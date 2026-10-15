import { useCallback, useEffect, useReducer, useRef } from 'react'

import { GRID_SIZE } from './constants'
import { type Board, puzzleReducer } from './puzzle'

const SHUFFLE_MOVES = 7
const SHUFFLE_INTERVAL_MS = 400

const INITIAL_BOARD: Board = [...Array(GRID_SIZE ** 2).keys()]

export function usePuzzle() {
  const [board, dispatch] = useReducer(puzzleReducer, INITIAL_BOARD)
  const shuffleTimer = useRef<ReturnType<typeof setInterval>>(undefined)

  const stopShuffle = useCallback(() => {
    clearInterval(shuffleTimer.current)
    shuffleTimer.current = undefined
  }, [])

  const shuffle = useCallback(() => {
    stopShuffle()

    let movesLeft = SHUFFLE_MOVES
    shuffleTimer.current = setInterval(() => {
      dispatch({ type: 'shuffleStep' })
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
