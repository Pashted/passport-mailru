import { Strategy as PassportStrategy } from 'passport';

// Структура профиля, который возвращает Mail.ru
export interface MailRuProfile {
    id: string;
    username: string;
    displayName: string;
    name: {
        familyName: string;
        givenName: string;
    };
    gender: string;
    profileUrl: string;
    emails: { value: string }[];
    photos: { value: string }[];
    provider: string;
    _raw: string; // Сырые данные из API
    _json: any; // Данные из API, прошедшие проверку JSON.parse
}

// Опции для конструктора стратегии
export interface MailRuStrategyOptions {
    clientID: string;
    clientSecret: string;
    callbackURL: string;
    passReqToCallback?: boolean;
}

// Тип функции verify (колбэка)
export type VerifyFunction = (
    req: any, // req будет undefined, если passReqToCallback не true
    accessToken: string,
    refreshToken: string,
    profile: MailRuProfile,
    done: (error: any, user?: any) => void
) => void;

export class Strategy extends PassportStrategy {
    constructor(
        options: MailRuStrategyOptions,
        verify: VerifyFunction
    );
}
