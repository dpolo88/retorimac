module.exports = (sequelize, DataTypes) => {
  const Film = sequelize.define('film', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    created: {
      type: DataTypes.STRING,
      allowNull: false
    },
    director: {
      type: DataTypes.STRING,
      allowNull: false
    },
    episode_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    opening_crawl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    producer: {
      type: DataTypes.STRING,
      allowNull: false
    },
    release_date: {
      type: DataTypes.STRING,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    url: {
      type: DataTypes.STRING,
      allowNull: true
    },
    createdAt: {
      type: DataTypes.STRING,
      allowNull: true
    },
    updatedAt: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'film',
    freezeTableName: true,
    timestamps: false
  });

  return Film;
};