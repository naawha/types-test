import { TriggerEventStateEnum } from '../types.js';

type RequestType = {
    cookie: string;
    slug: string;
};
type ResponseType = TriggerEventStateEnum;

export type { RequestType, ResponseType };
