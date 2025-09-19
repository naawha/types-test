import { TriggerEventStateEnum } from '../types.cjs';

type RequestType = {
    cookie: string;
    slug: string;
};
type ResponseType = TriggerEventStateEnum;

export type { RequestType, ResponseType };
