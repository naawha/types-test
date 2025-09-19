import { ScoreTopStateType } from '../types.js';
import '../../../base/datetime.js';

type RequestType = {
    cookie: string;
    topId?: number;
    topSlug?: string;
};
type ResponseType = ScoreTopStateType;

export type { RequestType, ResponseType };
