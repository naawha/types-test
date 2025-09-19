import { ISODateTime } from "@/base/datetime"

export interface ClickerInventoryType {
  inventoryId: number
  inventorySlug: string
  itemSlug: string | null
  incomeRate: number
  clickRate: number
  energyCapacity: number
  damage: number
  armor: number
}

export interface ClickerStateType {
  incomeRate: number
  incomeBooster: number
  incomeBoosterTill: ISODateTime | null
  clickRate: number
  energy: number
  energyCapacity: number
  lastAutoIncome: number
  damage: number
  armor: number
  health: number
  healthMax: number
  damageStamp: ISODateTime | null
  level: number
  inventory: ClickerInventoryType[]
}

export interface ClickerFightParticipantType {
  id: number
  damage: number
  armor: number
  health: number
  healthMax: number
  damageStamp: ISODateTime | null
  level: number
  inventory: ClickerInventoryType[]
}

export enum ClickerFightStatusEnum {
  HIT = "HIT",
  MISS = "MISS",
}

export enum ClickerFightResultEnum {
  Victory = 1,
  Defeat = 2,
  Draw = 3,
  Stalemate = 4,
}

export interface ClickerFightUserType {
  status: ClickerFightStatusEnum
  damage: number
  health: number
}

export interface ClickerFightDetailType {
  user: ClickerFightParticipantType
  opponent: ClickerFightParticipantType
  transcript: {
    user: ClickerFightUserType[]
    opponent: ClickerFightUserType[]
  }
  winner: ClickerFightResultEnum
  prize: number
}

export interface ClickerFightHistoryType {
  id: number
  stamp: ISODateTime
  winner: ClickerFightResultEnum
  prize: number
}
