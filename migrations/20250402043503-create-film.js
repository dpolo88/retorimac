'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('films', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      created: {
        type: Sequelize.STRING
      },
      director: {
        type: Sequelize.STRING
      },
      episode_id: {
        type: Sequelize.STRING
      },
      opening_crawl: {
        type: Sequelize.STRING
      },
      producer: {
        type: Sequelize.STRING
      },
      release_date: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      url: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('films');
  }
};