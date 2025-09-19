import { GameCategoryShortType } from '../types.cjs';
import '../../../base/datetime.cjs';

type RequestType = {
    cookie?: string;
};
type ResponseType = GameCategoryShortType[];

export type { RequestType, ResponseType };
