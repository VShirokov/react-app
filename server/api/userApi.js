module.exports = (app, db) => {
    const usersModel = db.User;

    // GET all users
    app.get('/api/users', (req, res) => {
        usersModel.findAll()
            .then(users => {
                res.json(users);
            })
            .catch((e) => console.log(`error: get all posts - ${e}`));
    });

    // GET one user by id
    app.get('/api/users/:id', (req, res) => {
        const userId = req.params.id;

        usersModel.findOne({
            where: { id: userId }
        })
            .then(user => {
                res.json(user);
            })
            .catch((e) => console.log(`error: get user by id - ${e}`));
    });

    // POST create user
    app.post('/api/users', (req, res) => {
        const [username, email, password] = [req.body.username, req.body.email, req.body.password];

        usersModel.create({
            username: username,
            email: email,
            password: password
        }).then(
            (result) => res.json(result))
        .catch((e) => console.log(`error: create user - ${e}`));
    });

    // PATCH single user
    app.patch('/api/users/:id', (req, res) => {
        const userId = req.params.id;

        usersModel.findOne({
            where: { id: userId }
        })
            .then(user => {
                return user.update(req.body)
                .then(updatedUser => {
                    res.json(updatedUser);
                });
            })
            .catch((e) => console.log(`error: update user by id - ${e}`));
    });

    // DELETE single user
    app.delete('/api/users/:id', (req, res) => {
        const userId = req.params.id;

        usersModel.destroy({
            where: { id: userId }
        })
            .then(deletedUser => {
                res.json(deletedUser);
            })
            .catch((e) => console.log(`error: delete user by id - ${e}`));
    });
};
