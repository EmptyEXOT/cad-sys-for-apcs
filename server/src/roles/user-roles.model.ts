import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {User} from "../users/user.model";
import {Role} from "./roles.model";

@Table({tableName: 'user-roles', createdAt: false, updatedAt: false})
export class UserRolesModel extends Model<UserRolesModel> {
    @Column({unique: true, primaryKey: true, autoIncrement: true, type: DataType.INTEGER})
    id: number

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number

    @ForeignKey(() => Role)
    @Column({type: DataType.INTEGER})
    roleId: number
}