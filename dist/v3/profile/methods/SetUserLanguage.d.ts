import { ISOLanguage } from '../../../base/string.js';

type RequestType = {
    cookie: string;
    isoCode: ISOLanguage;
};
type ResponseType = null;

export type { RequestType, ResponseType };
