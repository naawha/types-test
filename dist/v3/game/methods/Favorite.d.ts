type RequestType = {
    cookie: string;
    gameId?: number;
    slug?: string;
    state: boolean;
};
type ResponseType = boolean;

export type { RequestType, ResponseType };
