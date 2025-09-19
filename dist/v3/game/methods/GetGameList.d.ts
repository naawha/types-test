import { GameType } from '../types.js';
import '../../../base/datetime.js';

type RequestType = {
    cookie?: string;
};
type ResponseType = GameType[];

export type { RequestType, ResponseType };
