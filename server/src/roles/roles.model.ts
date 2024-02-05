import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {User} from "../users/user.model";
import {UserRolesModel} from "./user-roles.model";
import {ApiProperty} from "@nestjs/swagger";

interface RoleCreationAttrs {
    value: string;
    description: string;
}

@Table({tableName: 'roles'})
export class Role extends Model<Role, RoleCreationAttrs> {
    @ApiProperty({
        example: 1,
        description: `unique role id`,
    })
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({
        example: 'ADMIN',
        description: `role name`,
    })
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    value: string;

    @ApiProperty({
        example: 'Maximum access level',
        description: `role description`,
    })
    @Column({type: DataType.STRING, allowNull: false})
    description: string;

    @BelongsToMany(() => User, () => UserRolesModel)
    users: User[];
}