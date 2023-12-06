'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Costs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_simulasi: {
        type: Sequelize.INTEGER
      },
      kode_barang: {
        type: Sequelize.STRING
      },
      uraian_barang: {
        type: Sequelize.STRING
      },
      bm: {
        type: Sequelize.INTEGER
      },
      nilai_komoditas: {
        type: Sequelize.FLOAT
      },
      nilai_bm: {
        type: Sequelize.FLOAT
      },
      waktu_insert: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Costs');
  }
};