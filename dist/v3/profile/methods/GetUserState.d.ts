import { ProfileUserStateType } from '../types.js';
import '../../../base/datetime.js';
import '../../../base/string.js';

type RequestType = {
    cookie: string;
};
type ResponseType = ProfileUserStateType;

export type { RequestType, ResponseType };
