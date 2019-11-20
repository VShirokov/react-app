module.exports = (app, db) => {
    // GET all users
    app.get('/api/users', (req, res) => {
      db.users.findAll()
        .then(users => {
          res.json(users);
        })
        .catch((e) => console.log(`error: get all users - ${e}`));
    });

    // GET one user by id
    app.get('/api/users/:id', (req, res) => {
      const id = req.params.id;
      db.users.find({
        where: { id: id }
      })
      .then(user => {
        res.json(user);
      })
      .catch((e) => console.log(`error: get user by id - ${e}`));
    });

    // POST create user
    app.post('/api/users', (req, res) => {
      const [ username, email, password ] = [ req.body.username, req.body.email, req.body.password ];
    	db.users.create({
        username: username,
        email: email,
        password: password
      }).then( (result) => res.json(result) )
      .then(console.log(res))
      .catch((e) => console.log(`error: create user - ${e}`));
    });

    // PUT single user
    app.put('/api/users/:id', (req, res) => {
      const [ id, updates ] = [ req.params.id, req.body.updates ];
      db.users.find({
        where: { id: id }
      })
        .then(user => {
          return user.updateAttributes(updates);
        })
        .then(updatedOwner => {
          res.json(updatedOwner);
        })
        .catch((e) => console.log(`error: update user by id - ${e}`));
    });

    // DELETE single user
    app.delete('/api/users/:id', (req, res) => {
      const id = req.params.id;
      db.users.destroy({
        where: { id: id }
      })
        .then(deletedOwner => {
          res.json(deletedOwner);
        })
        .catch((e) => console.log(`error: delete user by id - ${e}`));
    });
};
