import { ClickerStateType } from '../types.cjs';
import '../../../base/datetime.cjs';

type RequestType = {
    cookie: string;
};
type ResponseType = ClickerStateType;

export type { RequestType, ResponseType };
