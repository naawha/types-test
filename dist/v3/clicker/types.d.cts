import { ISODateTime } from '../../base/datetime.cjs';

interface ClickerInventoryType {
    inventoryId: number;
    inventorySlug: string;
    itemSlug: string | null;
    incomeRate: number;
    clickRate: number;
    energyCapacity: number;
    damage: number;
    armor: number;
}
interface ClickerStateType {
    incomeRate: number;
    incomeBooster: number;
    incomeBoosterTill: ISODateTime | null;
    clickRate: number;
    energy: number;
    energyCapacity: number;
    lastAutoIncome: number;
    damage: number;
    armor: number;
    health: number;
    healthMax: number;
    damageStamp: ISODateTime | null;
    level: number;
    inventory: ClickerInventoryType[];
}
interface ClickerFightParticipantType {
    id: number;
    damage: number;
    armor: number;
    health: number;
    healthMax: number;
    damageStamp: ISODateTime | null;
    level: number;
    inventory: ClickerInventoryType[];
}
declare enum ClickerFightStatusEnum {
    HIT = "HIT",
    MISS = "MISS"
}
declare enum ClickerFightResultEnum {
    Victory = 1,
    Defeat = 2,
    Draw = 3,
    Stalemate = 4
}
interface ClickerFightUserType {
    status: ClickerFightStatusEnum;
    damage: number;
    health: number;
}
interface ClickerFightDetailType {
    user: ClickerFightParticipantType;
    opponent: ClickerFightParticipantType;
    transcript: {
        user: ClickerFightUserType[];
        opponent: ClickerFightUserType[];
    };
    winner: ClickerFightResultEnum;
    prize: number;
}
interface ClickerFightHistoryType {
    id: number;
    stamp: ISODateTime;
    winner: ClickerFightResultEnum;
    prize: number;
}

export { type ClickerFightDetailType, type ClickerFightHistoryType, type ClickerFightParticipantType, ClickerFightResultEnum, ClickerFightStatusEnum, type ClickerFightUserType, type ClickerInventoryType, type ClickerStateType };
