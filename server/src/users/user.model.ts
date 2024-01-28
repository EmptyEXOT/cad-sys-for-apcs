import {BelongsToMany, Column, Model, Table} from "sequelize-typescript";
import {DataTypes} from "sequelize";
import {UserRolesModel} from "../roles/user-roles.model";
import {Role} from "../roles/roles.model";

interface UserCreationAttrs {
    name: string;
    email: string;
    password: string;
}

@Table({tableName: 'users'})
export class User extends Model<Model, UserCreationAttrs> {
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

    @BelongsToMany(() => Role, () => UserRolesModel)
    roles: Role[];
}