import { ClickerFightHistoryType } from '../types.cjs';
import '../../../base/datetime.cjs';

type RequestType = {
    cookie: string;
    stamp?: string;
};
type ResponseType = ClickerFightHistoryType[];

export type { RequestType, ResponseType };
