import {BelongsToMany, Column, Model, Table} from "sequelize-typescript";
import {DataTypes} from "sequelize";
import {UserRolesModel} from "../roles/user-roles.model";
import {Role} from "../roles/roles.model";
import {ApiProperty} from "@nestjs/swagger";

export interface UserCreationAttrs {
    name: string;
    email: string;
    password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
    @ApiProperty({example: 1, description: 'unique identifier'})
    @Column({unique: true, type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'username', description: `unique user's name`, nullable: false})
    @Column({unique: true, type: DataTypes.STRING, allowNull: false})
    name: string;

    @ApiProperty({example: 'example@gmail.com', description: `unique user's email`, nullable: false})
    @Column({unique: true, type: DataTypes.STRING, allowNull: false})
    email: string;

    @ApiProperty({example: '1F23f3fgbF', description: `user's password. Stored hashed`, nullable: false})
    @Column({type: DataTypes.STRING, allowNull: false})
    password: string;

    @ApiProperty({example: false, description: `is user activated his account?`, nullable: false, default: false})
    @Column({type: DataTypes.BOOLEAN, defaultValue: false})
    isConfirmed: boolean

    @ApiProperty({
        example: 'http://localhost:5000/api/activate/57855d29-5a05-4d5c-b9b0-d6bc5e3a7e6e',
        description: `activation link`,
        nullable: true,
        default: null
    })
    @Column({type: DataTypes.STRING, allowNull: true, unique: true})
    confirmationLink: string | null

    @ApiProperty({
        example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE2LCJ1c2VybmFtZSI6ImFsaW0iLCJpYXQiOjE3MDcxMjcyODgsImV4cCI6MTcwNzczMjA4OH0.YFOzjxtWeaWhGyRIvGXw-pYzZafnmhZgOsAXvwGO308',
        description: `refresh token for creating new tokens`,
        nullable: true,
        default: null
    })
    @Column({type: DataTypes.STRING, defaultValue: null, allowNull: true})
    refreshToken: string | null

    @ApiProperty({type: Role, description: `user's roles`})
    @BelongsToMany(() => Role, () => UserRolesModel)
    roles: Role[];
}