export enum TriggerEventStateEnum {
  START = "START",
  RESET = "RESET",
  STEP = "STEP",
  SKIP = "SKIP",
}

export interface TriggerStateType {
  firstEventStamp: string
  lastEventStamp: string
  lastEvent: TriggerEventStateEnum | null
  coolingPeriodEnd: string
}

export interface TriggerStateListItemType {
  slug: string
  tleft: number
  prize: object
}
