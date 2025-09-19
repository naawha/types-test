import { MediaType } from '../types.js';
import '../../../base/datetime.js';

type RequestType = {
    cookie?: string;
    mediaId: number;
};
type ResponseType = MediaType;

export type { RequestType, ResponseType };
