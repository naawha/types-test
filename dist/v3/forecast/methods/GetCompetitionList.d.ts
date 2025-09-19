import { ForecastCompetitionShortType } from '../types.js';
import '../../../base/datetime.js';

type RequestType = {
    cookie: string;
    sportId: number;
    limit: number;
};
type ResponseType = ForecastCompetitionShortType[];

export type { RequestType, ResponseType };
