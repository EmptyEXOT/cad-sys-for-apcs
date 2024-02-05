import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({example: 'username', description: 'user name'})
    name: string;

    @ApiProperty({example: 'example@gmail.com', description: 'user email'})
    email: string;

    @ApiProperty({example: 12345678, description: 'user password'})
    password: string;
}