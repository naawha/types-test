import { ISODateTime } from '../../base/datetime.js';

interface ForecastSportShortType {
    id: number;
    logo: string | null;
    name: string;
    slug: string;
}
interface ForecastSportType extends ForecastSportShortType {
    forecastable: boolean;
}
interface ForecastCompetitionShortType {
    id: number;
    logo: string | null;
    name: string;
    forecastable: boolean;
    slug: string;
}
interface ForecastCompetitionType extends ForecastCompetitionShortType {
    sport: ForecastSportShortType;
}
declare enum ForecastMatchStatusEnum {
    PLANNED = "PLANNED",
    STARTED = "STARTED",
    FINISHED = "FINISHED",
    POSTPONED = "POSTPONED",
    CANCELED = "CANCELED"
}
interface ForecastTeamType {
    id: number;
    name: string;
    nameCode: string;
    logo: string | null;
    slug: string;
}
declare enum ForecastMatchResultEnum {
    Draw = 0,
    Home = 1,
    Away = 2
}
interface ForecastMatchType {
    matchId: number;
    slug: string;
    sport: ForecastSportShortType;
    competition: ForecastCompetitionShortType;
    startStamp: ISODateTime;
    matchStatus: ForecastMatchStatusEnum;
    homeTeam: ForecastTeamType;
    awayTeam: ForecastTeamType;
    winner: ForecastMatchResultEnum | null;
    resultHome: number | null;
    resultAway: number | null;
    score: number | null;
    forecastable: boolean;
}
interface ForecastResultType {
    outcomeOnly: boolean;
    winner: ForecastMatchResultEnum | null;
    resultHome: number | null;
    resultAway: number | null;
}
interface ForecastMatchForecastType extends ForecastMatchType {
    forecast: ForecastResultType;
}

export { type ForecastCompetitionShortType, type ForecastCompetitionType, type ForecastMatchForecastType, ForecastMatchResultEnum, ForecastMatchStatusEnum, type ForecastMatchType, type ForecastResultType, type ForecastSportShortType, type ForecastSportType, type ForecastTeamType };
