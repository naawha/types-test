import { ISOLanguage } from '../../../base/string.cjs';

type RequestType = {
    cookie: string;
    isoCode: ISOLanguage;
};
type ResponseType = null;

export type { RequestType, ResponseType };
