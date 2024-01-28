import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {User} from "../users/user.model";
import {UserRolesModel} from "./user-roles.model";

@Table({tableName: 'roles'})
export class Role extends Model<Role> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    value: string;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    description: string;

    @BelongsToMany(() => User, () => UserRolesModel)
    users: User[];
}