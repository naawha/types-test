import { MediaShortType } from '../types.cjs';
import '../../../base/datetime.cjs';

type RequestType = {
    cookie?: string;
    slug: string;
    limit: number;
    seenContentId?: number[];
};
type ResponseType = MediaShortType[];

export type { RequestType, ResponseType };
