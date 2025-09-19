import { MediaShortType } from '../types.js';
import '../../../base/datetime.js';

type RequestType = {
    cookie?: string;
    slug: string;
    limit: number;
    seenContentId?: number[];
};
type ResponseType = MediaShortType[];

export type { RequestType, ResponseType };
