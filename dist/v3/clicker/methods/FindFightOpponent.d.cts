import { ClickerFightParticipantType } from '../types.cjs';
import '../../../base/datetime.cjs';

type RequestType = {
    cookie: string;
};
type ResponseType = ClickerFightParticipantType;

export type { RequestType, ResponseType };
