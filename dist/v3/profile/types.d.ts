import { ISODateTime } from '../../base/datetime.js';
import { ISOLanguage } from '../../base/string.js';

interface ProfileLanguageType {
    id: number;
    isoCode: ISOLanguage;
}
interface ProfileUserStateType {
    id: number;
    subscriptionLevel: number;
    nextSubscriptionLevel: number;
    nextSubscriptionLevelAfter: ISODateTime;
    msisdn: number;
    languageId: number;
}
interface ProfileFieldType {
    id: number;
    field: {
        [key: string]: string;
    };
}
declare enum ProfileSetFieldStatusEnum {
    UPDATED = "UPDATED",
    ON_MODERATION = "ON_MODERATION"
}

export { type ProfileFieldType, type ProfileLanguageType, ProfileSetFieldStatusEnum, type ProfileUserStateType };
