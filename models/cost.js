'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cost extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cost.init({
    id_simulasi: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    kode_barang: {
      type: DataTypes.STRING(8),
      allowNull: false,
    },
    uraian_barang: {
      type: DataTypes.STRING(200),
    },
    bm: {
      type: DataTypes.INTEGER,
    },
    nilai_komoditas: {
      type: DataTypes.FLOAT,
    },
    nilai_bm: {
      type: DataTypes.FLOAT,
    },
    waktu_insert: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  }, {
    sequelize,
    modelName: 'Cost',
  });
  return Cost;
};