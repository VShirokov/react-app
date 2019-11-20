module.exports = (app, db) => {
  // GET all posts
  app.get('api/posts', (req, res) => {
    db.post.findAll()
      .then(post => {
        res.json(post);
      })
      .catch((e) => console.log(`error: get all posts - ${e}`));
  });

  // GET one post by id
  app.get('api/posts/:id', (req, res) => {
    const id = req.params.id;
    db.post.find({
      where: { id: id }
    })
      .then(post => {
        res.json(post);
      })
      .catch((e) => console.log(`error: get post by id - ${e}`));
  });

  // POST single post
  app.post('api/posts', (req, res) => {
    console.log('reqest create post', req.body);
    const title = req.body.title || '';
    const content = req.body.title || '';
    const userId = req.body.userId;
    const author = req.body.author || userId;
    db.post.create({
      title: title,
      content: content,
      userId: userId,
      author: author
    })
      .then(newPost => {
        res.json(newPost);
      })
      .catch((e) => console.log(`error: create post - ${e}`));
  });

  // PUT single post
  app.patch('api/posts/:id', (req, res) => {
    const [ id, updates ] = [ req.params.id, req.body.updates ];
    db.post.find({
      where: { id: id }
    })
      .then(post => {
        return post.update(updates);
      })
      .then(updatedPost => {
        res.json(updatedPost);
      })
      .catch((e) => console.log(`error: update post by id - ${e}`));
  });

  app.delete('api/posts/:id', (req, res) => {
    const id = req.params.id;
    db.post.destroy({
      where: { id: id }
    })
      .then(deletedPost => {
        res.json(deletedPost);
      })
      .catch((e) => console.log(`error: delete post by id - ${e}`));
  });

};
