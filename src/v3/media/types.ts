import { ISODateTime } from "@/base/datetime"

export interface MediaTagType {
  id: number
  name: string
  slug: string | null
}

export interface MediaShortType {
  id: number
  publicationStamp: ISODateTime
  heading: string
  lead: string | null
  icon: string | null
  link: string | null
  author: string | null
  leadImage: string | null
  tag: MediaTagType[]
}

export interface MediaType extends MediaShortType {
  content: string | null
}

export interface MediaProjectRatingItemType {
  slug: string
  name: string
  value: string
}
