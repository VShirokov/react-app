module.exports = (sequelize) => {
    const Post = sequelize.define('Post', {
      pid: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      title: Sequelize.STRING,
      content: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      author: {
        type: Sequelize.STRING,
        allowNull: false
      },
      date_created: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false
      },
      likes: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      }
    });

    Post.associate = function (models) {
      // associations can be defined here
      Post.hasMany(models.Comment, {
        foreignKey: 'postId',
        as: 'comments',
        onDelete: 'CASCADE',
      });

      Post.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'author',
        onDelete: 'CASCADE',
      });
    };
    return Post;
  };
