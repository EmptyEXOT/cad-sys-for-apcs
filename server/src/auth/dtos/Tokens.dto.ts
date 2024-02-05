import {ApiProperty} from "@nestjs/swagger";

export class TokensDto {
    @ApiProperty({
        example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE2LCJ1c2VybmFtZSI6ImFsaW0iLCJpYXQiOjE3MDcxMjcyODgsImV4cCI6MTcwNzczMjA4OH0.YFOzjxtWeaWhGyRIvGXw-pYzZafnmhZgOsAXvwGO308',
        description: 'access token'
    })
    accessToken: string;

    @ApiProperty({
        example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE2LCJ1c2VybmFtZSI6ImFsaW0iLCJpYXQiOjE3MDcxMjcyODgsImV4cCI6MTcwNzczMjA4OH0.YFOzjxtWeaWhGyRIvGXw-pYzZafnmhZgOsAXvwGO308',
        description: 'refresh token'
    })
    refreshToken: string;
}