import { MediaType } from '../types.js';
import '../../../base/datetime.js';

type RequestType = {
    cookie?: string;
    slug: string;
    limit: number;
    seenContentId?: number[];
};
type ResponseType = MediaType[];

export type { RequestType, ResponseType };
