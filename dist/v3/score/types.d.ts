import { ISODate, ISOTimeZone, ISODateTime } from '../../base/datetime.js';

interface ScoreMechanicCounterType {
    available: number;
    started: number;
}
interface StoreTopDetailsShortType {
    id: number;
    name: string;
    slug: string;
}
interface ScoreTopDetailsType extends StoreTopDetailsShortType {
    periodEnd: ISODate;
}
interface ScoreStandingType {
    placement: number;
    userId: number;
    score: number;
    time: ISOTimeZone;
    isCurrentUser: boolean;
}
interface ScoreTopType {
    top: ScoreTopDetailsType;
    standings: ScoreStandingType[];
}
interface ScoreHistoryType {
    placement: number;
    score: number;
    time: ISOTimeZone;
    date: ISODate;
}
interface ScoreTopHistoryType {
    top: StoreTopDetailsShortType;
    history: ScoreHistoryType[];
}
interface ScoreTopStateDetailsType extends ScoreTopDetailsType {
    total: number;
}
interface ScoreTopStateType {
    score: number;
    time: ISOTimeZone;
    placement: number;
    top: ScoreTopStateDetailsType;
}
interface ScoreIntermediateHistoryType {
    score: number;
    time: ISODateTime;
    stamp: ISOTimeZone;
    date: ISODate;
}
interface ScoreTopIntermediateHistoryType {
    top: StoreTopDetailsShortType;
    history: ScoreIntermediateHistoryType[];
}

export type { ScoreMechanicCounterType, ScoreTopHistoryType, ScoreTopIntermediateHistoryType, ScoreTopStateDetailsType, ScoreTopStateType, ScoreTopType };
