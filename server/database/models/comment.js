module.exports = (sequelize) => {
    const Comment = sequelize.define('Comment', {
  //     cid SERIAL PRIMARY KEY,
  // comment VARCHAR(255),
  // author VARCHAR REFERENCES users(username),
  // user_id INT REFERENCES users(uid),
  // post_id INT REFERENCES posts(pid),
  // date_created TIMESTAMP
      cid: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      author: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      comment: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      postId: Sequelize.INTEGER,
      userId: Sequelize.INTEGER,
      date_created: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false
      },
    }, {});
    Comment.associate = function (models) {
      // associations can be defined here
      Comment.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'author'
      });
      Comment.belongsTo(models.Post, {
        foreignKey: 'postId',
        as: 'post'
      });
    };
    return Comment;
  };
