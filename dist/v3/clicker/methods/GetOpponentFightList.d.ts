import { ClickerFightHistoryType } from '../types.js';
import '../../../base/datetime.js';

type RequestType = {
    cookie: string;
    stamp?: string;
};
type ResponseType = ClickerFightHistoryType[];

export type { RequestType, ResponseType };
