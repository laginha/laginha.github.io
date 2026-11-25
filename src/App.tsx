import { useCallback, useState } from 'react'

import Button from '@/components/Button'
import Link from '@/components/Link'
import Modal from '@/components/Modal'
import Puzzle from '@/components/Puzzle'
import { TOPICS } from '@/content/topics'
import { usePuzzle } from '@/hooks/usePuzzle'

function App() {
  const [selectedTopic, setSelectedTopic] = useState<null | number>(null)
  const closeModal = useCallback(() => setSelectedTopic(null), [])

  const topic = TOPICS[selectedTopic ?? 0]
  const puzzle = usePuzzle(TOPICS.length)

  return (
    <div className="flex flex-col gap-6 items-center mx-auto w-min">
      <p className="text-zinc-600 flex flex-col gap-2 text-left">
        <span>
          Move the tiles (click them or use the arrow keys) until the picture is
          positioned correctly and click on the empty square to find more about
          me.
        </span>
        <span>
          Short on time? Pick a topic below or go to my{' '}
          <Link href="/cv.html">CV</Link>
        </span>
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
      <nav aria-label="Topics">
        <ul className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-sm">
          {TOPICS.map((item, index) => (
            <li key={item.title}>
              <button
                type="button"
                className="link cursor-pointer"
                onClick={() => setSelectedTopic(index)}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
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
