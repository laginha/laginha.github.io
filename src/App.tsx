import { useCallback, useState } from 'react'

import Button from '@/components/Button'
import Link from '@/components/Link'
import Modal from '@/components/Modal'
import Puzzle from '@/components/Puzzle'
import TOPIC_LIST from '@/components/topic-list'
import { cn } from '@/utils/cn'
import { PUZZLE_SIZE, PUZZLE_WIDTH_CLASSES } from '@/utils/constants'
import { shuffle } from '@/utils/swap'
import { TilePosition } from '@/utils/types'

const ICONS = TOPIC_LIST.map((topic) => topic.icon)

function App() {
  const [tilePosition, setTilePosition] = useState<null | TilePosition>(null)
  const closeModal = useCallback(() => setTilePosition(null), [])
  const topic = TOPIC_LIST[tilePosition ?? 0]

  return (
    <div
      className={cn(
        'flex flex-col gap-6 items-center mx-auto',
        PUZZLE_WIDTH_CLASSES[PUZZLE_SIZE]
      )}
    >
      <p className="text-left text-gray-600">
        Move the tiles until the picture is positioned correctly and click on
        the empty square to find more about me or simply go to my{' '}
        <Link href="/cv.html">CV</Link>
      </p>
      <Puzzle icons={ICONS} onEmptyTileClick={setTilePosition} />
      <Button className="w-full" onClick={shuffle}>
        reshuffle
      </Button>
      <Modal
        isOpen={tilePosition !== null}
        onClose={closeModal}
        title={topic.title}
      >
        {topic.content}
      </Modal>
    </div>
  )
}

export default App
