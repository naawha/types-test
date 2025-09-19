declare enum TriggerEventStateEnum {
    START = "START",
    RESET = "RESET",
    STEP = "STEP",
    SKIP = "SKIP"
}
interface TriggerStateType {
    firstEventStamp: string;
    lastEventStamp: string;
    lastEvent: TriggerEventStateEnum | null;
    coolingPeriodEnd: string;
}
interface TriggerStateListItemType {
    slug: string;
    tleft: number;
    prize: object;
}

export { TriggerEventStateEnum, type TriggerStateListItemType, type TriggerStateType };
