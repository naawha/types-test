import { ISODateTime, ISODate, ISOTime } from '../../base/datetime.js';
import { Float } from '../../base/numbers.js';

interface StockCategoryShortType {
    id: number;
    name: string;
    slug: string;
}
interface StockRateType {
    stamp: ISODateTime;
    rate: Float;
    change: Float;
    changePercent: Float;
}
interface StockForecastType {
    direction: number;
    rate: Float;
    stamp: ISODateTime;
    score: number;
}
interface StockShortType {
    id: number;
    symbol: string;
    icon: string | null;
    name: string;
    forecastable: boolean;
    currency: string;
    favorite: boolean;
    rate: StockRateType;
    forecast: StockForecastType | null;
}
interface StockCategoryType extends StockCategoryShortType {
    stocks: StockShortType[];
}
interface StockTodayGameType {
    upVoteCount: number;
    downVoteCount: number;
}
interface StockGraphType {
    time: ISODateTime;
    rate: Float;
}
interface StockCandleType {
    stamp: ISODate;
    low: Float;
    high: Float;
    open: Float;
    close: Float;
}
interface StockType extends StockShortType {
    todayGame: StockTodayGameType | null;
    graph: StockGraphType[];
    candles: StockCandleType[];
}
declare enum StockDirectionEnum {
    UP = "UP",
    DOWN = "DOWN"
}
declare enum StockSourceEnum {
    MOEX = "MOEX",
    MOEX_CURRENCY = "MOEX_CURRENCY"
}
interface StockTradeScheduleType {
    date: ISODate;
    exchange: string;
    open: ISOTime;
    close: ISOTime;
}

export { type StockCandleType, type StockCategoryShortType, type StockCategoryType, StockDirectionEnum, type StockForecastType, type StockGraphType, type StockRateType, type StockShortType, StockSourceEnum, type StockTodayGameType, type StockTradeScheduleType, type StockType };
