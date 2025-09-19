import { ProfileSetFieldStatusEnum } from '../types.cjs';
import '../../../base/datetime.cjs';
import '../../../base/string.cjs';

type RequestType = {
    cookie: string;
    slug: string;
    value: string;
};
type ResponseType = ProfileSetFieldStatusEnum;

export type { RequestType, ResponseType };
