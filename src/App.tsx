import { useCallback, useState } from 'react'

import Button from '@/components/Button'
import Link from '@/components/Link'
import Modal from '@/components/Modal'
import Puzzle from '@/components/Puzzle'
import TOPIC_LIST from '@/components/topic-list'
import { shuffle } from '@/utils/swap'

const ICONS = TOPIC_LIST.map((topic) => topic.icon)

function App() {
  const [tilePosition, setTilePosition] = useState<null | number>(null)
  const closeModal = useCallback(() => setTilePosition(null), [])

  const topic = TOPIC_LIST[tilePosition ?? 0]

  return (
    <div className="flex flex-col gap-6 items-center mx-auto w-min">
      <p className="text-left text-gray-600">
        Move the tiles (click them or use the arrow keys) until the picture is
        positioned correctly and click on the empty square to find more about me
        or simply go to my <Link href="/cv.html">CV</Link>
      </p>
      <Puzzle icons={ICONS} onEmptyTileClick={setTilePosition} />
      <Button className="w-full" onClick={shuffle}>
        reshuffle
      </Button>
      <Modal
        isOpen={tilePosition !== null}
        onClose={closeModal}
        title={topic?.title ?? ''}
      >
        {topic?.content}
      </Modal>
    </div>
  )
}

export default App
