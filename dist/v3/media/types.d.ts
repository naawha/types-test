import { ISODateTime } from '../../base/datetime.js';

interface MediaTagType {
    id: number;
    name: string;
    slug: string | null;
}
interface MediaShortType {
    id: number;
    publicationStamp: ISODateTime;
    heading: string;
    lead: string | null;
    icon: string | null;
    link: string | null;
    author: string | null;
    leadImage: string | null;
    tag: MediaTagType[];
}
interface MediaType extends MediaShortType {
    content: string | null;
}
interface MediaProjectRatingItemType {
    slug: string;
    name: string;
    value: string;
}

export type { MediaProjectRatingItemType, MediaShortType, MediaTagType, MediaType };
