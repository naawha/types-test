import { TriggerStateType } from '../types.js';

type RequestType = {
    cookie: string;
    slug: string;
};
type ResponseType = TriggerStateType;

export type { RequestType, ResponseType };
