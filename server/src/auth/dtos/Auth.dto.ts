import {ApiProperty} from "@nestjs/swagger";

export class AuthDto {
    @ApiProperty({example: 'username', description: 'user name'})
    username: string;

    @ApiProperty({example: 12345678, description: 'user password'})
    password: string;
}