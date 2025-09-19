import { GameType } from '../types.js';
import '../../../base/datetime.js';

type RequestType = {
    cookie?: string;
    gameId?: number;
    slug?: string;
};
type ResponseType = GameType;

export type { RequestType, ResponseType };
