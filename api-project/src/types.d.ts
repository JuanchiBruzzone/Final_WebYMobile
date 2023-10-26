export type GameRoomState = 'waiting' | 'playing' | 'finished'

export interface Activity {
  id?: string
  title: string
  description: string
  image: string
};

export interface Proposal {
  id: string
  title: string
  description: string
  activities: number[]
};

export interface GameRoom {
  id: string
  host: string
  name: string
  proposal: string
  players: string[]
  state: GameRoomState
};

