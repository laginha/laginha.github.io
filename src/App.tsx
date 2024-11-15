import { useCallback, useState } from 'react'
import Button from '@/components/Button'
import Puzzle from '@/components/Puzzle'
import Modal from '@/components/Modal'
import { shuffle } from '@/utils/swap'
import { TilePosition } from '@/utils/types'
import { PUZZLE_SIZE } from '@/utils/constants'
import Topics from '@/components/Topics'
import Link from './components/Link'

function App() {
  const [showModal, setShowModal] = useState<null | TilePosition>(null)
  const closeModal = useCallback(() => setShowModal(null), [])

  return (
    <div
      className={`flex flex-col gap-6 items-center mx-auto w-${PUZZLE_SIZE}`}
    >
      <p className="text-left text-gray-600">
        Move the tiles until the picture is positioned correctly and click on
        the empty square to find more about me or simply go to my{' '}
        <Link href="/cv.html">CV</Link>
      </p>
      <Puzzle onEmpty={(index) => setShowModal(index)} />
      <Button className="w-full" onClick={shuffle}>
        reshuffle
      </Button>
      <Modal
        isOpen={showModal !== null}
        onClose={closeModal}
        {...Topics[showModal ?? 0]}
      />
    </div>
  )
}

export default App
