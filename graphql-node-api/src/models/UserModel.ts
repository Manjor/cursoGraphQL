import * as Sequelize from "sequelize";
import { BaseModelInterface } from "../interfaces/BseModelInterface";
import { ModelsInterface } from "../interfaces/ModelsInterface";

export interface UserAttributes{
  id?: number;
  name: string;
  email: string;
  cpf: string;
  nascimento: string;
  consultas: number;
  compras: number;
  createdAt?: string;
  updateAt?: string;
}

export interface UserInstance extends Sequelize.Instance<UserAttributes>, UserAttributes{

}

export interface UserModel extends BaseModelInterface, Sequelize.Model<UserInstance, UserAttributes>{

}

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): UserModel =>{

  const User : UserModel = sequelize.define('User',{
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name:{
      type: DataTypes.STRING(128),
      allowNull:false
    },
    email:{
      type: DataTypes.STRING(128),
      allowNull: false,
      unique: true
    },
    cpf:{
      type: DataTypes.STRING(11),
      allowNull: false, 
      unique: true
    },
    nascimento:{
      type: DataTypes.STRING(100),
      allowNull: true
    },
    consultas:{
      type: DataTypes.INTEGER,
      allowNull: true
    },
    compras:{
      type: DataTypes.INTEGER,
      allowNull: true
    }
  },{
    tableName: 'user',
    hooks:{
      beforeCreate: (user: UserInstance, options: Sequelize.CreateOptions):void =>{

      }
    }
  });
  
  User.associate = (models: ModelsInterface): void =>{};

  return User
}