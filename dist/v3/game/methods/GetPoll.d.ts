import { GamePollType } from '../types.js';
import '../../../base/datetime.js';

type RequestType = {
    cookie: string;
};
type ResponseType = GamePollType;

export type { RequestType, ResponseType };
