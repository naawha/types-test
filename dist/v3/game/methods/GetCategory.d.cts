import { GameCategoryType } from '../types.cjs';
import '../../../base/datetime.cjs';

type RequestType = {
    cookie?: string;
    categoryId?: number;
    slug?: string;
};
type ResponseType = GameCategoryType;

export type { RequestType, ResponseType };
