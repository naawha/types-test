import { ISODateTime } from '../../base/datetime.js';

interface GameCategoryBaseType {
    id: number;
    name: string;
    slug: string;
}
interface GameCategoryShortType extends GameCategoryBaseType {
    gameCount: number;
}
interface GameCategoryType extends GameCategoryShortType {
    gameList: GameType;
}
interface GameType {
    id: number;
    name: string;
    slug: string;
    image: string;
    description: string;
    created: ISODateTime;
    available: boolean;
    favorite: boolean;
    popularity: number;
    categoryList: GameCategoryBaseType[];
}
interface GamePollGameListType extends GameType {
    voteCount: number;
    voted: boolean;
}
interface GamePollType {
    name: string;
    voteLimit: number;
    userVoteCount: number;
    gameList: GamePollGameListType[];
}

export type { GameCategoryBaseType, GameCategoryShortType, GameCategoryType, GamePollGameListType, GamePollType, GameType };
