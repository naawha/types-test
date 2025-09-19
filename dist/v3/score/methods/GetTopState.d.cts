import { ScoreTopStateType } from '../types.cjs';
import '../../../base/datetime.cjs';

type RequestType = {
    cookie: string;
    topId?: number;
    topSlug?: string;
};
type ResponseType = ScoreTopStateType;

export type { RequestType, ResponseType };
