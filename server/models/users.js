const Sequelize = require('sequelize');
const sequelizeString = new Sequelize('postgres://harry:mypassword@127.0.0.1:5432/dev_db', {});

const User = sequelizeString.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email_verified: {
    type: Sequelize.STRING.BINARY,
    allowNull: false
  },
  date_created: {
    type: Sequelize.DATE,
    allowNull: false
  },
  last_login: {
    type: Sequelize.DATE,
    allowNull: false
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

sequelizeString.sync({ force: true }).then(result=>{
  console.log(result);
})
.catch(err=> console.log(err));


module.exports = sequelizeString;
