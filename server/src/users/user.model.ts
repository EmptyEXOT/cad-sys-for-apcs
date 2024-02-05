import {BelongsToMany, Column, Model, Table} from "sequelize-typescript";
import {DataTypes} from "sequelize";
import {UserRolesModel} from "../roles/user-roles.model";
import {Role} from "../roles/roles.model";

export interface UserCreationAttrs {
    name: string;
    email: string;
    password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
    @Column({unique: true, type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({unique: true, type: DataTypes.STRING, allowNull: false})
    name: string;

    @Column({unique: true, type: DataTypes.STRING, allowNull: false})
    email: string;

    @Column({type: DataTypes.STRING, allowNull: false})
    password: string;

    @Column({type: DataTypes.BOOLEAN, defaultValue: false})
    isConfirmed: boolean

    @Column({type: DataTypes.STRING, allowNull: true, unique: true})
    confirmationLink: string

    @Column({type: DataTypes.STRING, defaultValue: null, allowNull: true})
    refreshToken: string | null

    @BelongsToMany(() => Role, () => UserRolesModel)
    roles: Role[];
}