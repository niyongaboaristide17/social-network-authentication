'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.Profile, {as: 'profile'})
    }
  }
  User.init({
    email: DataTypes.STRING,
    google_id: DataTypes.STRING,
    names: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};