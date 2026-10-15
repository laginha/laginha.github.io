import TOPIC_LIST from '@/components/topic-list'

export const GRID_SIZE = Math.sqrt(TOPIC_LIST.length)
if (!Number.isInteger(GRID_SIZE)) {
  throw new Error(
    `TOPIC_LIST must have a square number of topics, got ${TOPIC_LIST.length}`
  )
}
