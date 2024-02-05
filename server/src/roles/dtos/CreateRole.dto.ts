import {ApiProperty} from "@nestjs/swagger";

export class CreateRoleDto {
    @ApiProperty({example: 'ADMIN', description: 'role name'})
    value: string;

    @ApiProperty({example: 'Maximum access level', description: 'role description'})
    description: string;
}