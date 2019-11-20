const models = require('./database/models');
const Sequelize = require('sequelize');
const sequelizeString = new Sequelize('postgres://harry:mypassword@127.0.0.1:5432/dev_db', {});

sequelizeString.authenticate().then(() => {
  console.log("Success authenticate to db!");
})
.catch((error)=> {
  console.log(`error with authenticate: ${error}`);
});

syncDb = () => {
  return (
    models.sequelize.sync().then(() => {
      console.log('###___synchronized with database___###');
    }).catch((err) => {
      console.log(err);
    })
  );
};

module.exports = syncDb;
