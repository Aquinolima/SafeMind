'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Registro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Registro.belongsTo(models.User);
    }
  };
  Registro.init({
    userId: DataTypes.INTEGER,
    sentimento: DataTypes.STRING,
    emocoes: DataTypes.STRING,
    situacao: DataTypes.TEXT,
    pensamentos: DataTypes.TEXT,
    reacao: DataTypes.TEXT,
    data: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Registro',
  });
  return Registro;
};