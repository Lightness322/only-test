export interface IPeriod {
  topic: string
  from: number
  to: number
  events: IEvent[]
}

export interface IEvent {
  year: number
  description: string
}
