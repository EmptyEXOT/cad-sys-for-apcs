import {ApiProperty} from "@nestjs/swagger";

export class AddRoleDto {
    @ApiProperty({example: 'ADMIN', description: 'role name'})
    role: string;

    @ApiProperty({example: 'username', description: 'The name of the user to whom the role is assigned'})
    name: string;
}