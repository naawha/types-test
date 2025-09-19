import { ProfileFieldType } from '../types.cjs';
import '../../../base/datetime.cjs';
import '../../../base/string.cjs';

type RequestType = {
    cookie?: string;
    slugList: string[];
    userIdList?: number[];
};
type ResponseType = {
    user: ProfileFieldType[];
};

export type { RequestType, ResponseType };
