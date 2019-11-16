// module.exports = pool;
// const sequelize = new Sequelize('postgres', 'postgres', 'PasswordDatabase!!', {
//   host: 'localhost',
//   dialect: 'mysql'|'mariadb'|'sqlite'|'postgres'|'mssql',

//   pool: {
//     max: 5,
//     min: 0,
//     idle: 10000
//   }
// });

// Or you can simply use a connection uri
const Sequelize = require('sequelize');
const sequelizeString = new Sequelize('postgres://harry:mypassword@127.0.0.1:5432/dev_db', {});

sequelizeString.authenticate().then(() => {
  console.log("Success authenticate to db!");
}).catch((err) => {
  console.log(err);
});

// sequelizeString.sync({ force: true }).then(result=>{
//   console.log(result);
// })
// .catch(err=> console.log(err));


module.exports = sequelizeString;
