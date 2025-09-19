import { ForecastCompetitionType } from '../types.cjs';
import '../../../base/datetime.cjs';

type RequestType = {
    cookie: string;
    limit: number;
};
type ResponseType = ForecastCompetitionType[];

export type { RequestType, ResponseType };
