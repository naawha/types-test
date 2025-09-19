import { ISODateTime } from "@/base/datetime"
import { ISOLanguage } from "@/base/string"

export interface ProfileLanguageType {
  id: number
  isoCode: ISOLanguage
}

export interface ProfileUserStateType {
  id: number
  subscriptionLevel: number
  nextSubscriptionLevel: number
  nextSubscriptionLevelAfter: ISODateTime
  msisdn: number
  languageId: number
}

export interface ProfileFieldType {
  id: number
  field: {
    [key: string]: string
  }
}

export enum ProfileSetFieldStatusEnum {
  UPDATED = "UPDATED",
  ON_MODERATION = "ON_MODERATION",
}
