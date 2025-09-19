import { ForecastCompetitionType } from '../types.js';
import '../../../base/datetime.js';

type RequestType = {
    cookie: string;
    limit: number;
};
type ResponseType = ForecastCompetitionType[];

export type { RequestType, ResponseType };
