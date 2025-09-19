import { ClickerStateType } from '../types.cjs';
import '../../../base/datetime.cjs';

type RequestType = {
    cookie: string;
    count: number;
};
type ResponseType = ClickerStateType;

export type { RequestType, ResponseType };
