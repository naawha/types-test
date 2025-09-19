import { ProfileUserStateType } from '../types.cjs';
import '../../../base/datetime.cjs';
import '../../../base/string.cjs';

type RequestType = {
    cookie: string;
};
type ResponseType = ProfileUserStateType;

export type { RequestType, ResponseType };
