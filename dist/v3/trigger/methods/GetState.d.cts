import { TriggerStateType } from '../types.cjs';

type RequestType = {
    cookie: string;
    slug: string;
};
type ResponseType = TriggerStateType;

export type { RequestType, ResponseType };
