import { GameType } from '../types.cjs';
import '../../../base/datetime.cjs';

type RequestType = {
    cookie?: string;
    gameId?: number;
    slug?: string;
};
type ResponseType = GameType;

export type { RequestType, ResponseType };
