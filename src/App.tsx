import { useCallback, useState } from 'react'

import Button from '@/components/Button'
import Link from '@/components/Link'
import Modal from '@/components/Modal'
import Puzzle from '@/components/Puzzle'
import { TOPICS } from '@/content/topics'
import { usePuzzle } from '@/utils/usePuzzle'

function App() {
  const [selectedTopic, setSelectedTopic] = useState<null | number>(null)
  const closeModal = useCallback(() => setSelectedTopic(null), [])

  const topic = TOPICS[selectedTopic ?? 0]
  const puzzle = usePuzzle(TOPICS.length)

  return (
    <div className="flex flex-col gap-6 items-center mx-auto w-min">
      <p className="text-left text-gray-600">
        Move the tiles (click them or use the arrow keys) until the picture is
        positioned correctly and click on the empty square to find more about me
        or simply go to my <Link href="/cv.html">CV</Link>
      </p>
      <Puzzle
        board={puzzle.board}
        topics={TOPICS}
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
