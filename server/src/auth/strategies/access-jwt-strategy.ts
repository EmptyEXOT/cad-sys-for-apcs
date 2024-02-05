import {PassportStrategy} from "@nestjs/passport";
import {ExtractJwt, Strategy} from "passport-jwt";
import * as process from "process";

export type JwtPayload = {
    sub: string;
    username: string;
}

export class AccessJwtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: `${process.env.SECRET_KEY}`
        });
    }

    async validate(payload: JwtPayload) {
        return payload
    }
}