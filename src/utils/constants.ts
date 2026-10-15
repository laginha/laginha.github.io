import TOPIC_LIST from '@/components/topic-list'

export const GRID_SIZE = Math.sqrt(TOPIC_LIST.length)
export const EMPTY_TILE_POSITION = 0
export const ORDERED_POSITIONS = [...Array(GRID_SIZE ** 2).keys()]
