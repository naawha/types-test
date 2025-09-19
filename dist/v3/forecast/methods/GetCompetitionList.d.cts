import { ForecastCompetitionShortType } from '../types.cjs';
import '../../../base/datetime.cjs';

type RequestType = {
    cookie: string;
    sportId: number;
    limit: number;
};
type ResponseType = ForecastCompetitionShortType[];

export type { RequestType, ResponseType };
