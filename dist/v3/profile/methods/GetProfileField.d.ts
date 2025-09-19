import { ProfileFieldType } from '../types.js';
import '../../../base/datetime.js';
import '../../../base/string.js';

type RequestType = {
    cookie?: string;
    slugList: string[];
    userIdList?: number[];
};
type ResponseType = {
    user: ProfileFieldType[];
};

export type { RequestType, ResponseType };
