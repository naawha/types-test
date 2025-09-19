import { MediaType } from '../types.cjs';
import '../../../base/datetime.cjs';

type RequestType = {
    cookie?: string;
    slug: string;
    limit: number;
    seenContentId?: number[];
};
type ResponseType = MediaType[];

export type { RequestType, ResponseType };
