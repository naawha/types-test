import { GameCategoryShortType } from '../types.js';
import '../../../base/datetime.js';

type RequestType = {
    cookie?: string;
};
type ResponseType = GameCategoryShortType[];

export type { RequestType, ResponseType };
