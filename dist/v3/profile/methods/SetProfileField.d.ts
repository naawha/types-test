import { ProfileSetFieldStatusEnum } from '../types.js';
import '../../../base/datetime.js';
import '../../../base/string.js';

type RequestType = {
    cookie: string;
    slug: string;
    value: string;
};
type ResponseType = ProfileSetFieldStatusEnum;

export type { RequestType, ResponseType };
