type RequestType = {
    cookie: string;
    sessionId: number;
    score: number;
    log: {
        startTime: number;
        endTime: number;
        gameTime: number;
    }[];
};
type ResponseType = null;

export type { RequestType, ResponseType };
