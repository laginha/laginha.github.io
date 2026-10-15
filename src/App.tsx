import { useCallback, useState } from 'react'

import Button from '@/components/Button'
import Link from '@/components/Link'
import Modal from '@/components/Modal'
import Puzzle from '@/components/Puzzle'
import TOPIC_LIST from '@/components/topic-list'
import { usePuzzle } from '@/utils/usePuzzle'

const ICONS = TOPIC_LIST.map((topic) => topic.icon)

function App() {
  // The topic shown is the one for the empty tile's current slot when it was
  // clicked
  const [selectedTopic, setSelectedTopic] = useState<null | number>(null)
  const closeModal = useCallback(() => setSelectedTopic(null), [])

  const topic = TOPIC_LIST[selectedTopic ?? 0]
  const puzzle = usePuzzle()

  return (
    <div className="flex flex-col gap-6 items-center mx-auto w-min">
      <p className="text-left text-gray-600">
        Move the tiles (click them or use the arrow keys) until the picture is
        positioned correctly and click on the empty square to find more about me
        or simply go to my <Link href="/cv.html">CV</Link>
      </p>
      <Puzzle
        board={puzzle.board}
        icons={ICONS}
        onSlide={puzzle.slide}
        onEmptyTileClick={setSelectedTopic}
      />
      <Button className="w-full" onClick={puzzle.shuffle}>
        reshuffle
      </Button>
      <Modal
        isOpen={selectedTopic !== null}
        onClose={closeModal}
        title={topic?.title ?? ''}
      >
        {topic?.content}
      </Modal>
    </div>
  )
}

export default App
