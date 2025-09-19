import { ForecastCompetitionType } from '../types.js';
import '../../../base/datetime.js';

type RequestType = {
    cookie: string;
    competitionId: number;
};
type ResponseType = ForecastCompetitionType;

export type { RequestType, ResponseType };
