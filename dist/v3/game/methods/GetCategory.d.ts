import { GameCategoryType } from '../types.js';
import '../../../base/datetime.js';

type RequestType = {
    cookie?: string;
    categoryId?: number;
    slug?: string;
};
type ResponseType = GameCategoryType;

export type { RequestType, ResponseType };
