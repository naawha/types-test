import { MediaType } from '../types.cjs';
import '../../../base/datetime.cjs';

type RequestType = {
    cookie?: string;
    mediaId: number;
};
type ResponseType = MediaType;

export type { RequestType, ResponseType };
