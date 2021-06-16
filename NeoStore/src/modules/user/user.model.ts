import {
    DataTypes,Model, STRING, UUID, DATE
  } from 'sequelize';
  import sequelize from '../../sequalise';
  
  export default class User extends Model{
      public user_id!: number;
      public user_firstname!: string;
      public user_lastname!: string;
      public user_email!: string;
      public user_password!: string;
      public user_phonenumber!:number;
      // public created_at!: Date;
      // public updated_at!: Date;
  }
  
  User.init({
      user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
      user_firstname: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
      user_lastname: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    user_email: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
      user_password: {
      type: new DataTypes.STRING(255),
      allowNull: false
      },
      user_phonenumber: {
        type: new DataTypes.INTEGER(),
        allowNull: false,
      },
    //   created_at: {
    //     type: DATE,
    //     field: 'created_at',
    // },
    // updated_at: {
    //     type: DATE,
    //     field: 'updated_at'
    // }
  }, {
    tableName:"users",
      underscored: true,
      sequelize, 
  });
  