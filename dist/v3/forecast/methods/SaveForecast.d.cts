type RequestType = {
    cookie: string;
    matchId: number;
    winner?: number;
    resultHome?: number;
    resultAway?: number;
};
type ResponseType = {
    result: boolean;
};

export type { RequestType, ResponseType };
