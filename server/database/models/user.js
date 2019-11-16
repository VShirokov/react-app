module.exports = (sequelize) => {
    const User = sequelize.define('User', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      username: Sequelize.STRING,
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email_verified: {
        type: Sequelize.STRING.BINARY,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      date_created: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false
      },
      last_login: Sequelize.DATE,
      age: Sequelize.INTEGER
    });

    User.associate = function (models) {
      // associations can be defined here
      User.hasMany(models.Post, {
        foreignKey: 'userId',
        as: 'posts',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.Comment, {
        foreignKey: 'userId',
        as: 'comments',
        onDelete: 'CASCADE',
      });
    };
    return User;
  };
