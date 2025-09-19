import { GamePollType } from '../types.cjs';
import '../../../base/datetime.cjs';

type RequestType = {
    cookie: string;
};
type ResponseType = GamePollType;

export type { RequestType, ResponseType };
